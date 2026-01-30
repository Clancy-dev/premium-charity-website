'use server'

import { prisma } from '@/lib/prisma'

export async function getContactInfo(userId: string) {
  try {
    const info = await prisma.contactInfo.findUnique({
      where: { userId },
    })
    return { success: true, data: info }
  } catch (error) {
    console.error('Error fetching contact info:', error)
    return { success: false, error: 'Failed to fetch contact info' }
  }
}

export async function updateContactInfo(
  userId: string,
  data: {
    email: string
    phone: string
    address: string
  }
) {
  try {
    const info = await prisma.contactInfo.upsert({
      where: { userId },
      update: data,
      create: { userId, ...data },
    })
    return { success: true, data: info }
  } catch (error) {
    console.error('Error updating contact info:', error)
    return { success: false, error: 'Failed to update contact info' }
  }
}

export async function submitContactForm(data: {
  name: string
  email: string
  subject: string
  message: string
}) {
  try {
    const submission = await prisma.contactSubmission.create({
      data,
    })
    return { success: true, data: submission }
  } catch (error) {
    console.error('Error submitting contact form:', error)
    return { success: false, error: 'Failed to submit contact form' }
  }
}

export async function getContactSubmissions() {
  try {
    const submissions = await prisma.contactSubmission.findMany({
      orderBy: { createdAt: 'desc' },
    })
    return { success: true, data: submissions }
  } catch (error) {
    console.error('Error fetching contact submissions:', error)
    return { success: false, error: 'Failed to fetch contact submissions' }
  }
}

export async function updateContactSubmissionStatus(
  id: string,
  status: 'new' | 'read' | 'responded'
) {
  try {
    const submission = await prisma.contactSubmission.update({
      where: { id },
      data: { status },
    })
    return { success: true, data: submission }
  } catch (error) {
    console.error('Error updating contact submission:', error)
    return { success: false, error: 'Failed to update contact submission' }
  }
}
