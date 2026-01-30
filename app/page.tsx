'use client'

import { ArrowRight, Star, TrendingUp, Users } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import { PremiumCarousel } from '@/components/premium-carousel'

const featuredCauses = [
  {
    id: 1,
    title: 'Clean Water Initiative',
    description: 'Providing access to clean drinking water in rural communities',
    progress: 65,
    raised: '$125,000',
    goal: '$200,000',
    icon: '💧',
  },
  {
    id: 2,
    title: 'Education for All',
    description: 'Building schools and providing scholarships to underprivileged children',
    progress: 82,
    raised: '$180,000',
    goal: '$220,000',
    icon: '📚',
  },
  {
    id: 3,
    title: 'Healthcare Program',
    description: 'Mobile clinics bringing medical care to remote areas',
    progress: 45,
    raised: '$95,000',
    goal: '$250,000',
    icon: '🏥',
  },
  {
    id: 4,
    title: 'Skill Development',
    description: 'Vocational training for youth employment opportunities',
    progress: 71,
    raised: '$140,000',
    goal: '$200,000',
    icon: '🎓',
  },
]

const successStories = [
  {
    title: '10,000+ Lives Impacted',
    description: 'Through our various programs, we have directly improved the lives of over 10,000 people',
  },
  {
    title: '500+ Children Educated',
    description: 'Our education program has provided schooling to 500+ children in underserved areas',
  },
  {
    title: '5,000+ People Reached',
    description: 'Healthcare services delivered to 5,000+ individuals in remote communities',
  },
  {
    title: '2,000+ Jobs Created',
    description: 'Through skill development programs, we have helped create 2,000+ employment opportunities',
  },
]

const testimonials = [
  {
    name: 'Maria Rodriguez',
    role: 'Community Leader',
    text: 'Beacon Charity transformed our community. The education program changed the lives of hundreds of children.',
  },
  {
    name: 'James Okafor',
    role: 'Healthcare Worker',
    text: 'Their healthcare initiative brought medical services to areas that had none. The impact is incredible.',
  },
  {
    name: 'Sarah Chen',
    role: 'Volunteer',
    text: 'Being part of Beacon Charity gave me purpose. I love seeing the direct impact of our work.',
  },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="flex-1">
        {/* Premium Carousel Hero */}
        <PremiumCarousel />

        {/* Stats Section */}
        <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-primary text-white">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <TrendingUp className="w-12 h-12 mx-auto mb-4 opacity-80" />
                <div className="text-4xl font-bold mb-2">$50M+</div>
                <p className="text-white/80">Funds Distributed</p>
              </div>
              <div className="text-center">
                <Users className="w-12 h-12 mx-auto mb-4 opacity-80" />
                <div className="text-4xl font-bold mb-2">500K+</div>
                <p className="text-white/80">Lives Impacted</p>
              </div>
              <div className="text-center">
                <Star className="w-12 h-12 mx-auto mb-4 opacity-80" />
                <div className="text-4xl font-bold mb-2">95%</div>
                <p className="text-white/80">To Programs</p>
              </div>
              <div className="text-center">
                <TrendingUp className="w-12 h-12 mx-auto mb-4 opacity-80" />
                <div className="text-4xl font-bold mb-2">75</div>
                <p className="text-white/80">Countries</p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Causes Section */}
        <section id="causes" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-background">
          <div className="max-w-6xl mx-auto">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground text-balance">
                Featured <span className="text-primary">Causes</span>
              </h2>
              <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
                Each cause represents a commitment to transformative, sustainable change
              </p>
            </div>

            {/* Causes Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {featuredCauses.map((cause) => (
                <div
                  key={cause.id}
                  className="bg-white rounded-lg border border-border p-6 hover:border-primary transition-colors"
                >
                  <div className="text-4xl mb-4">{cause.icon}</div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{cause.title}</h3>
                  <p className="text-foreground/70 mb-6">{cause.description}</p>

                  {/* Progress Bar */}
                  <div className="mb-4">
                    <div className="flex justify-between text-sm text-foreground/70 mb-2">
                      <span>{cause.raised}</span>
                      <span>{cause.goal}</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div
                        className="bg-primary rounded-full h-2 transition-all"
                        style={{ width: `${cause.progress}%` }}
                      />
                    </div>
                    <div className="text-sm text-foreground/60 mt-1">{cause.progress}% funded</div>
                  </div>

                  <Button className="w-full bg-primary hover:bg-primary/90 text-white gap-2" asChild>
                    <a href="/donate">
                      Support This Cause
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Success Stories Section */}
        <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-muted/30">
          <div className="max-w-6xl mx-auto">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-foreground text-balance">
                Our <span className="text-primary">Impact</span>
              </h2>
              <p className="text-lg text-foreground/70">Numbers that represent real change in communities</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {successStories.map((story, index) => (
                <div key={index} className="bg-white rounded-lg p-8 border border-border">
                  <h3 className="text-2xl font-bold text-primary mb-3">{story.title}</h3>
                  <p className="text-foreground/70 leading-relaxed">{story.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-background">
          <div className="max-w-6xl mx-auto">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-foreground text-balance">
                What People <span className="text-primary">Say</span>
              </h2>
              <p className="text-lg text-foreground/70">Hear from those whose lives have been touched by our work</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white rounded-lg border border-border p-8 hover:border-primary transition-colors">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-2xl">
                      👤
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-foreground/60">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-foreground/70 leading-relaxed italic">"{testimonial.text}"</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-primary text-white">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-5xl font-bold text-balance">
              Ready to Make a Difference?
            </h2>
            <p className="text-lg text-white/90">
              Join thousands of supporters making real change in communities worldwide.
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
