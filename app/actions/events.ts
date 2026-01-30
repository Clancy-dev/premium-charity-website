'use server'

import { prisma } from '@/lib/prisma'

export async function getEvents(category?: string) {
  try {
    const events = await prisma.event.findMany({
      where: {
        active: true,
        ...(category && { category }),
      },
      orderBy: { date: 'asc' },
    })
    return { success: true, data: events }
  } catch (error) {
    console.error('Error fetching events:', error)
    return { success: false, error: 'Failed to fetch events' }
  }
}

export async function createEvent(data: {
  title: string
  description: string
  date: Date
  time: string
  location: string
  imageUrl?: string
  category?: string
  userId: string
}) {
  try {
    const event = await prisma.event.create({
      data,
    })
    return { success: true, data: event }
  } catch (error) {
    console.error('Error creating event:', error)
    return { success: false, error: 'Failed to create event' }
  }
}

export async function updateEvent(
  id: string,
  data: {
    title?: string
    description?: string
    date?: Date
    time?: string
    location?: string
    imageUrl?: string
    category?: string
    attendees?: number
    active?: boolean
  }
) {
  try {
    const event = await prisma.event.update({
      where: { id },
      data,
    })
    return { success: true, data: event }
  } catch (error) {
    console.error('Error updating event:', error)
    return { success: false, error: 'Failed to update event' }
  }
}

export async function deleteEvent(id: string) {
  try {
    await prisma.event.delete({
      where: { id },
    })
    return { success: true }
  } catch (error) {
    console.error('Error deleting event:', error)
    return { success: false, error: 'Failed to delete event' }
  }
}
