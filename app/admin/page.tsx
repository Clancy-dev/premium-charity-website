'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ImageIcon, Users, Calendar, FileText, Battery as Gallery, Mail, CreditCard } from 'lucide-react'

const stats = [
  { title: 'Hero Images', value: '5', icon: ImageIcon, href: '/admin/carousel' },
  { title: 'Testimonials', value: '12', icon: Users, href: '/admin/testimonials' },
  { title: 'Events', value: '8', icon: Calendar, href: '/admin/events' },
  { title: 'Causes', value: '4', icon: FileText, href: '/admin/causes' },
  { title: 'Blog Posts', value: '15', icon: FileText, href: '/admin/blog' },
  { title: 'Gallery Images', value: '24', icon: Gallery, href: '/admin/gallery' },
  { title: 'Contact Settings', value: 'View', icon: Mail, href: '/admin/contact' },
  { title: 'Payment Methods', value: 'Manage', icon: CreditCard, href: '/admin/payments' },
]

export default function AdminDashboard() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-serif font-bold text-foreground mb-2">Dashboard</h1>
        <p className="text-foreground/70">Welcome back! Manage all website content from here.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => {
          const Icon = stat.icon
          return (
            <Link key={stat.href} href={stat.href}>
              <Card className="hover:border-primary transition cursor-pointer h-full">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-lg">{stat.title}</CardTitle>
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <CardDescription>Manage content</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-primary">{stat.value}</div>
                </CardContent>
              </Card>
            </Link>
          )
        })}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Button className="w-full bg-primary hover:bg-primary/90 text-white" asChild>
              <Link href="/admin/carousel">Add Hero Image</Link>
            </Button>
            <Button variant="outline" className="w-full bg-transparent" asChild>
              <Link href="/admin/events">Create Event</Link>
            </Button>
            <Button variant="outline" className="w-full bg-transparent" asChild>
              <Link href="/admin/blog">Write Post</Link>
            </Button>
            <Button variant="outline" className="w-full bg-transparent" asChild>
              <Link href="/admin/gallery">Add Photo</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
