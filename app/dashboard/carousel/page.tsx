'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Plus, Edit, Trash2, Check, X } from 'lucide-react'
import { useForm } from 'react-hook-form'

// Dummy data for demonstration - will be replaced with database calls
const dummyCarouselImages = [
  {
    id: '1',
    imageUrl: '/carousel-1.jpg',
    title: 'Education & Mentorship',
    subtitle: 'Empowering young minds through quality education',
    order: 1,
    active: true,
  },
  {
    id: '2',
    imageUrl: '/carousel-2.jpg',
    title: 'Healthcare Access',
    subtitle: 'Bringing medical care to underserved communities',
    order: 2,
    active: true,
  },
]

interface CarouselForm {
  title: string
  subtitle: string
  imageUrl: string
}

export default function CarouselPage() {
  const [images, setImages] = useState(dummyCarouselImages)
  const [isAddingNew, setIsAddingNew] = useState(false)
  const [editingId, setEditingId] = useState<string | null>(null)
  const { register, handleSubmit, reset, setValue } = useForm<CarouselForm>()

  const onSubmit = async (data: CarouselForm) => {
    if (editingId) {
      // Update existing
      setImages(images.map(img => img.id === editingId ? { ...img, ...data } : img))
      setEditingId(null)
    } else {
      // Create new
      const newImage = {
        id: Date.now().toString(),
        ...data,
        order: images.length + 1,
        active: true,
      }
      setImages([...images, newImage])
    }
    reset()
    setIsAddingNew(false)
  }

  const handleEdit = (image: typeof images[0]) => {
    setEditingId(image.id)
    setValue('title', image.title)
    setValue('subtitle', image.subtitle)
    setValue('imageUrl', image.imageUrl)
    setIsAddingNew(true)
  }

  const handleDelete = (id: string) => {
    setImages(images.filter(img => img.id !== id))
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Carousel Images</h1>
          <p className="text-foreground/70">Manage your hero section carousel images</p>
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
          Add Image
        </Button>
      </div>

      {/* Form */}
      {isAddingNew && (
        <div className="bg-white rounded-lg border border-border p-8">
          <h2 className="text-xl font-bold text-foreground mb-6">
            {editingId ? 'Edit Image' : 'Add New Image'}
          </h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Image URL
              </label>
              <input
                {...register('imageUrl', { required: true })}
                type="text"
                placeholder="/carousel-1.jpg"
                className="w-full px-4 py-2 border border-border rounded-lg bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Title
              </label>
              <input
                {...register('title', { required: true })}
                type="text"
                placeholder="Slide Title"
                className="w-full px-4 py-2 border border-border rounded-lg bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Subtitle
              </label>
              <textarea
                {...register('subtitle', { required: true })}
                placeholder="Slide Subtitle"
                rows={3}
                className="w-full px-4 py-2 border border-border rounded-lg bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div className="flex gap-4">
              <Button
                type="submit"
                className="bg-primary hover:bg-primary/90 text-white gap-2"
              >
                <Check className="w-4 h-4" />
                Save
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

      {/* Images Table */}
      <div className="bg-white rounded-lg border border-border overflow-hidden">
        <table className="w-full">
          <thead className="bg-muted border-b border-border">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Title</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Preview</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Status</th>
              <th className="px-6 py-3 text-right text-sm font-semibold text-foreground">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {images.map((image) => (
              <tr key={image.id} className="hover:bg-muted/30 transition">
                <td className="px-6 py-4">
                  <div>
                    <p className="font-medium text-foreground">{image.title}</p>
                    <p className="text-sm text-foreground/60">{image.subtitle}</p>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <img
                    src={image.imageUrl || "/placeholder.svg"}
                    alt={image.title}
                    className="w-20 h-12 object-cover rounded"
                  />
                </td>
                <td className="px-6 py-4">
                  <span className={`inline-block px-3 py-1 text-sm rounded-full ${
                    image.active
                      ? 'bg-green-50 text-green-700'
                      : 'bg-gray-50 text-gray-700'
                  }`}>
                    {image.active ? 'Active' : 'Inactive'}
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <div className="flex justify-end gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => handleEdit(image)}
                    >
                      <Edit className="w-4 h-4" />
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="text-red-600 hover:bg-red-50 bg-transparent"
                      onClick={() => handleDelete(image.id)}
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Empty State */}
      {images.length === 0 && (
        <div className="text-center py-12">
          <p className="text-foreground/70 mb-4">No carousel images yet</p>
          <Button
            onClick={() => setIsAddingNew(true)}
            className="bg-primary hover:bg-primary/90 text-white"
          >
            Add First Image
          </Button>
        </div>
      )}
    </div>
  )
}
