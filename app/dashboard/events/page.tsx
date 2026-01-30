'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Plus, Edit, Trash2, Check, X, Calendar, MapPin } from 'lucide-react'
import { useForm } from 'react-hook-form'

interface EventForm {
  title: string
  description: string
  date: string
  time: string
  location: string
}

const dummyEvents = [
  {
    id: '1',
    title: 'Charity Gala Dinner',
    description: 'Annual fundraising gala to support our mission',
    date: '2024-03-15',
    time: '18:00',
    location: 'Grand Ballroom, City Center',
  },
]

export default function EventsPage() {
  const [events, setEvents] = useState(dummyEvents)
  const [isAddingNew, setIsAddingNew] = useState(false)
  const [editingId, setEditingId] = useState<string | null>(null)
  const { register, handleSubmit, reset, setValue } = useForm<EventForm>()

  const onSubmit = async (data: EventForm) => {
    if (editingId) {
      setEvents(events.map(e => e.id === editingId ? { ...e, ...data } : e))
      setEditingId(null)
    } else {
      const newEvent = { id: Date.now().toString(), ...data }
      setEvents([...events, newEvent])
    }
    reset()
    setIsAddingNew(false)
  }

  const handleEdit = (event: typeof events[0]) => {
    setEditingId(event.id)
    setValue('title', event.title)
    setValue('description', event.description)
    setValue('date', event.date)
    setValue('time', event.time)
    setValue('location', event.location)
    setIsAddingNew(true)
  }

  const handleDelete = (id: string) => {
    setEvents(events.filter(e => e.id !== id))
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Events</h1>
          <p className="text-foreground/70">Create and manage upcoming charity events</p>
        </div>
        <Button
          onClick={() => {
            setIsAddingNew(!isAddingNew)
            setEditingId(null)
            reset()
          }}
          className="bg-primary hover:bg-primary/90 text-white gap-2"
        >
          <Plus className="w-4 h-4" />
          Create Event
        </Button>
      </div>

      {isAddingNew && (
        <div className="bg-white rounded-lg border border-border p-8">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Title</label>
              <input
                {...register('title', { required: true })}
                placeholder="Event Title"
                className="w-full px-4 py-2 border border-border rounded-lg bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Description</label>
              <textarea
                {...register('description', { required: true })}
                placeholder="Event description"
                rows={3}
                className="w-full px-4 py-2 border border-border rounded-lg bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Date</label>
                <input
                  {...register('date', { required: true })}
                  type="date"
                  className="w-full px-4 py-2 border border-border rounded-lg bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Time</label>
                <input
                  {...register('time', { required: true })}
                  type="time"
                  className="w-full px-4 py-2 border border-border rounded-lg bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Location</label>
              <input
                {...register('location', { required: true })}
                placeholder="Event location"
                className="w-full px-4 py-2 border border-border rounded-lg bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div className="flex gap-4">
              <Button type="submit" className="bg-primary hover:bg-primary/90 text-white gap-2">
                <Check className="w-4 h-4" />
                Save Event
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={() => {
                  setIsAddingNew(false)
                  setEditingId(null)
                  reset()
                }}
              >
                <X className="w-4 h-4" />
                Cancel
              </Button>
            </div>
          </form>
        </div>
      )}

      <div className="space-y-4">
        {events.map((event) => (
          <div key={event.id} className="bg-white rounded-lg border border-border p-6 hover:border-primary transition">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">{event.title}</h3>
                <p className="text-foreground/70 mb-4">{event.description}</p>
              </div>
              <div className="flex gap-2">
                <Button size="sm" variant="outline" onClick={() => handleEdit(event)}>
                  <Edit className="w-4 h-4" />
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="text-red-600 hover:bg-red-50 bg-transparent"
                  onClick={() => handleDelete(event.id)}
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
            </div>
            <div className="flex gap-6 text-sm text-foreground/70">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {new Date(event.date).toLocaleDateString()} at {event.time}
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                {event.location}
              </div>
            </div>
          </div>
        ))}
      </div>

      {events.length === 0 && (
        <div className="text-center py-12">
          <p className="text-foreground/70 mb-4">No events yet</p>
          <Button
            onClick={() => setIsAddingNew(true)}
            className="bg-primary hover:bg-primary/90 text-white"
          >
            Create First Event
          </Button>
        </div>
      )}
    </div>
  )
}
