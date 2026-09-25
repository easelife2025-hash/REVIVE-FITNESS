'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Phone, Menu, X, Dumbbell, MapPin, Clock, ArrowRight } from 'lucide-react';
import { WhatsAppIcon } from '@/components/WhatsAppIcon';
import { GYM_DETAILS } from '@/lib/data';

interface NavbarProps {
  onOpenBookModal: (service?: string) => void;
}

export default function Navbar({ onOpenBookModal }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Equipment', href: '#equipment' },
    { label: 'Why Revive', href: '#why-us' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Hours', href: '#hours' },
    { label: 'Location', href: '#location' },
  ];

  return (
    <>
      {/* Top announcement bar */}
      <div className="bg-zinc-950 border-b border-zinc-800/80 text-xs text-zinc-300 py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 font-medium text-amber-400">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Seawoods West, Navi Mumbai
            </span>
            <span className="text-zinc-600 hidden sm:inline">|</span>
            <span className="hidden sm:inline text-zinc-400">Near Grand Central Mall</span>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <span className="hidden md:inline-flex items-center gap-1 text-zinc-400">
              <Clock className="w-3.5 h-3.5 text-amber-400" />
              Mon–Sat: 6:00 AM – 10:30 PM
            </span>
            <a
              href={`tel:${GYM_DETAILS.phoneRaw}`}
              className="inline-flex items-center gap-1.5 text-zinc-200 hover:text-amber-400 transition-colors font-semibold"
            >
              <Phone className="w-3 h-3 text-amber-400" />
              <span>{GYM_DETAILS.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-zinc-950/95 backdrop-blur-md border-b border-zinc-800 shadow-xl shadow-black/40 py-2.5'
            : 'bg-zinc-950/85 backdrop-blur-sm border-b border-zinc-800/60 py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            {/* Brand Logo */}
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-amber-400 flex items-center justify-center text-zinc-950 font-black shadow-lg shadow-amber-400/20 group-hover:scale-105 transition-transform">
                <Dumbbell className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.5]" />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1">
                  <span className="text-lg sm:text-2xl font-black tracking-wider text-white uppercase font-sans">
                    REVIVE
                  </span>
                  <span className="text-lg sm:text-2xl font-black tracking-wider text-amber-400 uppercase">
                    FITNESS
                  </span>
                </div>
                <span className="text-[9px] sm:text-[10px] tracking-widest text-zinc-400 uppercase font-semibold">
                  Seawoods · Navi Mumbai
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-medium text-zinc-300">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="hover:text-amber-400 transition-colors duration-150 py-1 relative hover:after:w-full after:w-0 after:h-0.5 after:bg-amber-400 after:absolute after:bottom-0 after:left-0 after:transition-all"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Header Action Buttons */}
            <div className="hidden sm:flex items-center gap-2">
              <a
                href={GYM_DETAILS.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-lg bg-emerald-500/15 hover:bg-emerald-500/25 text-emerald-400 border border-emerald-500/30 transition-all hover:scale-[1.02]"
                aria-label="Chat on WhatsApp"
              >
                <WhatsAppIcon className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>

              <a
                href={`tel:${GYM_DETAILS.phoneRaw}`}
                className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-200 border border-zinc-700/80 transition-all hover:scale-[1.02]"
              >
                <Phone className="w-3.5 h-3.5 text-amber-400" />
                <span>Call</span>
              </a>

              <button
                onClick={() => onOpenBookModal()}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold rounded-lg bg-amber-400 hover:bg-amber-300 text-zinc-950 shadow-md shadow-amber-400/20 transition-all hover:scale-[1.02] cursor-pointer"
              >
                <span>Book Visit</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Mobile Menu Toggle Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                onClick={() => onOpenBookModal()}
                className="px-3 py-1.5 rounded-lg bg-amber-400 text-zinc-950 font-bold text-xs shadow-md shadow-amber-400/20"
              >
                Book Visit
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[90px] z-30 bg-zinc-950/98 backdrop-blur-xl border-b border-zinc-800 px-5 py-5 shadow-2xl animate-in slide-in-from-top duration-200">
          <div className="flex flex-col gap-3">
            <div className="flex flex-col gap-1 pb-3 border-b border-zinc-800">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-semibold text-zinc-200 hover:text-amber-400 py-2.5 transition-colors flex items-center justify-between border-b border-zinc-900 last:border-none"
                >
                  <span>{link.label}</span>
                  <ArrowRight className="w-4 h-4 text-zinc-600" />
                </a>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-2 pt-1">
              <a
                href={GYM_DETAILS.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 text-xs font-bold"
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>

              <a
                href={`tel:${GYM_DETAILS.phoneRaw}`}
                className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-zinc-900 text-zinc-200 border border-zinc-800 text-xs font-bold"
              >
                <Phone className="w-3.5 h-3.5 text-amber-400" />
                <span>Call Gym</span>
              </a>
            </div>

            <div className="flex items-start gap-2 pt-2 text-[11px] text-zinc-400">
              <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
              <span>{GYM_DETAILS.shortAddress}</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
