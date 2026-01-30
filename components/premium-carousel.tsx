'use client'

import { useState, useEffect } from 'react'
import { Heart } from 'lucide-react'
import { Button } from '@/components/ui/button'

const slides = [
  {
    image: '/premium-hero-1.jpg',
    title: 'Global Impact Starts Here',
    subtitle: 'Join thousands creating meaningful change worldwide'
  },
  {
    image: '/premium-hero-2.jpg',
    title: 'Transform Communities',
    subtitle: 'Your support enables lasting, sustainable transformation'
  },
  {
    image: '/premium-hero-3.jpg',
    title: 'Empower the Next Generation',
    subtitle: 'Education and opportunity for young leaders everywhere'
  },
  {
    image: '/premium-hero-4.jpg',
    title: 'Healthcare for All',
    subtitle: 'Ensuring dignity and wellness across the globe'
  },
  {
    image: '/premium-hero-5.jpg',
    title: 'Sustainable Future',
    subtitle: 'Building environmental solutions that last'
  },
]

export function PremiumCarousel() {
  const [current, setCurrent] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  useEffect(() => {
    if (!autoplay) return
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [autoplay])

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length)
    setAutoplay(false)
  }

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length)
    setAutoplay(false)
  }

  const goToSlide = (index: number) => {
    setCurrent(index)
    setAutoplay(false)
  }

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Slides */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === current ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${slide.image})`,
                backgroundAttachment: 'fixed'
              }}
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60" />

            {/* Content */}
            <div className="relative h-full flex items-center justify-center">
              <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 animate-fade-in">
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white font-bold text-balance leading-tight">
                  {slide.title}
                </h1>
                <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto text-pretty leading-relaxed">
                  {slide.subtitle}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-white gap-2 h-12 px-8 text-base rounded-full"
                    asChild
                  >
                    <a href="/donate">
                      <Heart className="w-5 h-5" fill="currentColor" />
                      Make Your Impact
                    </a>
                  </Button>
                  <Button
                    size="lg"
                    className="bg-white/20 hover:bg-white/30 text-white border border-white/30 h-12 px-8 text-base backdrop-blur-sm rounded-full"
                    asChild
                  >
                    <a href="#causes">Explore Our Causes</a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              index === current
                ? 'bg-white w-8 h-3'
                : 'bg-white/40 hover:bg-white/60 w-3 h-3'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Autoplay Toggle */}
      <button
        onClick={() => setAutoplay(!autoplay)}
        className="absolute top-8 right-8 z-20 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-full text-sm backdrop-blur-sm transition-all"
      >
        {autoplay ? 'Pause' : 'Play'}
      </button>
    </section>
  )
}
