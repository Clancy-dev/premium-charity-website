'use client';

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { Menu, X, Heart, LogIn } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen(!isOpen);

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 font-bold text-xl text-primary hover:opacity-80 transition font-serif">
            <Heart className="w-6 h-6" fill="currentColor" />
            <span>Elevate Impact</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 items-center">
            <Link href="/" className={`transition font-medium ${isActive('/') ? 'text-primary border-b-2 border-primary' : 'text-foreground hover:text-primary'}`}>
              Home
            </Link>
            <Link href="/about" className={`transition font-medium ${isActive('/about') ? 'text-primary border-b-2 border-primary' : 'text-foreground hover:text-primary'}`}>
              About
            </Link>
            <Link href="/events" className={`transition font-medium ${isActive('/events') ? 'text-primary border-b-2 border-primary' : 'text-foreground hover:text-primary'}`}>
              Events
            </Link>
            <Link href="/causes" className={`transition font-medium ${isActive('/causes') ? 'text-primary border-b-2 border-primary' : 'text-foreground hover:text-primary'}`}>
              Causes
            </Link>
            <Link href="/blog" className={`transition font-medium ${isActive('/blog') ? 'text-primary border-b-2 border-primary' : 'text-foreground hover:text-primary'}`}>
              Blog
            </Link>
            <Link href="/gallery" className={`transition font-medium ${isActive('/gallery') ? 'text-primary border-b-2 border-primary' : 'text-foreground hover:text-primary'}`}>
              Gallery
            </Link>
            <Link href="/contact" className={`transition font-medium ${isActive('/contact') ? 'text-primary border-b-2 border-primary' : 'text-foreground hover:text-primary'}`}>
              Contact
            </Link>
            <Button variant="outline" className="gap-2 bg-transparent" asChild>
              <Link href="/volunteer">
                Volunteer
              </Link>
            </Button>
            <Button variant="outline" className="gap-2 bg-transparent" asChild>
              <Link href="/login">
                <LogIn className="w-4 h-4" />
                Login
              </Link>
            </Button>
            <Button className="bg-primary hover:bg-primary/90 text-white gap-2 rounded-full" asChild>
              <Link href="/donate">
                <Heart className="w-4 h-4" fill="currentColor" />
                Donate
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-foreground hover:text-primary transition"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-border">
            <Link href="/" className={`block py-2 px-0 transition font-medium ${isActive('/') ? 'text-primary' : 'text-foreground hover:text-primary'}`}>
              Home
            </Link>
            <Link href="/about" className={`block py-2 px-0 transition font-medium ${isActive('/about') ? 'text-primary' : 'text-foreground hover:text-primary'}`}>
              About
            </Link>
            <Link href="/events" className={`block py-2 px-0 transition font-medium ${isActive('/events') ? 'text-primary' : 'text-foreground hover:text-primary'}`}>
              Events
            </Link>
            <Link href="/causes" className={`block py-2 px-0 transition font-medium ${isActive('/causes') ? 'text-primary' : 'text-foreground hover:text-primary'}`}>
              Causes
            </Link>
            <Link href="/blog" className={`block py-2 px-0 transition font-medium ${isActive('/blog') ? 'text-primary' : 'text-foreground hover:text-primary'}`}>
              Blog
            </Link>
            <Link href="/gallery" className={`block py-2 px-0 transition font-medium ${isActive('/gallery') ? 'text-primary' : 'text-foreground hover:text-primary'}`}>
              Gallery
            </Link>
            <Link href="/contact" className={`block py-2 px-0 transition font-medium ${isActive('/contact') ? 'text-primary' : 'text-foreground hover:text-primary'}`}>
              Contact
            </Link>
            <div className="flex flex-col gap-2 mt-4">
              <Button variant="outline" className="w-full gap-2 bg-transparent" asChild>
                <Link href="/volunteer">
                  Volunteer
                </Link>
              </Button>
              <Button variant="outline" className="w-full gap-2 bg-transparent" asChild>
                <Link href="/login">
                  <LogIn className="w-4 h-4" />
                  Login
                </Link>
              </Button>
              <Button className="w-full bg-primary hover:bg-primary/90 text-white gap-2 rounded-full" asChild>
                <Link href="/donate">
                  <Heart className="w-4 h-4" fill="currentColor" />
                  Donate
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
