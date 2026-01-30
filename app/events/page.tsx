'use client'

import { useState } from 'react'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Calendar, MapPin, Users, ArrowRight, Clock } from 'lucide-react'

const upcomingEvents = [
  {
    id: 1,
    title: 'Annual Charity Fundraiser Gala',
    description: 'Join us for an elegant evening celebrating our impact and raising funds for education programs in rural communities.',
    date: 'March 15, 2025',
    time: '6:00 PM - 10:00 PM',
    location: 'Grand Ballroom, Central City',
    attendees: 250,
    image: '🎭',
    category: 'Fundraiser',
  },
  {
    id: 2,
    title: 'Community Health Awareness Camp',
    description: 'Free health checkups, medical consultations, and wellness education for underserved communities.',
    date: 'March 22, 2025',
    time: '9:00 AM - 4:00 PM',
    location: 'Township Community Center',
    attendees: 500,
    image: '🏥',
    category: 'Healthcare',
  },
  {
    id: 3,
    title: 'Education Workshop: Skills for Success',
    description: 'Interactive workshop on job readiness, resume building, and interview skills for young adults.',
    date: 'April 5, 2025',
    time: '10:00 AM - 2:00 PM',
    location: 'Online & In-Person',
    attendees: 150,
    image: '📚',
    category: 'Education',
  },
  {
    id: 4,
    title: 'Volunteer Appreciation Day',
    description: 'Celebrate our dedicated volunteers with a day of activities, recognition, and community bonding.',
    date: 'April 12, 2025',
    time: '11:00 AM - 5:00 PM',
    location: 'Beacon Charity Headquarters',
    attendees: 300,
    image: '🤝',
    category: 'Volunteer',
  },
  {
    id: 5,
    title: 'Environmental Conservation Drive',
    description: 'Join us in planting 5,000 trees and cleaning up local waterways to promote environmental sustainability.',
    date: 'April 20, 2025',
    time: '7:00 AM - 3:00 PM',
    location: 'Green Valley Park',
    attendees: 400,
    image: '🌱',
    category: 'Environment',
  },
  {
    id: 6,
    title: 'Clean Water Initiative Launch',
    description: 'Launch event for our new clean water project, featuring live demonstrations and community testimonials.',
    date: 'May 1, 2025',
    time: '2:00 PM - 6:00 PM',
    location: 'Water Research Institute',
    attendees: 200,
    image: '💧',
    category: 'Water',
  },
]

const pastEvents = [
  {
    title: 'Winter Relief Program 2024',
    description: 'Distributed warm clothing and food to 2,000+ families during winter season.',
    date: 'December 2024',
    impact: '2,000+ families helped',
  },
  {
    title: 'Educational Scholarship Ceremony',
    description: 'Awarded scholarships to 100 deserving students for higher education.',
    date: 'November 2024',
    impact: '100 students scholarshipped',
  },
  {
    title: 'Health Vaccination Drive',
    description: 'Provided free vaccinations to 5,000+ children in rural areas.',
    date: 'October 2024',
    impact: '5,000+ children vaccinated',
  },
]

export default function Events() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  
  const categories = ['All', 'Fundraiser', 'Healthcare', 'Education', 'Volunteer', 'Environment', 'Water']
  
  const filtered = selectedCategory === 'All' 
    ? upcomingEvents 
    : upcomingEvents.filter(event => event.category === selectedCategory)

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-primary text-white">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Calendar className="w-16 h-16 mx-auto opacity-80" />
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-balance">
              Upcoming <span className="text-accent">Events</span>
            </h1>
            <p className="text-lg text-white/90">
              Join us in creating real change. Register for events happening near you.
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

        {/* Upcoming Events Section */}
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 gap-8">
              {filtered.map((event) => (
                <div
                  key={event.id}
                  className="bg-white rounded-lg border border-border overflow-hidden hover:border-primary transition-colors"
                >
                  <div className="flex flex-col md:flex-row">
                    {/* Image */}
                    <div className="md:w-48 bg-primary/10 flex items-center justify-center p-8 md:p-12">
                      <span className="text-6xl">{event.image}</span>
                    </div>

                    {/* Content */}
                    <div className="flex-1 p-6 md:p-8 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <span className="text-xs font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">
                            {event.category}
                          </span>
                        </div>
                        <h3 className="text-2xl font-bold text-foreground mb-2">{event.title}</h3>
                        <p className="text-foreground/70 mb-6">{event.description}</p>

                        {/* Event Details */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                          <div className="flex items-center gap-3 text-foreground/70">
                            <Calendar className="w-5 h-5 text-primary flex-shrink-0" />
                            <div>
                              <p className="text-sm font-semibold">{event.date}</p>
                              <p className="text-xs">{event.time}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-3 text-foreground/70">
                            <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
                            <p className="text-sm font-semibold">{event.location}</p>
                          </div>
                          <div className="flex items-center gap-3 text-foreground/70">
                            <Users className="w-5 h-5 text-primary flex-shrink-0" />
                            <p className="text-sm font-semibold">{event.attendees}+ Expected</p>
                          </div>
                        </div>
                      </div>

                      <Button className="w-full md:w-auto bg-primary hover:bg-primary/90 text-white gap-2">
                        Register Now
                        <ArrowRight className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Past Events Section */}
        <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-muted/30">
          <div className="max-w-6xl mx-auto">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-foreground text-balance">
                Recent <span className="text-primary">Impact</span>
              </h2>
              <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
                See the difference our recent events have made in communities.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pastEvents.map((event, index) => (
                <div key={index} className="bg-white rounded-lg border border-border p-8">
                  <h3 className="text-xl font-bold text-foreground mb-2">{event.title}</h3>
                  <p className="text-sm text-primary font-semibold mb-3">{event.date}</p>
                  <p className="text-foreground/70 mb-4">{event.description}</p>
                  <div className="pt-4 border-t border-border">
                    <p className="text-sm font-bold text-primary">{event.impact}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-primary text-white">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-5xl font-bold text-balance">
              Stay Updated
            </h2>
            <p className="text-lg text-white/90">
              Subscribe to our newsletter to receive updates about upcoming events and opportunities to make a difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
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
