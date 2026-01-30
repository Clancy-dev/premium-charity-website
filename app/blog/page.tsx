'use client'

import { useState } from 'react'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Calendar, User, ArrowRight, Search } from 'lucide-react'

const blogPosts = [
  {
    id: 1,
    title: 'Impact Stories: How Education Changes Lives',
    excerpt: 'Discover how our education programs have transformed the futures of thousands of students worldwide.',
    content: 'Our education initiative has reached over 10,000 students in rural areas, providing quality learning opportunities and scholarships.',
    author: 'Sarah Johnson',
    date: '2024-03-10',
    category: 'Education',
    featured: true,
    readTime: '5 min read',
    image: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
  },
  {
    id: 2,
    title: 'Clean Water Project: One Year of Success',
    excerpt: 'A milestone celebration as we complete the first year of providing clean water access.',
    content: 'Our clean water initiative has successfully installed 50 water systems across 15 villages, benefiting 25,000 people.',
    author: 'Michael Chen',
    date: '2024-03-08',
    category: 'Water',
    featured: true,
    readTime: '6 min read',
    image: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
  },
  {
    id: 3,
    title: 'Healthcare Heroes: Our Medical Teams in Action',
    excerpt: 'Meet the dedicated healthcare professionals making a difference in remote communities.',
    content: 'Our mobile healthcare clinics have provided medical services to over 50,000 individuals this year.',
    author: 'Dr. Amanda Lee',
    date: '2024-03-05',
    category: 'Health',
    featured: false,
    readTime: '7 min read',
    image: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  },
  {
    id: 4,
    title: 'Sustainability Report: Our Environmental Commitment',
    excerpt: 'Learn about our efforts to protect the environment and promote sustainable development.',
    content: 'We have planted 100,000 trees and engaged communities in conservation efforts.',
    author: 'Emma Wilson',
    date: '2024-03-01',
    category: 'Environment',
    featured: false,
    readTime: '8 min read',
    image: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
  },
  {
    id: 5,
    title: 'Volunteer Spotlights: Your Inspiring Stories',
    excerpt: 'Celebrating the volunteers who are the backbone of our charity work.',
    content: 'Meet volunteers from around the world sharing their transformative experiences.',
    author: 'James Martinez',
    date: '2024-02-28',
    category: 'Volunteer',
    featured: false,
    readTime: '4 min read',
    image: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
  },
]

const categories = ['All', 'Education', 'Water', 'Health', 'Environment', 'Volunteer']

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')

  const filtered = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const featured = filtered.filter(post => post.featured)
  const regular = filtered.filter(post => !post.featured)

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-primary text-white">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-balance">
              Stories of <span className="text-accent">Change</span>
            </h1>
            <p className="text-lg text-white/90">
              Read inspiring stories, impact updates, and insights from our work worldwide
            </p>
          </div>
        </section>

        {/* Search and Filter */}
        <section className="sticky top-16 z-10 py-6 px-4 sm:px-6 lg:px-8 bg-white border-b border-border">
          <div className="max-w-6xl mx-auto space-y-4">
            <div className="relative">
              <Search className="absolute left-4 top-3 w-5 h-5 text-foreground/40" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div className="flex gap-2 flex-wrap">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full transition-all font-medium ${
                    selectedCategory === category
                      ? 'bg-primary text-white'
                      : 'bg-muted text-foreground hover:bg-muted/80'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Posts */}
        {featured.length > 0 && (
          <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl font-bold text-foreground mb-8">Featured</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {featured.map((post) => (
                  <div
                    key={post.id}
                    className="bg-white rounded-lg overflow-hidden border border-border hover:border-primary hover:shadow-lg transition-all group"
                  >
                    <div
                      className="h-48 bg-cover bg-center group-hover:scale-105 transition-transform duration-300"
                      style={{ background: post.image }}
                    />
                    <div className="p-6 space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">
                          {post.category}
                        </span>
                        <span className="text-xs text-foreground/60">{post.readTime}</span>
                      </div>
                      <h3 className="text-xl font-bold text-foreground">{post.title}</h3>
                      <p className="text-foreground/70">{post.excerpt}</p>
                      <div className="flex items-center gap-4 text-sm text-foreground/60 pt-4 border-t border-border">
                        <div className="flex items-center gap-1">
                          <User className="w-4 h-4" />
                          {post.author}
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                        </div>
                      </div>
                      <Button className="w-full bg-primary hover:bg-primary/90 text-white gap-2" asChild>
                        <a href="#read">
                          Read More
                          <ArrowRight className="w-4 h-4" />
                        </a>
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Regular Posts */}
        {regular.length > 0 && (
          <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-muted/20">
            <div className="max-w-6xl mx-auto">
              {featured.length > 0 && <h2 className="text-2xl font-bold text-foreground mb-8">Latest Articles</h2>}
              <div className="space-y-6">
                {regular.map((post) => (
                  <div
                    key={post.id}
                    className="bg-white rounded-lg border border-border p-6 hover:border-primary hover:shadow-md transition-all"
                  >
                    <div className="flex gap-6">
                      <div
                        className="w-32 h-32 rounded-lg flex-shrink-0 bg-cover bg-center"
                        style={{ background: post.image }}
                      />
                      <div className="flex-1 space-y-3">
                        <div className="flex items-center gap-4">
                          <span className="text-xs font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">
                            {post.category}
                          </span>
                          <span className="text-xs text-foreground/60">{post.readTime}</span>
                        </div>
                        <h3 className="text-lg font-bold text-foreground">{post.title}</h3>
                        <p className="text-foreground/70 text-sm">{post.excerpt}</p>
                        <div className="flex items-center gap-4 text-sm text-foreground/60">
                          <div className="flex items-center gap-1">
                            <User className="w-4 h-4" />
                            {post.author}
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                          </div>
                        </div>
                      </div>
                      <Button variant="ghost" className="flex-shrink-0 gap-2" asChild>
                        <a href="#read">
                          <ArrowRight className="w-5 h-5" />
                        </a>
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {filtered.length === 0 && (
          <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-lg text-foreground/60">No articles found matching your search.</p>
            </div>
          </section>
        )}

        {/* Newsletter */}
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-primary text-white">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-serif font-bold">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-lg text-white/90">
              Stay updated with the latest stories and impact news
            </p>
            <div className="flex gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                Subscribe
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
