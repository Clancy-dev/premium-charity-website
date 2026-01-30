'use client'

import { useState, useEffect } from 'react'
import { Heart, ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const slides = [
  {
    image: '/carousel-1.jpg',
    title: 'Education & Mentorship',
    subtitle: 'Empowering young minds through quality education',
  },
  {
    image: '/carousel-2.jpg',
    title: 'Healthcare Access',
    subtitle: 'Bringing medical care to underserved communities',
  },
  {
    image: '/carousel-3.jpg',
    title: 'Environmental Action',
    subtitle: 'Building a sustainable future together',
  },
  {
    image: '/carousel-4.jpg',
    title: 'Emergency Relief',
    subtitle: 'Supporting families in their time of need',
  },
  {
    image: '/carousel-5.jpg',
    title: 'Community Development',
    subtitle: 'Creating lasting opportunities for all',
  },
]

export function CarouselHero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)

  useEffect(() => {
    if (!isAutoPlay) return

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [isAutoPlay])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
    setIsAutoPlay(false)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
    setIsAutoPlay(false)
  }

  return (
    <section className="relative w-full h-screen md:h-[700px] overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/50 to-black/60" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8">
        <div className="space-y-6 max-w-3xl">
          <div className="space-y-2">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white text-balance">
              {slides[currentSlide].title}
            </h1>
            <p className="text-lg md:text-xl text-white/90 text-pretty">
              {slides[currentSlide].subtitle}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white gap-2 h-12 px-8"
              asChild
            >
              <a href="/donate">
                <Heart className="w-5 h-5" fill="currentColor" />
                Donate Now
              </a>
            </Button>
            <Button
              size="lg"
              className="bg-white/10 hover:bg-white/20 text-white border border-white/30 h-12 px-8 backdrop-blur-sm"
              asChild
            >
              <a href="#featured-causes">Learn More</a>
            </Button>
          </div>
        </div>
      </div>



      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentSlide(index)
              setIsAutoPlay(false)
            }}
            className={`h-2 rounded-full transition-all ${
              index === currentSlide
                ? 'bg-white w-8'
                : 'bg-white/50 w-2 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
