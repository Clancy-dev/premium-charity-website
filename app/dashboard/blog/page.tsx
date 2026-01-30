'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Plus, Edit, Trash2, Check, X, Eye, EyeOff } from 'lucide-react'
import { useForm } from 'react-hook-form'

interface BlogForm {
  title: string
  excerpt: string
  content: string
  slug: string
  category: string
}

const dummyPosts = [
  {
    id: '1',
    title: 'Impact Report 2024',
    excerpt: 'Our annual impact report showcasing achievements and statistics.',
    slug: 'impact-report-2024',
    category: 'news',
    published: true,
  },
]

export default function BlogPage() {
  const [posts, setPosts] = useState(dummyPosts)
  const [isAddingNew, setIsAddingNew] = useState(false)
  const [editingId, setEditingId] = useState<string | null>(null)
  const { register, handleSubmit, reset, setValue } = useForm<BlogForm>()

  const onSubmit = async (data: BlogForm) => {
    if (editingId) {
      setPosts(posts.map(p => p.id === editingId ? { ...p, ...data } : p))
      setEditingId(null)
    } else {
      const newPost = { id: Date.now().toString(), ...data, published: false }
      setPosts([...posts, newPost])
    }
    reset()
    setIsAddingNew(false)
  }

  const handleEdit = (post: typeof posts[0]) => {
    setEditingId(post.id)
    setValue('title', post.title)
    setValue('excerpt', post.excerpt)
    setValue('slug', post.slug)
    setValue('category', post.category)
    setIsAddingNew(true)
  }

  const handleDelete = (id: string) => {
    setPosts(posts.filter(p => p.id !== id))
  }

  const togglePublish = (id: string) => {
    setPosts(posts.map(p => p.id === id ? { ...p, published: !p.published } : p))
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Blog Posts</h1>
          <p className="text-foreground/70">Write and publish blog articles and news updates</p>
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
          Write Post
        </Button>
      </div>

      {isAddingNew && (
        <div className="bg-white rounded-lg border border-border p-8">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Title</label>
              <input
                {...register('title', { required: true })}
                placeholder="Post title"
                className="w-full px-4 py-2 border border-border rounded-lg bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Slug</label>
              <input
                {...register('slug', { required: true })}
                placeholder="post-slug"
                className="w-full px-4 py-2 border border-border rounded-lg bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Excerpt</label>
              <textarea
                {...register('excerpt', { required: true })}
                placeholder="Brief summary"
                rows={2}
                className="w-full px-4 py-2 border border-border rounded-lg bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Content</label>
              <textarea
                {...register('content', { required: true })}
                placeholder="Full post content"
                rows={6}
                className="w-full px-4 py-2 border border-border rounded-lg bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-primary font-mono text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Category</label>
              <select
                {...register('category', { required: true })}
                className="w-full px-4 py-2 border border-border rounded-lg bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="news">News</option>
                <option value="impact">Impact Story</option>
                <option value="update">Update</option>
                <option value="events">Events</option>
              </select>
            </div>
            <div className="flex gap-4">
              <Button type="submit" className="bg-primary hover:bg-primary/90 text-white gap-2">
                <Check className="w-4 h-4" />
                Save Draft
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

      <div className="bg-white rounded-lg border border-border overflow-hidden">
        <table className="w-full">
          <thead className="bg-muted border-b border-border">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold">Title</th>
              <th className="px-6 py-3 text-left text-sm font-semibold">Category</th>
              <th className="px-6 py-3 text-left text-sm font-semibold">Status</th>
              <th className="px-6 py-3 text-right text-sm font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {posts.map((post) => (
              <tr key={post.id} className="hover:bg-muted/30 transition">
                <td className="px-6 py-4">
                  <p className="font-medium text-foreground">{post.title}</p>
                  <p className="text-sm text-foreground/60">{post.slug}</p>
                </td>
                <td className="px-6 py-4">
                  <span className="inline-block px-3 py-1 text-sm bg-primary/10 text-primary rounded-full capitalize">
                    {post.category}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span className={`inline-block px-3 py-1 text-sm rounded-full ${
                    post.published
                      ? 'bg-green-50 text-green-700'
                      : 'bg-yellow-50 text-yellow-700'
                  }`}>
                    {post.published ? 'Published' : 'Draft'}
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <div className="flex justify-end gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => togglePublish(post.id)}
                      title={post.published ? 'Unpublish' : 'Publish'}
                    >
                      {post.published ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => handleEdit(post)}
                    >
                      <Edit className="w-4 h-4" />
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="text-red-600 hover:bg-red-50 bg-transparent"
                      onClick={() => handleDelete(post.id)}
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

      {posts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-foreground/70 mb-4">No posts yet</p>
          <Button
            onClick={() => setIsAddingNew(true)}
            className="bg-primary hover:bg-primary/90 text-white"
          >
            Write First Post
          </Button>
        </div>
      )}
    </div>
  )
}
