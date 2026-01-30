'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Trash2, ExternalLink, CheckCircle } from 'lucide-react'

interface Message {
  id: string
  name: string
  email: string
  subject: string
  message: string
  status: 'new' | 'read' | 'responded'
  date: string
}

const dummyMessages: Message[] = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john@example.com',
    subject: 'Volunteer Inquiry',
    message: 'I am interested in volunteering with your organization. Could you tell me more about the opportunities available?',
    status: 'new',
    date: '2024-01-15',
  },
  {
    id: '2',
    name: 'Jane Smith',
    email: 'jane@example.com',
    subject: 'Partnership Request',
    message: 'We would like to explore a partnership opportunity with Beacon Charity.',
    status: 'read',
    date: '2024-01-14',
  },
]

export default function MessagesPage() {
  const [messages, setMessages] = useState(dummyMessages)
  const [selectedMessage, setSelectedMessage] = useState<Message | null>(null)

  const markAsRead = (id: string) => {
    setMessages(messages.map(m => m.id === id ? { ...m, status: 'read' as const } : m))
  }

  const markAsResponded = (id: string) => {
    setMessages(messages.map(m => m.id === id ? { ...m, status: 'responded' as const } : m))
  }

  const deleteMessage = (id: string) => {
    setMessages(messages.filter(m => m.id !== id))
    if (selectedMessage?.id === id) setSelectedMessage(null)
  }

  const statusColor = (status: string) => {
    switch (status) {
      case 'new':
        return 'bg-blue-50 text-blue-700'
      case 'read':
        return 'bg-yellow-50 text-yellow-700'
      case 'responded':
        return 'bg-green-50 text-green-700'
      default:
        return 'bg-gray-50 text-gray-700'
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Contact Messages</h1>
        <p className="text-foreground/70">View and respond to contact form submissions</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Messages List */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg border border-border divide-y divide-border">
            {messages.length === 0 ? (
              <div className="p-8 text-center">
                <p className="text-foreground/70">No messages yet</p>
              </div>
            ) : (
              messages.map((message) => (
                <div
                  key={message.id}
                  onClick={() => {
                    setSelectedMessage(message)
                    markAsRead(message.id)
                  }}
                  className={`p-4 cursor-pointer hover:bg-muted/50 transition ${
                    selectedMessage?.id === message.id ? 'bg-primary/5 border-l-4 border-primary' : ''
                  }`}
                >
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <p className="font-semibold text-foreground">{message.name}</p>
                      <p className="text-sm text-foreground/60">{message.email}</p>
                    </div>
                    <span className={`inline-block px-2 py-1 text-xs rounded-full font-medium ${statusColor(message.status)}`}>
                      {message.status}
                    </span>
                  </div>
                  <p className="font-medium text-foreground mb-1">{message.subject}</p>
                  <p className="text-sm text-foreground/70 line-clamp-2">{message.message}</p>
                  <p className="text-xs text-foreground/50 mt-2">{message.date}</p>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Message Detail */}
        {selectedMessage && (
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg border border-border p-6 sticky top-20">
              <div className="space-y-4">
                <div>
                  <p className="text-xs text-foreground/70 uppercase font-semibold mb-1">From</p>
                  <p className="font-semibold text-foreground">{selectedMessage.name}</p>
                  <a
                    href={`mailto:${selectedMessage.email}`}
                    className="text-sm text-primary hover:opacity-70"
                  >
                    {selectedMessage.email}
                  </a>
                </div>

                <div>
                  <p className="text-xs text-foreground/70 uppercase font-semibold mb-1">Subject</p>
                  <p className="font-semibold text-foreground">{selectedMessage.subject}</p>
                </div>

                <div>
                  <p className="text-xs text-foreground/70 uppercase font-semibold mb-1">Message</p>
                  <p className="text-foreground/80 text-sm leading-relaxed">{selectedMessage.message}</p>
                </div>

                <div>
                  <p className="text-xs text-foreground/70 uppercase font-semibold mb-1">Status</p>
                  <span className={`inline-block px-3 py-1 text-sm rounded-full font-medium ${statusColor(selectedMessage.status)}`}>
                    {selectedMessage.status}
                  </span>
                </div>

                <div className="space-y-2 pt-4 border-t border-border">
                  <Button
                    asChild
                    className="w-full bg-primary hover:bg-primary/90 text-white gap-2"
                  >
                    <a href={`mailto:${selectedMessage.email}`}>
                      <ExternalLink className="w-4 h-4" />
                      Reply via Email
                    </a>
                  </Button>
                  <Button
                    onClick={() => markAsResponded(selectedMessage.id)}
                    variant="outline"
                    className="w-full gap-2"
                  >
                    <CheckCircle className="w-4 h-4" />
                    Mark Responded
                  </Button>
                  <Button
                    onClick={() => deleteMessage(selectedMessage.id)}
                    variant="outline"
                    className="w-full text-red-600 hover:bg-red-50 gap-2"
                  >
                    <Trash2 className="w-4 h-4" />
                    Delete
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
