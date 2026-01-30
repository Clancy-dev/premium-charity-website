import React from "react"
import { DashboardSidebar } from '@/components/dashboard/sidebar'

export const metadata = {
  title: 'Dashboard - Beacon Charity',
  description: 'Manage your Beacon Charity organization',
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex h-screen bg-background">
      <DashboardSidebar />
      <main className="flex-1 overflow-auto pt-16 md:pt-0">
        <div className="p-6 md:p-8">{children}</div>
      </main>
    </div>
  )
}
