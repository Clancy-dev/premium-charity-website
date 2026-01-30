'use client'

import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Target, Globe, Heart, Award, TrendingUp, Eye } from 'lucide-react'

const teamMembers = [
  {
    name: 'Dr. Sarah Johnson',
    role: 'Executive Director',
    bio: 'With 20 years of experience in global development, Sarah leads our mission to create lasting change.',
    avatar: '👩‍💼',
  },
  {
    name: 'Michael Chen',
    role: 'Director of Programs',
    bio: 'Michael oversees all our charitable programs, ensuring maximum impact in every community.',
    avatar: '👨‍💼',
  },
  {
    name: 'Amara Okonkwo',
    role: 'Finance Director',
    bio: 'Amara ensures every donation is tracked and used transparently for maximum community benefit.',
    avatar: '👩‍💼',
  },
  {
    name: 'David Rodriguez',
    role: 'Community Outreach Manager',
    bio: 'David connects us with local communities and builds partnerships that create sustainable change.',
    avatar: '👨‍💼',
  },
  {
    name: 'Lisa Wang',
    role: 'Healthcare Program Lead',
    bio: 'Lisa brings her medical expertise to design and implement healthcare initiatives across regions.',
    avatar: '👩‍⚕️',
  },
  {
    name: 'James Kamau',
    role: 'Education Coordinator',
    bio: 'James is passionate about empowering youth through quality education and skill development.',
    avatar: '👨‍🏫',
  },
]

const coreValues = [
  {
    title: 'Transparency',
    description: 'We believe in complete openness about how we operate and where every dollar goes.',
    icon: '🔍',
  },
  {
    title: 'Community First',
    description: 'We listen to and empower the communities we serve, ensuring they shape our solutions.',
    icon: '🤝',
  },
  {
    title: 'Impact Driven',
    description: 'We measure everything we do. Real change means real, measurable results.',
    icon: '📈',
  },
  {
    title: 'Sustainability',
    description: 'We build long-term solutions that empower communities to thrive independently.',
    icon: '🌱',
  },
]

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-primary text-white">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-balance">
              Our <span className="text-accent">Story</span>
            </h1>
            <p className="text-lg text-white/90">
              Building a world where every community has the resources and support to thrive
            </p>
          </div>
        </section>

        {/* Mission, Vision, Values */}
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg border border-border p-8 space-y-4">
                <Target className="w-12 h-12 text-primary" />
                <h3 className="text-2xl font-bold text-foreground">Our Mission</h3>
                <p className="text-foreground/70">
                  To create sustainable, measurable impact by empowering communities, supporting education, and advancing healthcare globally.
                </p>
              </div>
              <div className="bg-white rounded-lg border border-border p-8 space-y-4">
                <Globe className="w-12 h-12 text-primary" />
                <h3 className="text-2xl font-bold text-foreground">Our Vision</h3>
                <p className="text-foreground/70">
                  A world where every individual has equal access to education, healthcare, and economic opportunity regardless of geography.
                </p>
              </div>
              <div className="bg-white rounded-lg border border-border p-8 space-y-4">
                <Heart className="w-12 h-12 text-primary" />
                <h3 className="text-2xl font-bold text-foreground">Our Values</h3>
                <p className="text-foreground/70">
                  Integrity, transparency, accountability, compassion, and unwavering commitment to sustainable development.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values Section */}
        <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-muted/30">
          <div className="max-w-6xl mx-auto">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-foreground text-balance">
                What We <span className="text-primary">Stand For</span>
              </h2>
              <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
                Our core values guide every decision we make and every action we take.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {coreValues.map((value, index) => (
                <div key={index} className="bg-white rounded-lg border border-border p-8">
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{value.title}</h3>
                  <p className="text-foreground/70">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-foreground text-balance">
                Meet Our <span className="text-primary">Team</span>
              </h2>
              <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
                Dedicated professionals united by a passion for creating positive change.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="bg-white rounded-lg border border-border overflow-hidden hover:border-primary transition-colors">
                  <div className="bg-primary/10 h-32 flex items-center justify-center">
                    <span className="text-6xl">{member.avatar}</span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-foreground mb-1">{member.name}</h3>
                    <p className="text-primary font-semibold text-sm mb-3">{member.role}</p>
                    <p className="text-foreground/70 text-sm leading-relaxed">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* History/Timeline Section */}
        <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-muted/30">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-foreground text-balance">
                Our <span className="text-primary">Journey</span>
              </h2>
            </div>

            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 rounded-full bg-primary" />
                  <div className="w-1 h-32 bg-border" />
                </div>
                <div className="pb-8">
                  <h3 className="text-2xl font-bold text-primary mb-2">2010 - Founded</h3>
                  <p className="text-foreground/70">Beacon Charity was founded with a vision to create lasting change in underserved communities.</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 rounded-full bg-primary" />
                  <div className="w-1 h-32 bg-border" />
                </div>
                <div className="pb-8">
                  <h3 className="text-2xl font-bold text-primary mb-2">2015 - Global Expansion</h3>
                  <p className="text-foreground/70">Expanded operations to 10 countries, reaching over 50,000 people through education and healthcare programs.</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 rounded-full bg-primary" />
                  <div className="w-1 h-32 bg-border" />
                </div>
                <div className="pb-8">
                  <h3 className="text-2xl font-bold text-primary mb-2">2020 - Digital Transformation</h3>
                  <p className="text-foreground/70">Launched innovative digital initiatives to better serve communities and provide transparent impact reporting.</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 rounded-full bg-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-2">2024 - Present</h3>
                  <p className="text-foreground/70">Operating in 25 countries with a team of 200+ staff and 5,000+ active volunteers, creating measurable impact daily.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-primary text-white">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-5xl font-bold text-balance">
              Join Our Movement
            </h2>
            <p className="text-lg text-white/90">
              Help us continue our mission to create lasting change in communities worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 h-12 px-8" asChild>
                <a href="/donate">Donate Now</a>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 h-12 px-8 bg-transparent" asChild>
                <a href="/volunteer">Volunteer With Us</a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
