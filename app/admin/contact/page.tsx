'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { X } from 'lucide-react'

export default function ContactAdmin() {
  const [contactInfo, setContactInfo] = useState({
    email: 'hello@elevateimpact.org',
    phone: '+1 (555) 0123',
    address: '456 Impact Avenue, Global City, GC 10001',
    hours: 'Monday - Friday, 9:00 AM - 6:00 PM'
  })
  const [editing, setEditing] = useState(false)
  const [formData, setFormData] = useState(contactInfo)

  const handleSave = () => {
    setContactInfo(formData)
    setEditing(false)
  }

  return (
    <div className="space-y-6 max-w-2xl">
      <div>
        <h1 className="text-3xl font-serif font-bold">Contact Information</h1>
        <p className="text-foreground/70 mt-2">Manage contact details displayed on website</p>
      </div>

      {editing ? (
        <Card>
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle>Edit Contact Info</CardTitle>
              <button onClick={() => { setEditing(false); setFormData(contactInfo); }}><X className="w-5 h-5" /></button>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full px-4 py-2 border border-border rounded-lg" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Phone</label>
              <input type="tel" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="w-full px-4 py-2 border border-border rounded-lg" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Address</label>
              <input type="text" value={formData.address} onChange={(e) => setFormData({ ...formData, address: e.target.value })} className="w-full px-4 py-2 border border-border rounded-lg" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Office Hours</label>
              <input type="text" value={formData.hours} onChange={(e) => setFormData({ ...formData, hours: e.target.value })} className="w-full px-4 py-2 border border-border rounded-lg" />
            </div>
            <div className="flex gap-2 justify-end">
              <Button variant="outline" onClick={() => { setEditing(false); setFormData(contactInfo); }}>Cancel</Button>
              <Button className="bg-primary hover:bg-primary/90 text-white" onClick={handleSave}>Save</Button>
            </div>
          </CardContent>
        </Card>
      ) : (
        <Card>
          <CardHeader className="flex flex-row justify-between items-center">
            <CardTitle>Current Contact Information</CardTitle>
            <Button size="sm" className="bg-primary hover:bg-primary/90 text-white" onClick={() => setEditing(true)}>Edit</Button>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <p className="text-sm font-medium text-foreground/60">Email</p>
              <p className="text-lg font-semibold">{contactInfo.email}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-foreground/60">Phone</p>
              <p className="text-lg font-semibold">{contactInfo.phone}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-foreground/60">Address</p>
              <p className="text-lg font-semibold">{contactInfo.address}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-foreground/60">Office Hours</p>
              <p className="text-lg font-semibold">{contactInfo.hours}</p>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
