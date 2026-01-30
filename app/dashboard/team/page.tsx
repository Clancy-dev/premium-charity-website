'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Plus, Edit, Trash2, Check, X } from 'lucide-react'
import { useForm } from 'react-hook-form'

interface TeamMemberForm {
  name: string
  role: string
  bio: string
  imageUrl: string
}

const dummyTeamMembers = [
  {
    id: '1',
    name: 'Dr. Sarah Johnson',
    role: 'Executive Director',
    bio: 'With 20 years of experience in global development, Sarah leads our mission.',
    imageUrl: '👩‍💼',
  },
  {
    id: '2',
    name: 'Michael Chen',
    role: 'Director of Programs',
    bio: 'Michael oversees all our charitable programs.',
    imageUrl: '👨‍💼',
  },
]

export default function TeamPage() {
  const [members, setMembers] = useState(dummyTeamMembers)
  const [isAddingNew, setIsAddingNew] = useState(false)
  const [editingId, setEditingId] = useState<string | null>(null)
  const { register, handleSubmit, reset, setValue } = useForm<TeamMemberForm>()

  const onSubmit = async (data: TeamMemberForm) => {
    if (editingId) {
      setMembers(members.map(m => m.id === editingId ? { ...m, ...data } : m))
      setEditingId(null)
    } else {
      const newMember = {
        id: Date.now().toString(),
        ...data,
      }
      setMembers([...members, newMember])
    }
    reset()
    setIsAddingNew(false)
  }

  const handleEdit = (member: typeof members[0]) => {
    setEditingId(member.id)
    setValue('name', member.name)
    setValue('role', member.role)
    setValue('bio', member.bio)
    setValue('imageUrl', member.imageUrl)
    setIsAddingNew(true)
  }

  const handleDelete = (id: string) => {
    setMembers(members.filter(m => m.id !== id))
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Team Members</h1>
          <p className="text-foreground/70">Manage your team members and their profiles</p>
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
          Add Member
        </Button>
      </div>

      {isAddingNew && (
        <div className="bg-white rounded-lg border border-border p-8">
          <h2 className="text-xl font-bold text-foreground mb-6">
            {editingId ? 'Edit Member' : 'Add Team Member'}
          </h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Name</label>
              <input
                {...register('name', { required: true })}
                placeholder="Full Name"
                className="w-full px-4 py-2 border border-border rounded-lg bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Role</label>
              <input
                {...register('role', { required: true })}
                placeholder="Job Title"
                className="w-full px-4 py-2 border border-border rounded-lg bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Bio</label>
              <textarea
                {...register('bio', { required: true })}
                placeholder="Short biography"
                rows={3}
                className="w-full px-4 py-2 border border-border rounded-lg bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Image URL</label>
              <input
                {...register('imageUrl', { required: true })}
                placeholder="https://example.com/image.jpg"
                className="w-full px-4 py-2 border border-border rounded-lg bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div className="flex gap-4">
              <Button type="submit" className="bg-primary hover:bg-primary/90 text-white gap-2">
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {members.map((member) => (
          <div key={member.id} className="bg-white rounded-lg border border-border overflow-hidden hover:border-primary transition">
            <div className="bg-primary/10 h-32 flex items-center justify-center">
              <span className="text-6xl">{member.imageUrl}</span>
            </div>
            <div className="p-6">
              <h3 className="text-lg font-bold text-foreground mb-1">{member.name}</h3>
              <p className="text-primary text-sm font-semibold mb-3">{member.role}</p>
              <p className="text-foreground/70 text-sm mb-4 line-clamp-2">{member.bio}</p>
              <div className="flex gap-2">
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => handleEdit(member)}
                  className="flex-1"
                >
                  <Edit className="w-4 h-4" />
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="text-red-600 hover:bg-red-50 flex-1 bg-transparent"
                  onClick={() => handleDelete(member.id)}
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {members.length === 0 && (
        <div className="text-center py-12">
          <p className="text-foreground/70 mb-4">No team members yet</p>
          <Button
            onClick={() => setIsAddingNew(true)}
            className="bg-primary hover:bg-primary/90 text-white"
          >
            Add First Member
          </Button>
        </div>
      )}
    </div>
  )
}
