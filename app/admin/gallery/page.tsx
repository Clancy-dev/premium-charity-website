'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Plus, Edit2, Trash2, X } from 'lucide-react'

const initialImages = [
  { id: 1, title: 'Education Program', category: 'Education', image: '/gallery-1.jpg' },
  { id: 2, title: 'Community Development', category: 'Community', image: '/gallery-2.jpg' },
  { id: 3, title: 'Healthcare Services', category: 'Health', image: '/gallery-3.jpg' },
]

export default function GalleryAdmin() {
  const [images, setImages] = useState(initialImages)
  const [showForm, setShowForm] = useState(false)
  const [editingId, setEditingId] = useState<number | null>(null)
  const [formData, setFormData] = useState({ title: '', category: '', image: '' })

  const handleDelete = (id: number) => {
    setImages(images.filter(i => i.id !== id))
  }

  const handleEdit = (id: number) => {
    const image = images.find(i => i.id === id)
    if (image) {
      setFormData(image)
      setEditingId(id)
      setShowForm(true)
    }
  }

  const handleSubmit = () => {
    if (editingId) {
      setImages(images.map(i => i.id === editingId ? { ...i, ...formData } : i))
    } else {
      setImages([...images, { id: Math.max(...images.map(i => i.id)) + 1, ...formData }])
    }
    setFormData({ title: '', category: '', image: '' })
    setShowForm(false)
    setEditingId(null)
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-serif font-bold">Gallery</h1>
          <p className="text-foreground/70">Manage gallery photos</p>
        </div>
        <Button className="bg-primary hover:bg-primary/90 text-white gap-2" onClick={() => { setShowForm(true); setEditingId(null); setFormData({ title: '', category: '', image: '' }); }}>
          <Plus className="w-4 h-4" />
          Add Photo
        </Button>
      </div>

      {showForm && (
        <Card>
          <CardHeader>
            <div className="flex justify-between">
              <CardTitle>{editingId ? 'Edit' : 'Add'} Photo</CardTitle>
              <button onClick={() => setShowForm(false)}><X className="w-5 h-5" /></button>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <input type="text" placeholder="Photo title" value={formData.title} onChange={(e) => setFormData({ ...formData, title: e.target.value })} className="w-full px-4 py-2 border border-border rounded-lg" />
            <input type="text" placeholder="Category" value={formData.category} onChange={(e) => setFormData({ ...formData, category: e.target.value })} className="w-full px-4 py-2 border border-border rounded-lg" />
            <input type="text" placeholder="Image URL" value={formData.image} onChange={(e) => setFormData({ ...formData, image: e.target.value })} className="w-full px-4 py-2 border border-border rounded-lg" />
            <div className="flex gap-2 justify-end">
              <Button variant="outline" onClick={() => setShowForm(false)}>Cancel</Button>
              <Button className="bg-primary hover:bg-primary/90 text-white" onClick={handleSubmit}>Save</Button>
            </div>
          </CardContent>
        </Card>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {images.map((image) => (
          <Card key={image.id}>
            <CardContent className="pt-6">
              <img src={image.image || "/placeholder.svg"} alt={image.title} className="w-full h-40 object-cover rounded-lg mb-4" />
              <h3 className="font-semibold">{image.title}</h3>
              <p className="text-sm text-foreground/60">{image.category}</p>
              <div className="flex gap-2 justify-end mt-4">
                <Button size="sm" variant="outline" onClick={() => handleEdit(image.id)}>
                  <Edit2 className="w-4 h-4" />
                </Button>
                <Button size="sm" variant="outline" className="text-red-600 bg-transparent" onClick={() => handleDelete(image.id)}>
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
