'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import {
  Star,
  Phone,
  MapPin,
  ArrowRight,
} from 'lucide-react';
import { WhatsAppIcon } from '@/components/WhatsAppIcon';
import { GYM_DETAILS } from '@/lib/data';

interface HeroProps {
  onOpenBookModal: () => void;
}

// 4 high-quality, realistic gym images as requested:
// 1. Weight training
// 2. CrossFit
// 3. Indoor cycling
// 4. Modern gym workout
const HERO_SLIDES = [
  {
    url: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=1920&auto=format&fit=crop',
    alt: 'Weight Training and Calibrated Barbells at Revive Fitness Seawoods',
    tagline: '1. Weight Training & Heavy Deck',
  },
  {
    url: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=1920&auto=format&fit=crop',
    alt: 'CrossFit and High Intensity Functional Conditioning Arena',
    tagline: '2. Dedicated CrossFit & Functional Arena',
  },
  {
    url: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1920&auto=format&fit=crop',
    alt: 'Indoor Cycling and Studio Spin Bikes at Revive Fitness',
    tagline: '3. Indoor Cycling & Endurance Studio',
  },
  {
    url: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=1920&auto=format&fit=crop',
    alt: 'Modern Gym Workout Floor, Machines and Cardio Setup',
    tagline: '4. Modern Gym Workout & Full Floor',
  },
];

export default function Hero({ onOpenBookModal }: HeroProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Changes automatically every 4 seconds and loops continuously
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section
      className="relative flex items-center justify-center overflow-hidden bg-zinc-950 pt-4 pb-4 sm:pt-6 sm:pb-6 lg:py-14 min-h-0 lg:min-h-[88vh]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Full-width, full-screen background banner slider that changes in a continuous loop */}
      <div className="absolute inset-0 z-0 select-none overflow-hidden">
        {HERO_SLIDES.map((slide, idx) => (
          <div
            key={slide.url}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              idx === currentSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
          >
            <Image
              src={slide.url}
              alt={slide.alt}
              fill
              priority={idx === 0}
              sizes="100vw"
              className="object-cover object-center scale-105 filter brightness-85 contrast-110"
              referrerPolicy="no-referrer"
            />
          </div>
        ))}

        {/* Balanced dark overlay ensuring the gym background is clearly visible while text is 100% readable */}
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-black/40" />
      </div>

      {/* Decorative ambient subtle glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-4xl flex flex-col items-start text-left">
          
          {/* Social proof & Location badge */}
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2 mb-4 text-xs sm:text-sm text-zinc-300">
            <a
              href="#reviews"
              className="flex items-center gap-1.5 bg-zinc-900/90 hover:bg-zinc-800 border border-zinc-700/80 px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
            >
              <div className="flex items-center text-amber-400">
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                <span className="ml-1 font-bold text-white text-xs sm:text-sm">4.9</span>
              </div>
              <span className="text-zinc-500">/</span>
              <span className="font-medium text-zinc-300">5.0</span>
              <span className="text-zinc-500">·</span>
              <span className="text-amber-400 font-semibold">192 Reviews</span>
            </a>

            <a
              href="#location"
              className="inline-flex items-center gap-1.5 text-zinc-300 hover:text-amber-400 font-medium text-xs transition-colors"
            >
              <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span>Seawoods West (Sector 40)</span>
            </a>
          </div>

          {/* Main Headline - Bold & Big */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-white uppercase leading-[1.04] max-w-4xl drop-shadow-lg">
            Train Strong.{' '}
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-yellow-500">
              Live Stronger.
            </span>
          </h1>

          {/* Streamlined Hero Actions */}
          <div className="mt-8 flex flex-wrap items-center gap-3.5 w-full sm:w-auto">
            <button
              onClick={onOpenBookModal}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-amber-400 hover:bg-amber-300 text-zinc-950 font-black text-sm sm:text-base tracking-wider uppercase shadow-2xl shadow-amber-400/30 transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            >
              <span>Book a Free Visit</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.5]" />
            </button>

            <a
              href={GYM_DETAILS.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-emerald-600/90 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm tracking-wide shadow-lg shadow-emerald-950/40 border border-emerald-500/40 transition-all hover:scale-[1.02]"
            >
              <WhatsAppIcon className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>

            <a
              href={`tel:${GYM_DETAILS.phoneRaw}`}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-200 font-semibold text-xs sm:text-sm border border-zinc-700/80 transition-all"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span className="hidden sm:inline">{GYM_DETAILS.phoneDisplay}</span>
              <span className="sm:hidden">Call Now</span>
            </a>

            <a
              href={GYM_DETAILS.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-3.5 text-xs text-zinc-400 hover:text-amber-400 transition-colors"
            >
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              <span>Directions</span>
            </a>
          </div>

          {/* Quick Address Anchor */}
          <div className="mt-7 pt-4 border-t border-zinc-800/80 w-full flex flex-wrap items-center justify-between gap-2 text-xs text-zinc-400">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              Near Grand Central Mall, Seawoods West
            </span>
            <span className="text-zinc-400 font-medium flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              Mon–Sat: 6:00 AM – 10:30 PM
            </span>
          </div>

        </div>
      </div>
    </section>
  );
}
