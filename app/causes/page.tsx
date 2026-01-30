'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import { Heart, Filter, ArrowRight } from 'lucide-react'

const allCauses = [
  {
    id: 1,
    title: 'Clean Water Initiative',
    description: 'Providing access to clean drinking water in rural communities',
    category: 'Water',
    progress: 65,
    raised: '$125,000',
    goal: '$200,000',
    icon: '💧',
    image: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  },
  {
    id: 2,
    title: 'Education for All',
    description: 'Building schools and providing scholarships to underprivileged children',
    category: 'Education',
    progress: 82,
    raised: '$180,000',
    goal: '$220,000',
    icon: '📚',
    image: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
  },
  {
    id: 3,
    title: 'Healthcare Program',
    description: 'Mobile clinics bringing medical care to remote areas',
    category: 'Health',
    progress: 45,
    raised: '$95,000',
    goal: '$250,000',
    icon: '🏥',
    image: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
  },
  {
    id: 4,
    title: 'Skill Development',
    description: 'Vocational training for youth employment opportunities',
    category: 'Employment',
    progress: 71,
    raised: '$140,000',
    goal: '$200,000',
    icon: '🎓',
    image: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
  },
  {
    id: 5,
    title: 'Emergency Relief',
    description: 'Rapid response to natural disasters and humanitarian crises',
    category: 'Emergency',
    progress: 88,
    raised: '$220,000',
    goal: '$250,000',
    icon: '🆘',
    image: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
  },
  {
    id: 6,
    title: 'Environmental Conservation',
    description: 'Protecting ecosystems and promoting sustainable practices',
    category: 'Environment',
    progress: 52,
    raised: '$104,000',
    goal: '$200,000',
    icon: '🌍',
    image: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)',
  },
]

const categories = ['All', 'Water', 'Education', 'Health', 'Employment', 'Emergency', 'Environment']

export default function CausesPage() {
  const [selected, setSelected] = useState('All')

  const filtered = selected === 'All' 
    ? allCauses 
    : allCauses.filter(cause => cause.category === selected)

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-primary text-white">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-balance">
              Our <span className="text-accent">Causes</span>
            </h1>
            <p className="text-lg text-white/90">
              Explore the initiatives creating real change across the globe
            </p>
          </div>
        </section>

        {/* Filter Section */}
        <section className="sticky top-16 z-10 py-6 px-4 sm:px-6 lg:px-8 bg-white border-b border-border">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-4 flex-wrap">
              <Filter className="w-5 h-5 text-foreground/70" />
              <div className="flex gap-2 flex-wrap">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelected(category)}
                    className={`px-4 py-2 rounded-full transition-all font-medium ${
                      selected === category
                        ? 'bg-primary text-white'
                        : 'bg-muted text-foreground hover:bg-muted/80'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Causes Grid */}
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtered.map((cause) => (
                <div
                  key={cause.id}
                  className="group bg-white rounded-lg overflow-hidden border border-border hover:border-primary hover:shadow-lg transition-all duration-300"
                >
                  {/* Image Header */}
                  <div
                    className="h-40 bg-cover bg-center relative overflow-hidden group-hover:scale-105 transition-transform duration-300"
                    style={{ background: cause.image }}
                  >
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all" />
                    <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                      {cause.category}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="text-3xl mb-2">{cause.icon}</div>
                        <h3 className="text-xl font-bold text-foreground">{cause.title}</h3>
                      </div>
                    </div>

                    <p className="text-foreground/70 text-sm">{cause.description}</p>

                    {/* Progress Bar */}
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-foreground/70">{cause.raised}</span>
                        <span className="text-primary font-semibold">{cause.progress}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div
                          className="bg-primary rounded-full h-2 transition-all duration-500"
                          style={{ width: `${cause.progress}%` }}
                        />
                      </div>
                      <div className="text-xs text-foreground/60">Goal: {cause.goal}</div>
                    </div>

                    <Button className="w-full bg-primary hover:bg-primary/90 text-white gap-2 group/btn" asChild>
                      <a href="/donate">
                        <Heart className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                        Support This Cause
                      </a>
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            {filtered.length === 0 && (
              <div className="text-center py-12">
                <p className="text-foreground/60 text-lg">No causes found in this category</p>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
              Ready to Make a <span className="text-primary">Difference?</span>
            </h2>
            <p className="text-lg text-foreground/70">
              Choose a cause close to your heart and contribute to meaningful change
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white gap-2 h-12 px-8" asChild>
              <a href="/donate">
                Donate Now
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
