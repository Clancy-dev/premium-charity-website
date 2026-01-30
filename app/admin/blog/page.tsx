'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Plus, Edit2, Trash2, X } from 'lucide-react'

const initialPosts = [
  { id: 1, title: 'Impact Report 2024', category: 'News', author: 'Admin', date: '2024-01-15', excerpt: 'Our annual impact report...' },
  { id: 2, title: 'Success Stories', category: 'Impact', author: 'Team', date: '2024-01-10', excerpt: 'Hear from those we helped...' },
]

export default function BlogAdmin() {
  const [posts, setPosts] = useState(initialPosts)
  const [showForm, setShowForm] = useState(false)
  const [editingId, setEditingId] = useState<number | null>(null)
  const [formData, setFormData] = useState({ title: '', category: '', author: '', date: '', excerpt: '', content: '' })

  const handleDelete = (id: number) => {
    setPosts(posts.filter(p => p.id !== id))
  }

  const handleEdit = (id: number) => {
    const post = posts.find(p => p.id === id)
    if (post) {
      setFormData({ ...post, content: '' })
      setEditingId(id)
      setShowForm(true)
    }
  }

  const handleSubmit = () => {
    if (editingId) {
      setPosts(posts.map(p => p.id === editingId ? { ...p, title: formData.title, category: formData.category, author: formData.author, date: formData.date, excerpt: formData.excerpt } : p))
    } else {
      setPosts([...posts, { id: Math.max(...posts.map(p => p.id)) + 1, title: formData.title, category: formData.category, author: formData.author, date: formData.date, excerpt: formData.excerpt }])
    }
    setFormData({ title: '', category: '', author: '', date: '', excerpt: '', content: '' })
    setShowForm(false)
    setEditingId(null)
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-serif font-bold">Blog Posts</h1>
          <p className="text-foreground/70">Manage news and articles</p>
        </div>
        <Button className="bg-primary hover:bg-primary/90 text-white gap-2" onClick={() => { setShowForm(true); setEditingId(null); setFormData({ title: '', category: '', author: '', date: '', excerpt: '', content: '' }); }}>
          <Plus className="w-4 h-4" />
          Write Post
        </Button>
      </div>

      {showForm && (
        <Card>
          <CardHeader>
            <div className="flex justify-between">
              <CardTitle>{editingId ? 'Edit' : 'Write'} Post</CardTitle>
              <button onClick={() => setShowForm(false)}><X className="w-5 h-5" /></button>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <input type="text" placeholder="Post title" value={formData.title} onChange={(e) => setFormData({ ...formData, title: e.target.value })} className="w-full px-4 py-2 border border-border rounded-lg" />
            <div className="grid grid-cols-2 gap-4">
              <input type="text" placeholder="Category" value={formData.category} onChange={(e) => setFormData({ ...formData, category: e.target.value })} className="px-4 py-2 border border-border rounded-lg" />
              <input type="text" placeholder="Author" value={formData.author} onChange={(e) => setFormData({ ...formData, author: e.target.value })} className="px-4 py-2 border border-border rounded-lg" />
            </div>
            <input type="date" value={formData.date} onChange={(e) => setFormData({ ...formData, date: e.target.value })} className="w-full px-4 py-2 border border-border rounded-lg" />
            <textarea placeholder="Excerpt" value={formData.excerpt} onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })} rows={2} className="w-full px-4 py-2 border border-border rounded-lg" />
            <textarea placeholder="Full content" value={formData.content} onChange={(e) => setFormData({ ...formData, content: e.target.value })} rows={6} className="w-full px-4 py-2 border border-border rounded-lg" />
            <div className="flex gap-2 justify-end">
              <Button variant="outline" onClick={() => setShowForm(false)}>Cancel</Button>
              <Button className="bg-primary hover:bg-primary/90 text-white" onClick={handleSubmit}>Publish</Button>
            </div>
          </CardContent>
        </Card>
      )}

      <div className="space-y-4">
        {posts.map((post) => (
          <Card key={post.id}>
            <CardContent className="pt-6">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <h3 className="font-semibold text-lg">{post.title}</h3>
                  <p className="text-sm text-foreground/60 mt-1">{post.excerpt}</p>
                  <div className="flex gap-4 mt-3 text-xs text-foreground/50">
                    <span>{post.category}</span>
                    <span>{post.author}</span>
                    <span>{post.date}</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" onClick={() => handleEdit(post.id)}>
                    <Edit2 className="w-4 h-4" />
                  </Button>
                  <Button size="sm" variant="outline" className="text-red-600 bg-transparent" onClick={() => handleDelete(post.id)}>
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
