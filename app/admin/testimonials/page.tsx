'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Plus, Edit2, Trash2, X } from 'lucide-react'

const initialTestimonials = [
  { id: 1, name: 'Sarah Johnson', role: 'Community Leader', text: 'Elevate Impact transformed our community...' },
  { id: 2, name: 'Michael Chen', role: 'Healthcare Worker', text: 'Their healthcare initiative brought medical services...' },
  { id: 3, name: 'Amara Okafor', role: 'Volunteer', text: 'Being part of this organization gave me purpose...' },
]

export default function TestimonialsAdmin() {
  const [testimonials, setTestimonials] = useState(initialTestimonials)
  const [showForm, setShowForm] = useState(false)
  const [editingId, setEditingId] = useState<number | null>(null)
  const [formData, setFormData] = useState({ name: '', role: '', text: '' })

  const handleDelete = (id: number) => {
    setTestimonials(testimonials.filter(t => t.id !== id))
  }

  const handleEdit = (id: number) => {
    const testimonial = testimonials.find(t => t.id === id)
    if (testimonial) {
      setFormData({ name: testimonial.name, role: testimonial.role, text: testimonial.text })
      setEditingId(id)
      setShowForm(true)
    }
  }

  const handleSubmit = () => {
    if (editingId) {
      setTestimonials(testimonials.map(t =>
        t.id === editingId ? { ...t, ...formData } : t
      ))
    } else {
      setTestimonials([...testimonials, { id: Math.max(...testimonials.map(t => t.id)) + 1, ...formData }])
    }
    setFormData({ name: '', role: '', text: '' })
    setShowForm(false)
    setEditingId(null)
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-serif font-bold">Testimonials</h1>
          <p className="text-foreground/70">Manage what people say about us</p>
        </div>
        <Button className="bg-primary hover:bg-primary/90 text-white gap-2" onClick={() => { setShowForm(true); setEditingId(null); setFormData({ name: '', role: '', text: '' }); }}>
          <Plus className="w-4 h-4" />
          Add Testimonial
        </Button>
      </div>

      {showForm && (
        <Card>
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle>{editingId ? 'Edit' : 'Add'} Testimonial</CardTitle>
              <button onClick={() => setShowForm(false)}>
                <X className="w-5 h-5" />
              </button>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Name</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:border-primary"
                placeholder="Full name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Role</label>
              <input
                type="text"
                value={formData.role}
                onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:border-primary"
                placeholder="Job title or role"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Testimonial Text</label>
              <textarea
                value={formData.text}
                onChange={(e) => setFormData({ ...formData, text: e.target.value })}
                rows={4}
                className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:border-primary"
                placeholder="What do they have to say?"
              />
            </div>
            <div className="flex gap-2 justify-end">
              <Button variant="outline" onClick={() => setShowForm(false)}>Cancel</Button>
              <Button className="bg-primary hover:bg-primary/90 text-white" onClick={handleSubmit}>Save</Button>
            </div>
          </CardContent>
        </Card>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {testimonials.map((testimonial) => (
          <Card key={testimonial.id}>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <p className="italic text-foreground/80 line-clamp-3">"{testimonial.text}"</p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-foreground/60">{testimonial.role}</p>
                </div>
                <div className="flex gap-2 justify-end">
                  <Button size="sm" variant="outline" onClick={() => handleEdit(testimonial.id)}>
                    <Edit2 className="w-4 h-4" />
                  </Button>
                  <Button size="sm" variant="outline" className="text-red-600 hover:bg-red-50 bg-transparent" onClick={() => handleDelete(testimonial.id)}>
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
