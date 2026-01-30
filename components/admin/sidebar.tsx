'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, LayoutDashboard, ImageIcon, Users, Calendar, FileText, Battery as Gallery, Mail, CreditCard, LogOut } from 'lucide-react'
import { useState } from 'react'
import { Button } from '@/components/ui/button'

export function AdminSidebar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (path: string) => pathname.startsWith(path)

  const menuItems = [
    { href: '/admin', label: 'Dashboard', icon: LayoutDashboard },
    { href: '/admin/carousel', label: 'Hero Images', icon: ImageIcon },
    { href: '/admin/testimonials', label: 'Testimonials', icon: Users },
    { href: '/admin/events', label: 'Events', icon: Calendar },
    { href: '/admin/causes', label: 'Causes', icon: FileText },
    { href: '/admin/blog', label: 'Blog Posts', icon: FileText },
    { href: '/admin/gallery', label: 'Gallery', icon: Gallery },
    { href: '/admin/contact', label: 'Contact Info', icon: Mail },
    { href: '/admin/payments', label: 'Payment Methods', icon: CreditCard },
  ]

  return (
    <>
      {/* Mobile toggle */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-40 md:hidden bg-primary text-white p-2 rounded-lg"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 h-screen w-64 bg-white border-r border-border transition-transform duration-300 z-30 ${
          isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        }`}
      >
        <div className="p-6 border-b border-border">
          <h1 className="text-xl font-serif font-bold text-primary">Elevate Admin</h1>
        </div>

        <nav className="p-4 space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition ${
                  isActive(item.href)
                    ? 'bg-primary text-white'
                    : 'text-foreground hover:bg-muted'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
              </Link>
            )
          })}
        </nav>

        <div className="absolute bottom-6 left-4 right-4">
          <Button className="w-full gap-2 bg-red-600 hover:bg-red-700 text-white" asChild>
            <Link href="/api/auth/logout">
              <LogOut className="w-4 h-4" />
              Logout
            </Link>
          </Button>
        </div>
      </aside>

      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-20 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  )
}
