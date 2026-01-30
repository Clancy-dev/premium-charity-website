'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Plus, Edit2, Trash2, X } from 'lucide-react'

const initialEvents = [
  { id: 1, title: 'Community Cleanup', date: '2024-02-15', time: '09:00', location: 'Central Park', category: 'Environment' },
  { id: 2, title: 'Healthcare Fair', date: '2024-02-20', time: '10:00', location: 'Community Center', category: 'Healthcare' },
]

export default function EventsAdmin() {
  const [events, setEvents] = useState(initialEvents)
  const [showForm, setShowForm] = useState(false)
  const [editingId, setEditingId] = useState<number | null>(null)
  const [formData, setFormData] = useState({ title: '', date: '', time: '', location: '', category: '' })

  const handleDelete = (id: number) => {
    setEvents(events.filter(e => e.id !== id))
  }

  const handleEdit = (id: number) => {
    const event = events.find(e => e.id === id)
    if (event) {
      setFormData(event)
      setEditingId(id)
      setShowForm(true)
    }
  }

  const handleSubmit = () => {
    if (editingId) {
      setEvents(events.map(e => e.id === editingId ? { ...e, ...formData } : e))
    } else {
      setEvents([...events, { id: Math.max(...events.map(e => e.id)) + 1, ...formData }])
    }
    setFormData({ title: '', date: '', time: '', location: '', category: '' })
    setShowForm(false)
    setEditingId(null)
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-serif font-bold">Events</h1>
          <p className="text-foreground/70">Manage upcoming charity events</p>
        </div>
        <Button className="bg-primary hover:bg-primary/90 text-white gap-2" onClick={() => { setShowForm(true); setEditingId(null); setFormData({ title: '', date: '', time: '', location: '', category: '' }); }}>
          <Plus className="w-4 h-4" />
          Add Event
        </Button>
      </div>

      {showForm && (
        <Card>
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle>{editingId ? 'Edit' : 'Add'} Event</CardTitle>
              <button onClick={() => setShowForm(false)}>
                <X className="w-5 h-5" />
              </button>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <input type="text" placeholder="Event title" value={formData.title} onChange={(e) => setFormData({ ...formData, title: e.target.value })} className="w-full px-4 py-2 border border-border rounded-lg" />
            <div className="grid grid-cols-2 gap-4">
              <input type="date" value={formData.date} onChange={(e) => setFormData({ ...formData, date: e.target.value })} className="px-4 py-2 border border-border rounded-lg" />
              <input type="time" value={formData.time} onChange={(e) => setFormData({ ...formData, time: e.target.value })} className="px-4 py-2 border border-border rounded-lg" />
            </div>
            <input type="text" placeholder="Location" value={formData.location} onChange={(e) => setFormData({ ...formData, location: e.target.value })} className="w-full px-4 py-2 border border-border rounded-lg" />
            <input type="text" placeholder="Category" value={formData.category} onChange={(e) => setFormData({ ...formData, category: e.target.value })} className="w-full px-4 py-2 border border-border rounded-lg" />
            <div className="flex gap-2 justify-end">
              <Button variant="outline" onClick={() => setShowForm(false)}>Cancel</Button>
              <Button className="bg-primary hover:bg-primary/90 text-white" onClick={handleSubmit}>Save</Button>
            </div>
          </CardContent>
        </Card>
      )}

      <div className="space-y-4">
        {events.map((event) => (
          <Card key={event.id}>
            <CardContent className="pt-6">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-lg">{event.title}</h3>
                  <p className="text-sm text-foreground/60">{event.date} at {event.time} • {event.location}</p>
                  <span className="inline-block mt-2 px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">{event.category}</span>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" onClick={() => handleEdit(event.id)}>
                    <Edit2 className="w-4 h-4" />
                  </Button>
                  <Button size="sm" variant="outline" className="text-red-600 bg-transparent" onClick={() => handleDelete(event.id)}>
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
