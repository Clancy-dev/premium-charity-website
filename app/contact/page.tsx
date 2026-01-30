'use client'

import React from "react"

import { useState } from 'react'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Mail, Phone, MapPin, Globe, Facebook, Twitter, Linkedin, Instagram, Send, CheckCircle } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-primary text-white">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Mail className="w-16 h-16 mx-auto opacity-80" />
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-balance">
              Get in <span className="text-accent">Touch</span>
            </h1>
            <p className="text-lg text-white/90">
              Have questions? We'd love to hear from you. Get in touch with our team anytime.
            </p>
          </div>
        </section>

        {/* Contact Info */}
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-muted/20">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg border border-border p-8 text-center space-y-4">
                <MapPin className="w-12 h-12 text-primary mx-auto" />
                <h3 className="text-xl font-bold text-foreground">Address</h3>
                <p className="text-foreground/70">
                  123 Charity Avenue<br />
                  Global City, GC 12345<br />
                  World
                </p>
              </div>
              <div className="bg-white rounded-lg border border-border p-8 text-center space-y-4">
                <Phone className="w-12 h-12 text-primary mx-auto" />
                <h3 className="text-xl font-bold text-foreground">Phone</h3>
                <p className="text-foreground/70">
                  <a href="tel:+1234567890" className="hover:text-primary">+1 (234) 567-8900</a><br />
                  <a href="tel:+9876543210" className="hover:text-primary">+98 7654-3210</a>
                </p>
              </div>
              <div className="bg-white rounded-lg border border-border p-8 text-center space-y-4">
                <Mail className="w-12 h-12 text-primary mx-auto" />
                <h3 className="text-xl font-bold text-foreground">Email</h3>
                <p className="text-foreground/70">
                  <a href="mailto:hello@elevateimpact.org" className="hover:text-primary">hello@elevateimpact.org</a><br />
                  <a href="mailto:support@elevateimpact.org" className="hover:text-primary">support@elevateimpact.org</a>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form & Map */}
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Form */}
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-serif font-bold text-foreground mb-4">Send us a Message</h2>
                <p className="text-foreground/70">Fill out the form below and we'll get back to you as soon as possible.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="What is this about?"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Your message here..."
                  />
                </div>

                {submitted ? (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-green-800 font-medium">Message sent successfully!</span>
                  </div>
                ) : (
                  <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-white gap-2 h-12">
                    <Send className="w-5 h-5" />
                    Send Message
                  </Button>
                )}
              </form>
            </div>

            {/* Info & Social */}
            <div className="space-y-8">
              {/* Hours */}
              <div className="bg-white rounded-lg border border-border p-8 space-y-4">
                <h3 className="text-xl font-bold text-foreground">Office Hours</h3>
                <div className="space-y-2 text-foreground/70">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-white rounded-lg border border-border p-8 space-y-4">
                <h3 className="text-xl font-bold text-foreground">Follow Us</h3>
                <div className="flex gap-4">
                  {[
                    { icon: Facebook, label: 'Facebook' },
                    { icon: Twitter, label: 'Twitter' },
                    { icon: Linkedin, label: 'LinkedIn' },
                    { icon: Instagram, label: 'Instagram' },
                  ].map((social) => {
                    const Icon = social.icon
                    return (
                      <a
                        key={social.label}
                        href="#"
                        className="w-12 h-12 rounded-lg bg-primary/10 hover:bg-primary hover:text-white text-primary flex items-center justify-center transition-all"
                        aria-label={social.label}
                      >
                        <Icon className="w-5 h-5" />
                      </a>
                    )
                  })}
                </div>
              </div>

              {/* Newsletter */}
              <div className="bg-primary text-white rounded-lg p-8 space-y-4">
                <h3 className="text-xl font-bold">Subscribe to Updates</h3>
                <p className="text-white/90 text-sm">Get the latest news and impact stories delivered to your inbox.</p>
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="flex-1 px-4 py-2 rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-white/50"
                  />
                  <Button className="bg-white text-primary hover:bg-white/90">Subscribe</Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Placeholder */}
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-muted/20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-foreground mb-8">Find Us on the Map</h2>
            <div className="bg-white rounded-lg border border-border overflow-hidden h-96 flex items-center justify-center bg-muted">
              <div className="text-center text-foreground/60">
                <Globe className="w-16 h-16 mx-auto mb-4 opacity-50" />
                <p>Interactive map would be displayed here</p>
                <p className="text-sm">Global Charity Avenue, 123 Charity City</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-serif font-bold text-foreground mb-12 text-center">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {[
                { q: 'How can I donate?', a: 'You can donate through our secure donation page using credit card, bank transfer, or mobile money.' },
                { q: 'Is my donation tax-deductible?', a: 'Yes! We are a registered 501(c)(3) nonprofit. You will receive a tax receipt via email.' },
                { q: 'How do I volunteer?', a: 'Visit our volunteer page to explore opportunities and register your interest.' },
                { q: 'Where do my donations go?', a: '95% of donations go directly to programs. You can track impact through our annual reports.' },
              ].map((item, i) => (
                <details key={i} className="bg-white rounded-lg border border-border p-6 hover:border-primary transition-colors group">
                  <summary className="font-bold text-foreground cursor-pointer flex justify-between items-center">
                    {item.q}
                    <span className="group-open:rotate-180 transition-transform">▶</span>
                  </summary>
                  <p className="text-foreground/70 mt-4">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
