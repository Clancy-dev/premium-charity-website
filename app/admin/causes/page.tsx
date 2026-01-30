'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Plus, Edit2, Trash2, X } from 'lucide-react'

const initialCauses = [
  { id: 1, title: 'Clean Water Initiative', description: 'Access to clean drinking water', progress: 65, raised: 125000, goal: 200000 },
  { id: 2, title: 'Education for All', description: 'School and scholarships', progress: 82, raised: 180000, goal: 220000 },
]

export default function CausesAdmin() {
  const [causes, setCauses] = useState(initialCauses)
  const [showForm, setShowForm] = useState(false)
  const [editingId, setEditingId] = useState<number | null>(null)
  const [formData, setFormData] = useState({ title: '', description: '', progress: 0, raised: 0, goal: 0 })

  const handleDelete = (id: number) => {
    setCauses(causes.filter(c => c.id !== id))
  }

  const handleEdit = (id: number) => {
    const cause = causes.find(c => c.id === id)
    if (cause) {
      setFormData(cause)
      setEditingId(id)
      setShowForm(true)
    }
  }

  const handleSubmit = () => {
    if (editingId) {
      setCauses(causes.map(c => c.id === editingId ? { ...c, ...formData } : c))
    } else {
      setCauses([...causes, { id: Math.max(...causes.map(c => c.id)) + 1, ...formData }])
    }
    setFormData({ title: '', description: '', progress: 0, raised: 0, goal: 0 })
    setShowForm(false)
    setEditingId(null)
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-serif font-bold">Causes</h1>
          <p className="text-foreground/70">Manage fundraising causes</p>
        </div>
        <Button className="bg-primary hover:bg-primary/90 text-white gap-2" onClick={() => { setShowForm(true); setEditingId(null); setFormData({ title: '', description: '', progress: 0, raised: 0, goal: 0 }); }}>
          <Plus className="w-4 h-4" />
          Add Cause
        </Button>
      </div>

      {showForm && (
        <Card>
          <CardHeader>
            <div className="flex justify-between">
              <CardTitle>{editingId ? 'Edit' : 'Add'} Cause</CardTitle>
              <button onClick={() => setShowForm(false)}><X className="w-5 h-5" /></button>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <input type="text" placeholder="Cause title" value={formData.title} onChange={(e) => setFormData({ ...formData, title: e.target.value })} className="w-full px-4 py-2 border border-border rounded-lg" />
            <textarea placeholder="Description" value={formData.description} onChange={(e) => setFormData({ ...formData, description: e.target.value })} rows={3} className="w-full px-4 py-2 border border-border rounded-lg" />
            <div className="grid grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Progress %</label>
                <input type="number" value={formData.progress} onChange={(e) => setFormData({ ...formData, progress: parseInt(e.target.value) })} className="w-full px-4 py-2 border border-border rounded-lg" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Raised</label>
                <input type="number" value={formData.raised} onChange={(e) => setFormData({ ...formData, raised: parseInt(e.target.value) })} className="w-full px-4 py-2 border border-border rounded-lg" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Goal</label>
                <input type="number" value={formData.goal} onChange={(e) => setFormData({ ...formData, goal: parseInt(e.target.value) })} className="w-full px-4 py-2 border border-border rounded-lg" />
              </div>
            </div>
            <div className="flex gap-2 justify-end">
              <Button variant="outline" onClick={() => setShowForm(false)}>Cancel</Button>
              <Button className="bg-primary hover:bg-primary/90 text-white" onClick={handleSubmit}>Save</Button>
            </div>
          </CardContent>
        </Card>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {causes.map((cause) => (
          <Card key={cause.id}>
            <CardContent className="pt-6">
              <h3 className="font-semibold text-lg">{cause.title}</h3>
              <p className="text-sm text-foreground/60 mt-1">{cause.description}</p>
              <div className="mt-4">
                <div className="flex justify-between text-sm mb-2">
                  <span>${cause.raised}</span>
                  <span>${cause.goal}</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-primary rounded-full h-2" style={{ width: `${cause.progress}%` }} />
                </div>
                <p className="text-xs text-foreground/60 mt-1">{cause.progress}% funded</p>
              </div>
              <div className="flex gap-2 justify-end mt-4">
                <Button size="sm" variant="outline" onClick={() => handleEdit(cause.id)}>
                  <Edit2 className="w-4 h-4" />
                </Button>
                <Button size="sm" variant="outline" className="text-red-600 bg-transparent" onClick={() => handleDelete(cause.id)}>
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
