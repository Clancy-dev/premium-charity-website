'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Check, X, Mail, Phone, MapPin, Key } from 'lucide-react'
import { useForm } from 'react-hook-form'

interface ContactInfoForm {
  email: string
  phone: string
  address: string
}

export default function SettingsPage() {
  const [isEditingContact, setIsEditingContact] = useState(false)
  const [isSaving, setIsSaving] = useState(false)
  const [successMessage, setSuccessMessage] = useState('')
  const { register, handleSubmit, reset, setValue } = useForm<ContactInfoForm>({
    defaultValues: {
      email: 'hello@beaconcharity.org',
      phone: '+1 (555) 0123',
      address: '456 Beacon Ave, Global City, GC 10001',
    },
  })

  const onSubmit = async (data: ContactInfoForm) => {
    setIsSaving(true)
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      setSuccessMessage('Contact information updated successfully!')
      setIsEditingContact(false)
      setTimeout(() => setSuccessMessage(''), 3000)
    } catch (error) {
      console.error('Error updating settings:', error)
    } finally {
      setIsSaving(false)
    }
  }

  return (
    <div className="space-y-8 max-w-2xl">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Settings</h1>
        <p className="text-foreground/70">Manage your organization's settings and information</p>
      </div>

      {successMessage && (
        <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg">
          {successMessage}
        </div>
      )}

      {/* Contact Information */}
      <div className="bg-white rounded-lg border border-border p-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-foreground">Contact Information</h2>
          <Button
            variant="outline"
            onClick={() => {
              setIsEditingContact(!isEditingContact)
              if (!isEditingContact) {
                setValue('email', 'hello@beaconcharity.org')
                setValue('phone', '+1 (555) 0123')
                setValue('address', '456 Beacon Ave, Global City, GC 10001')
              }
            }}
          >
            {isEditingContact ? 'Cancel' : 'Edit'}
          </Button>
        </div>

        {isEditingContact ? (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 w-5 h-5 text-foreground/50" />
                <input
                  {...register('email', { required: true })}
                  type="email"
                  className="w-full pl-10 px-4 py-2 border border-border rounded-lg bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Phone</label>
              <div className="relative">
                <Phone className="absolute left-3 top-3 w-5 h-5 text-foreground/50" />
                <input
                  {...register('phone', { required: true })}
                  className="w-full pl-10 px-4 py-2 border border-border rounded-lg bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Address</label>
              <div className="relative">
                <MapPin className="absolute left-3 top-3 w-5 h-5 text-foreground/50" />
                <textarea
                  {...register('address', { required: true })}
                  rows={3}
                  className="w-full pl-10 px-4 py-2 border border-border rounded-lg bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>
            <div className="flex gap-4 pt-4">
              <Button
                type="submit"
                disabled={isSaving}
                className="bg-primary hover:bg-primary/90 text-white gap-2"
              >
                <Check className="w-4 h-4" />
                {isSaving ? 'Saving...' : 'Save Changes'}
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={() => setIsEditingContact(false)}
              >
                <X className="w-4 h-4" />
                Cancel
              </Button>
            </div>
          </form>
        ) : (
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <Mail className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
              <div>
                <p className="text-sm text-foreground/70">Email</p>
                <p className="font-medium text-foreground">hello@beaconcharity.org</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
              <div>
                <p className="text-sm text-foreground/70">Phone</p>
                <p className="font-medium text-foreground">+1 (555) 0123</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
              <div>
                <p className="text-sm text-foreground/70">Address</p>
                <p className="font-medium text-foreground">456 Beacon Ave, Global City, GC 10001</p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Security Settings */}
      <div className="bg-white rounded-lg border border-border p-8">
        <h2 className="text-2xl font-bold text-foreground mb-6">Security</h2>
        <div className="space-y-4">
          <Button variant="outline" className="w-full justify-start gap-3 bg-transparent">
            <Key className="w-5 h-5" />
            Change Password
          </Button>
          <Button variant="outline" className="w-full justify-start gap-3 bg-transparent">
            <Key className="w-5 h-5" />
            Two-Factor Authentication
          </Button>
        </div>
      </div>

      {/* System Info */}
      <div className="bg-white rounded-lg border border-border p-8">
        <h2 className="text-2xl font-bold text-foreground mb-6">System Information</h2>
        <div className="space-y-4 text-sm">
          <div className="flex justify-between">
            <span className="text-foreground/70">Last Updated</span>
            <span className="font-medium text-foreground">{new Date().toLocaleDateString()}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-foreground/70">Account Status</span>
            <span className="font-medium text-green-600">Active</span>
          </div>
          <div className="flex justify-between">
            <span className="text-foreground/70">Subscription Plan</span>
            <span className="font-medium text-foreground">Professional</span>
          </div>
        </div>
      </div>
    </div>
  )
}
