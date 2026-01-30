'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Plus, Edit2, Trash2, X } from 'lucide-react'

const initialImages = [
  { id: 1, url: '/premium-hero-1.jpg', title: 'Community Leaders', active: true },
  { id: 2, url: '/premium-hero-2.jpg', title: 'Global Impact', active: true },
  { id: 3, url: '/premium-hero-3.jpg', title: 'Education Focus', active: true },
  { id: 4, url: '/premium-hero-4.jpg', title: 'Healthcare', active: true },
  { id: 5, url: '/premium-hero-5.jpg', title: 'Environment', active: true },
]

export default function CarouselAdmin() {
  const [images, setImages] = useState(initialImages)
  const [showForm, setShowForm] = useState(false)
  const [editingId, setEditingId] = useState<number | null>(null)
  const [formData, setFormData] = useState({ title: '', url: '' })

  const handleDelete = (id: number) => {
    setImages(images.filter(img => img.id !== id))
  }

  const handleEdit = (id: number) => {
    const img = images.find(i => i.id === id)
    if (img) {
      setFormData({ title: img.title, url: img.url })
      setEditingId(id)
      setShowForm(true)
    }
  }

  const handleSubmit = () => {
    if (editingId) {
      setImages(images.map(img =>
        img.id === editingId ? { ...img, title: formData.title, url: formData.url } : img
      ))
    } else {
      setImages([...images, { id: Math.max(...images.map(i => i.id)) + 1, title: formData.title, url: formData.url, active: true }])
    }
    setFormData({ title: '', url: '' })
    setShowForm(false)
    setEditingId(null)
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-serif font-bold">Hero Carousel</h1>
          <p className="text-foreground/70">Manage images displayed on homepage</p>
        </div>
        <Button className="bg-primary hover:bg-primary/90 text-white gap-2" onClick={() => { setShowForm(true); setEditingId(null); setFormData({ title: '', url: '' }); }}>
          <Plus className="w-4 h-4" />
          Add Image
        </Button>
      </div>

      {showForm && (
        <Card>
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle>{editingId ? 'Edit' : 'Add'} Hero Image</CardTitle>
              <button onClick={() => setShowForm(false)} className="text-foreground/60 hover:text-foreground">
                <X className="w-5 h-5" />
              </button>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Title</label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:border-primary"
                placeholder="Image title"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Image URL</label>
              <input
                type="text"
                value={formData.url}
                onChange={(e) => setFormData({ ...formData, url: e.target.value })}
                className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:border-primary"
                placeholder="/image-path.jpg"
              />
            </div>
            <div className="flex gap-2 justify-end">
              <Button variant="outline" onClick={() => setShowForm(false)}>Cancel</Button>
              <Button className="bg-primary hover:bg-primary/90 text-white" onClick={handleSubmit}>Save</Button>
            </div>
          </CardContent>
        </Card>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((image) => (
          <Card key={image.id}>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <img src={image.url || "/placeholder.svg"} alt={image.title} className="w-full h-48 object-cover rounded-lg" />
                <div>
                  <h3 className="font-semibold">{image.title}</h3>
                  <p className="text-sm text-foreground/60 mt-1">{image.url}</p>
                </div>
                <div className="flex gap-2 justify-end">
                  <Button size="sm" variant="outline" onClick={() => handleEdit(image.id)}>
                    <Edit2 className="w-4 h-4" />
                  </Button>
                  <Button size="sm" variant="outline" className="text-red-600 hover:bg-red-50 bg-transparent" onClick={() => handleDelete(image.id)}>
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
