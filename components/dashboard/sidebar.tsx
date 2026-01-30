'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  Heart,
  Menu,
  X,
  ImageIcon,
  Users,
  Calendar,
  FileText,
  Mail,
  Zap,
  Settings,
  LogOut,
} from 'lucide-react'
import { useState } from 'react'

const navItems = [
  {
    label: 'Dashboard',
    href: '/dashboard',
    icon: Zap,
  },
  {
    label: 'Carousel Images',
    href: '/dashboard/carousel',
    icon: ImageIcon,
  },
  {
    label: 'Team Members',
    href: '/dashboard/team',
    icon: Users,
  },
  {
    label: 'Events',
    href: '/dashboard/events',
    icon: Calendar,
  },
  {
    label: 'Blog Posts',
    href: '/dashboard/blog',
    icon: FileText,
  },
  {
    label: 'Contact Messages',
    href: '/dashboard/messages',
    icon: Mail,
  },
  {
    label: 'Settings',
    href: '/dashboard/settings',
    icon: Settings,
  },
]

export function DashboardSidebar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const isActive = (href: string) => pathname === href

  const handleLogout = async () => {
    await fetch('/api/auth/sign-out', { method: 'POST' })
    window.location.href = '/'
  }

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden fixed top-4 left-4 z-40 p-2 bg-primary text-white rounded-lg"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed md:relative w-64 h-screen bg-white border-r border-border flex flex-col transition-transform duration-300 z-30 ${
          isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        }`}
      >
        {/* Logo */}
        <div className="p-6 border-b border-border">
          <Link href="/dashboard" className="flex items-center gap-2">
            <Heart className="w-6 h-6 text-primary" fill="currentColor" />
            <span className="font-bold text-lg text-foreground">Beacon Admin</span>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto py-6 px-4 space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition ${
                  isActive(item.href)
                    ? 'bg-primary/10 text-primary font-semibold border-l-4 border-primary'
                    : 'text-foreground/70 hover:bg-muted hover:text-foreground'
                }`}
              >
                <Icon className="w-5 h-5" />
                {item.label}
              </Link>
            )
          })}
        </nav>

        {/* Logout */}
        <div className="p-4 border-t border-border">
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-3 text-red-600 hover:bg-red-50 rounded-lg transition"
          >
            <LogOut className="w-5 h-5" />
            Logout
          </button>
        </div>
      </aside>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/50 md:hidden z-20"
        />
      )}
    </>
  )
}
