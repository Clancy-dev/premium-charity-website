'use client'

import { Button } from '@/components/ui/button'
import { ImageIcon, Users, Calendar, FileText, Heart } from 'lucide-react'
import Link from 'next/link'

const stats = [
  { label: 'Carousel Images', value: '5', icon: ImageIcon, href: '/dashboard/carousel' },
  { label: 'Team Members', value: '6', icon: Users, href: '/dashboard/team' },
  { label: 'Upcoming Events', value: '3', icon: Calendar, href: '/dashboard/events' },
  { label: 'Blog Posts', value: '6', icon: FileText, href: '/dashboard/blog' },
]

const recentActivities = [
  { title: 'New volunteer signup', time: '2 hours ago', type: 'volunteer' },
  { title: 'Contact form submission', time: '5 hours ago', type: 'contact' },
  { title: 'New blog post published', time: '1 day ago', type: 'blog' },
  { title: 'Event created', time: '2 days ago', type: 'event' },
]

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Dashboard</h1>
        <p className="text-foreground/70">Welcome back! Here's an overview of your charity.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => {
          const Icon = stat.icon
          return (
            <Link key={stat.href} href={stat.href}>
              <div className="bg-white rounded-lg border border-border p-6 hover:border-primary transition cursor-pointer h-full">
                <div className="flex items-start justify-between mb-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <p className="text-foreground/70 text-sm font-medium mb-1">{stat.label}</p>
                <p className="text-3xl font-bold text-foreground">{stat.value}</p>
              </div>
            </Link>
          )
        })}
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-lg border border-border p-8">
        <h2 className="text-xl font-bold text-foreground mb-6">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Button asChild className="bg-primary hover:bg-primary/90 text-white h-12">
            <Link href="/dashboard/carousel">Add Carousel Image</Link>
          </Button>
          <Button asChild className="bg-secondary hover:bg-secondary/90 text-white h-12">
            <Link href="/dashboard/team">Add Team Member</Link>
          </Button>
          <Button asChild className="bg-primary hover:bg-primary/90 text-white h-12">
            <Link href="/dashboard/events">Create Event</Link>
          </Button>
          <Button asChild className="bg-secondary hover:bg-secondary/90 text-white h-12">
            <Link href="/dashboard/blog">Write Blog Post</Link>
          </Button>
        </div>
      </div>

      {/* Recent Activities */}
      <div className="bg-white rounded-lg border border-border p-8">
        <h2 className="text-xl font-bold text-foreground mb-6">Recent Activity</h2>
        <div className="space-y-4">
          {recentActivities.map((activity, i) => (
            <div key={i} className="flex items-center justify-between pb-4 border-b border-border last:border-0">
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <div>
                  <p className="text-foreground font-medium">{activity.title}</p>
                  <p className="text-foreground/60 text-sm">{activity.time}</p>
                </div>
              </div>
              <div className="text-xs px-3 py-1 rounded-full bg-muted text-foreground/70 capitalize">
                {activity.type}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Help Section */}
      <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg border border-primary/20 p-8">
        <div className="flex items-start gap-4">
          <Heart className="w-6 h-6 text-primary flex-shrink-0 mt-1" fill="currentColor" />
          <div>
            <h3 className="font-bold text-foreground mb-2">Need Help?</h3>
            <p className="text-foreground/70 mb-4">
              Check the documentation or contact support if you need any assistance managing your charity website.
            </p>
            <Button asChild variant="outline">
              <a href="/dashboard/settings">View Documentation</a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
