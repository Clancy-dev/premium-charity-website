'use client'

import { useState } from 'react'
import Image from 'next/image'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import { X } from 'lucide-react'

const galleryItems = [
  {
    id: 1,
    title: 'Education Program',
    description: 'Children learning in our education initiative',
    image: '/gallery-1.jpg',
    category: 'Education',
  },
  {
    id: 2,
    title: 'Community Development',
    description: 'Community members working together',
    image: '/gallery-2.jpg',
    category: 'Community',
  },
  {
    id: 3,
    title: 'Healthcare Services',
    description: 'Medical professionals providing care',
    image: '/gallery-3.jpg',
    category: 'Health',
  },
  {
    id: 4,
    title: 'Skill Development',
    description: 'Vocational training program',
    image: '/gallery-4.jpg',
    category: 'Training',
  },
  {
    id: 5,
    title: 'Environmental Conservation',
    description: 'Tree planting initiative',
    image: '/gallery-5.jpg',
    category: 'Environment',
  },
  {
    id: 6,
    title: 'Success Celebration',
    description: 'Community celebration event',
    image: '/gallery-6.jpg',
    category: 'Events',
  },
]

const categories = ['All', 'Education', 'Community', 'Health', 'Training', 'Environment', 'Events']

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedImage, setSelectedImage] = useState<typeof galleryItems[0] | null>(null)

  const filtered = selectedCategory === 'All'
    ? galleryItems
    : galleryItems.filter(item => item.category === selectedCategory)

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-primary text-white">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-balance">
              Our <span className="text-white font-bold">Gallery</span>
            </h1>
            <p className="text-lg text-white/90">
              Visual stories of impact, change, and transformation across our programs worldwide
            </p>
          </div>
        </section>

        {/* Filter Section */}
        <section className="sticky top-16 z-10 py-6 px-4 sm:px-6 lg:px-8 bg-white border-b border-border">
          <div className="max-w-6xl mx-auto">
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

        {/* Gallery Grid */}
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setSelectedImage(item)}
                  className="group relative overflow-hidden rounded-lg border border-border hover:border-primary transition-all"
                >
                  <div className="relative h-64 bg-muted">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all flex items-end">
                    <div className="w-full p-4 bg-gradient-to-t from-black/80 to-transparent text-white opacity-0 group-hover:opacity-100 transition-opacity">
                      <h3 className="font-bold text-lg">{item.title}</h3>
                      <p className="text-sm text-white/80">{item.description}</p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
            <div className="max-w-4xl w-full relative">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white hover:text-white/70 transition-colors"
              >
                <X className="w-8 h-8" />
              </button>
              <img
                src={selectedImage.image || "/placeholder.svg"}
                alt={selectedImage.title}
                className="w-full h-auto rounded-lg"
              />
              <div className="mt-6 text-white space-y-2">
                <h2 className="text-2xl font-bold">{selectedImage.title}</h2>
                <p className="text-white/80">{selectedImage.description}</p>
                <span className="inline-block bg-primary px-4 py-2 rounded-full text-sm font-medium mt-4">
                  {selectedImage.category}
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Stats Section */}
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-muted/20">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { number: '10K+', label: 'Photos' },
                { number: '75', label: 'Countries' },
                { number: '500K+', label: 'Lives Documented' },
                { number: '14', label: 'Years Active' },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                  <p className="text-foreground/70">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Gallery Section */}
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-serif font-bold text-foreground">Documenting Our Impact</h2>
            <p className="text-lg text-foreground/70">
              These images represent real moments of transformation, connection, and hope. Each photo tells a story of communities empowered, lives changed, and futures brightened through our collective commitment to creating meaningful change.
            </p>
            <p className="text-foreground/60">
              Our gallery showcases the faces and places behind Elevate Impact's work, celebrating the resilience and potential of every person we serve.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
