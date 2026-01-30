'use client';

import Link from 'next/link';
import { Heart, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 font-bold text-xl mb-4">
              <Heart className="w-6 h-6" fill="currentColor" />
              <span>Hope</span>
            </div>
            <p className="text-sm opacity-90">
              Making a difference in communities worldwide, one heart at a time.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-4 text-base">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="opacity-90 hover:opacity-100 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="opacity-90 hover:opacity-100 transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="opacity-90 hover:opacity-100 transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold mb-4 text-base">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 opacity-90">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <a href="mailto:hello@hopefoundation.org" className="hover:opacity-100 transition">
                  hello@hopefoundation.org
                </a>
              </li>
              <li className="flex items-center gap-2 opacity-90">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <a href="tel:+1-555-0123" className="hover:opacity-100 transition">
                  (555) 0123
                </a>
              </li>
              <li className="flex items-start gap-2 opacity-90">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span>123 Hope Street<br />New York, NY 10001</span>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-bold mb-4 text-base">Follow Us</h3>
            <div className="flex gap-4">
              <a href="#" className="opacity-90 hover:opacity-100 transition" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="opacity-90 hover:opacity-100 transition" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="opacity-90 hover:opacity-100 transition" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="opacity-90 hover:opacity-100 transition" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 pt-8">
          <p className="text-center text-sm opacity-90">
            &copy; {currentYear} Hope Foundation. All rights reserved. | Made with <Heart className="inline w-4 h-4" fill="currentColor" /> by people who care
          </p>
        </div>
      </div>
    </footer>
  );
}
