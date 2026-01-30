'use server'

import { prisma } from '@/lib/prisma'

export async function getCarouselImages() {
  try {
    const images = await prisma.carouselImage.findMany({
      where: { active: true },
      orderBy: { order: 'asc' },
    })
    return { success: true, data: images }
  } catch (error) {
    console.error('Error fetching carousel images:', error)
    return { success: false, error: 'Failed to fetch carousel images' }
  }
}

export async function createCarouselImage(data: {
  imageUrl: string
  title: string
  subtitle: string
  userId: string
}) {
  try {
    const image = await prisma.carouselImage.create({
      data,
    })
    return { success: true, data: image }
  } catch (error) {
    console.error('Error creating carousel image:', error)
    return { success: false, error: 'Failed to create carousel image' }
  }
}

export async function updateCarouselImage(
  id: string,
  data: {
    imageUrl?: string
    title?: string
    subtitle?: string
    order?: number
    active?: boolean
  }
) {
  try {
    const image = await prisma.carouselImage.update({
      where: { id },
      data,
    })
    return { success: true, data: image }
  } catch (error) {
    console.error('Error updating carousel image:', error)
    return { success: false, error: 'Failed to update carousel image' }
  }
}

export async function deleteCarouselImage(id: string) {
  try {
    await prisma.carouselImage.delete({
      where: { id },
    })
    return { success: true }
  } catch (error) {
    console.error('Error deleting carousel image:', error)
    return { success: false, error: 'Failed to delete carousel image' }
  }
}
