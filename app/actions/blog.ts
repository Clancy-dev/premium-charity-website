'use server'

import { prisma } from '@/lib/prisma'

export async function getBlogPosts(published = true) {
  try {
    const posts = await prisma.blogPost.findMany({
      where: { published },
      orderBy: { publishedAt: 'desc' },
    })
    return { success: true, data: posts }
  } catch (error) {
    console.error('Error fetching blog posts:', error)
    return { success: false, error: 'Failed to fetch blog posts' }
  }
}

export async function getBlogPostBySlug(slug: string) {
  try {
    const post = await prisma.blogPost.findUnique({
      where: { slug },
    })
    return { success: true, data: post }
  } catch (error) {
    console.error('Error fetching blog post:', error)
    return { success: false, error: 'Failed to fetch blog post' }
  }
}

export async function createBlogPost(data: {
  title: string
  content: string
  excerpt: string
  slug: string
  imageUrl?: string
  category?: string
  readTime?: number
  userId: string
  published?: boolean
}) {
  try {
    const post = await prisma.blogPost.create({
      data: {
        ...data,
        publishedAt: data.published ? new Date() : null,
      },
    })
    return { success: true, data: post }
  } catch (error) {
    console.error('Error creating blog post:', error)
    return { success: false, error: 'Failed to create blog post' }
  }
}

export async function updateBlogPost(
  id: string,
  data: {
    title?: string
    content?: string
    excerpt?: string
    slug?: string
    imageUrl?: string
    category?: string
    readTime?: number
    published?: boolean
  }
) {
  try {
    const post = await prisma.blogPost.update({
      where: { id },
      data: {
        ...data,
        publishedAt: data.published ? new Date() : null,
      },
    })
    return { success: true, data: post }
  } catch (error) {
    console.error('Error updating blog post:', error)
    return { success: false, error: 'Failed to update blog post' }
  }
}

export async function deleteBlogPost(id: string) {
  try {
    await prisma.blogPost.delete({
      where: { id },
    })
    return { success: true }
  } catch (error) {
    console.error('Error deleting blog post:', error)
    return { success: false, error: 'Failed to delete blog post' }
  }
}
