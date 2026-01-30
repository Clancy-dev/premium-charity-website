'use server'

import { prisma } from '@/lib/prisma'

export async function submitVolunteerSignup(data: {
  name: string
  email: string
  phone: string
  interests: string
  commitmentLevel: string
  skills: string
  message?: string
}) {
  try {
    const signup = await prisma.volunteerSignup.create({
      data,
    })
    return { success: true, data: signup }
  } catch (error) {
    console.error('Error submitting volunteer signup:', error)
    return { success: false, error: 'Failed to submit volunteer signup' }
  }
}

export async function getVolunteerSignups(status?: string) {
  try {
    const signups = await prisma.volunteerSignup.findMany({
      where: status ? { status } : {},
      orderBy: { createdAt: 'desc' },
    })
    return { success: true, data: signups }
  } catch (error) {
    console.error('Error fetching volunteer signups:', error)
    return { success: false, error: 'Failed to fetch volunteer signups' }
  }
}

export async function updateVolunteerSignupStatus(
  id: string,
  status: 'pending' | 'approved' | 'rejected'
) {
  try {
    const signup = await prisma.volunteerSignup.update({
      where: { id },
      data: { status },
    })
    return { success: true, data: signup }
  } catch (error) {
    console.error('Error updating volunteer signup:', error)
    return { success: false, error: 'Failed to update volunteer signup' }
  }
}

export async function deleteVolunteerSignup(id: string) {
  try {
    await prisma.volunteerSignup.delete({
      where: { id },
    })
    return { success: true }
  } catch (error) {
    console.error('Error deleting volunteer signup:', error)
    return { success: false, error: 'Failed to delete volunteer signup' }
  }
}
