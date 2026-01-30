'use server'

import { prisma } from '@/lib/prisma'

export async function getTeamMembers() {
  try {
    const members = await prisma.teamMember.findMany({
      where: { active: true },
      orderBy: { order: 'asc' },
    })
    return { success: true, data: members }
  } catch (error) {
    console.error('Error fetching team members:', error)
    return { success: false, error: 'Failed to fetch team members' }
  }
}

export async function createTeamMember(data: {
  name: string
  role: string
  bio: string
  imageUrl?: string
  userId: string
}) {
  try {
    const member = await prisma.teamMember.create({
      data,
    })
    return { success: true, data: member }
  } catch (error) {
    console.error('Error creating team member:', error)
    return { success: false, error: 'Failed to create team member' }
  }
}

export async function updateTeamMember(
  id: string,
  data: {
    name?: string
    role?: string
    bio?: string
    imageUrl?: string
    order?: number
    active?: boolean
  }
) {
  try {
    const member = await prisma.teamMember.update({
      where: { id },
      data,
    })
    return { success: true, data: member }
  } catch (error) {
    console.error('Error updating team member:', error)
    return { success: false, error: 'Failed to update team member' }
  }
}

export async function deleteTeamMember(id: string) {
  try {
    await prisma.teamMember.delete({
      where: { id },
    })
    return { success: true }
  } catch (error) {
    console.error('Error deleting team member:', error)
    return { success: false, error: 'Failed to delete team member' }
  }
}
