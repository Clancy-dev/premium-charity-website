'use client'

import React from "react"
import { Users } from 'lucide-react'

import { useState } from 'react'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Heart, Clock, MapPin, Briefcase, Award, ArrowRight, CheckCircle } from 'lucide-react'

const opportunities = [
  {
    id: 1,
    title: 'Teaching & Education',
    description: 'Help students with tutoring, mentorship, and educational support programs.',
    commitment: '4-8 hours/week',
    location: 'In-Person & Remote',
    skills: 'Teaching, mentoring, patience',
    icon: '📚',
    available: 25,
  },
  {
    id: 2,
    title: 'Healthcare Support',
    description: 'Assist in health camps, patient care coordination, and health awareness.',
    commitment: '6-10 hours/week',
    location: 'In-Person',
    skills: 'Healthcare knowledge, compassion',
    icon: '🏥',
    available: 15,
  },
  {
    id: 3,
    title: 'Community Development',
    description: 'Support community projects, development initiatives, and social welfare.',
    commitment: '5-8 hours/week',
    location: 'In-Person',
    skills: 'Leadership, organization, communication',
    icon: '🤝',
    available: 20,
  },
  {
    id: 4,
    title: 'Environmental Conservation',
    description: 'Join our tree-planting drives and environmental protection initiatives.',
    commitment: '4-6 hours/week',
    location: 'In-Person',
    skills: 'Passion for environment, physical activity',
    icon: '🌍',
    available: 40,
  },
  {
    id: 5,
    title: 'Digital & Tech Support',
    description: 'Help with website maintenance, social media, and digital marketing.',
    commitment: '3-5 hours/week',
    location: 'Remote',
    skills: 'Tech skills, digital marketing',
    icon: '💻',
    available: 10,
  },
  {
    id: 6,
    title: 'Events & Fundraising',
    description: 'Support event planning, coordination, and fundraising campaigns.',
    commitment: '5-10 hours/week',
    location: 'In-Person & Remote',
    skills: 'Organization, communication, enthusiasm',
    icon: '🎉',
    available: 30,
  },
]

export default function VolunteerPage() {
  const [selectedOpportunity, setSelectedOpportunity] = useState<number | null>(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    experience: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Thank you for registering! We will contact you soon.')
    setFormData({ name: '', email: '', phone: '', experience: '' })
    setSelectedOpportunity(null)
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-primary text-white">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Heart className="w-16 h-16 mx-auto" fill="currentColor" />
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-balance">
              Become a <span className="text-accent">Volunteer</span>
            </h1>
            <p className="text-lg text-white/90">
              Join our community of passionate volunteers making real impact around the world
            </p>
          </div>
        </section>

        {/* Why Volunteer */}
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-serif font-bold text-foreground mb-12 text-center">Why Volunteer With Us?</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { icon: Heart, title: 'Make Impact', desc: 'Create real change in communities' },
                { icon: Award, title: 'Gain Skills', desc: 'Develop valuable professional skills' },
                { icon: Users, title: 'Join Community', desc: 'Connect with passionate people' },
                { icon: Clock, title: 'Flexible Time', desc: 'Choose your own schedule' },
              ].map((item, i) => {
                const Icon = item.icon
                return (
                  <div key={i} className="text-center space-y-3">
                    <Icon className="w-12 h-12 mx-auto text-primary" />
                    <h3 className="font-bold text-foreground">{item.title}</h3>
                    <p className="text-sm text-foreground/70">{item.desc}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Opportunities */}
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-serif font-bold text-foreground mb-12 text-center">Available Opportunities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {opportunities.map((opp) => (
                <div
                  key={opp.id}
                  className="bg-white rounded-lg border border-border p-6 hover:border-primary hover:shadow-lg transition-all"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="text-3xl mb-2">{opp.icon}</div>
                      <h3 className="text-xl font-bold text-foreground">{opp.title}</h3>
                    </div>
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-bold">
                      {opp.available} spots
                    </span>
                  </div>

                  <p className="text-foreground/70 mb-4">{opp.description}</p>

                  <div className="space-y-2 mb-6 pb-6 border-b border-border">
                    <div className="flex items-center gap-2 text-sm text-foreground/70">
                      <Clock className="w-4 h-4 text-primary flex-shrink-0" />
                      {opp.commitment}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-foreground/70">
                      <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                      {opp.location}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-foreground/70">
                      <Briefcase className="w-4 h-4 text-primary flex-shrink-0" />
                      {opp.skills}
                    </div>
                  </div>

                  <Button
                    onClick={() => setSelectedOpportunity(opp.id)}
                    className="w-full bg-primary hover:bg-primary/90 text-white gap-2"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Registration Modal */}
        {selectedOpportunity && (
          <section className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg max-w-md w-full p-8 space-y-6">
              <button
                onClick={() => setSelectedOpportunity(null)}
                className="absolute top-4 right-4 text-foreground/60 hover:text-foreground text-2xl"
              >
                ×
              </button>
              <div>
                <h3 className="text-2xl font-bold text-foreground">
                  {opportunities.find(o => o.id === selectedOpportunity)?.title}
                </h3>
                <p className="text-sm text-foreground/70 mt-2">
                  Register your interest to volunteer with us
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Full Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Phone</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Relevant Experience</label>
                  <textarea
                    value={formData.experience}
                    onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                    rows={3}
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white gap-2">
                  <CheckCircle className="w-4 h-4" />
                  Register as Volunteer
                </Button>
              </form>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-primary text-white">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-serif font-bold">
              Ready to Make a Difference?
            </h2>
            <p className="text-lg text-white/90">
              Choose an opportunity above and register to get started
            </p>
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 gap-2" asChild>
              <a href="/contact">
                Questions? Contact Us
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
