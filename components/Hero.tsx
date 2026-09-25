'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import {
  Star,
  MapPin,
  Clock,
} from 'lucide-react';

interface HeroProps {
  onOpenBookModal?: () => void;
}

// 4 high-resolution, dark-themed gym equipment & interior backgrounds:
const HERO_SLIDES = [
  {
    url: '/images/dark_gym_hero.jpg',
    alt: 'Dark-themed luxury gym equipment, dumbbells rack, and low-key lighting',
  },
  {
    url: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1920&auto=format&fit=crop',
    alt: 'Moody modern dumbbells rack and strength training equipment',
  },
  {
    url: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=1920&auto=format&fit=crop',
    alt: 'Sleek dark gym floor and modern resistance workout equipment',
  },
  {
    url: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=1920&auto=format&fit=crop',
    alt: 'High performance barbell racks and dark fitness club atmosphere',
  },
];

export default function Hero({ onOpenBookModal: _onOpenBookModal }: HeroProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-changes every 4 seconds and loops continuously with smooth crossfade
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section
      className="relative min-h-[82vh] sm:min-h-[86vh] lg:min-h-[92vh] flex items-center justify-center overflow-hidden bg-zinc-950 py-20 sm:py-28 lg:py-36"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Full-width dark gym equipment background carousel */}
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
              className="object-cover object-center scale-105 filter brightness-90 contrast-110"
              referrerPolicy="no-referrer"
            />
          </div>
        ))}

        {/* Cinematic dark overlays for contrast & modern aesthetic */}
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/30 to-black/50" />
        <div className="absolute inset-0 bg-radial from-transparent via-black/30 to-zinc-950/80" />
      </div>

      {/* Subtle ambient amber accent glow in the center */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[32rem] h-[32rem] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Main Centered Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col items-center justify-center text-center">
        
        {/* Subtle rating pill */}
        <a
          href="#reviews"
          className="inline-flex items-center gap-2 bg-zinc-900/80 hover:bg-zinc-800/90 border border-zinc-700/60 px-3.5 py-1.5 rounded-full mb-6 sm:mb-8 backdrop-blur-md transition-colors"
        >
          <div className="flex items-center text-amber-400">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            <span className="ml-1 font-bold text-white text-xs">4.9</span>
          </div>
          <span className="text-zinc-600">|</span>
          <span className="text-zinc-300 text-xs font-medium">192 Reviews</span>
          <span className="text-zinc-600">|</span>
          <span className="text-amber-400 text-xs font-semibold">Revive Fitness Seawoods</span>
        </a>

        {/* Centered Bold Modern Typography */}
        <h1 className="flex flex-col items-center justify-center tracking-tight font-black select-none">
          <span className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-white uppercase tracking-tight leading-[0.95] drop-shadow-2xl">
            TRAIN STRONG.
          </span>
          <span className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-amber-400 uppercase tracking-tight leading-[0.95] mt-2 sm:mt-4 drop-shadow-2xl font-black">
            LIVE STRONGER.
          </span>
        </h1>

        {/* Balanced left and right details: Location & Timings */}
        <div className="mt-10 sm:mt-14 pt-6 border-t border-zinc-800/80 w-full max-w-3xl flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-zinc-300">
          {/* Left: Subtle location icon with 'Seawoods West' */}
          <a
            href="#location"
            className="flex items-center gap-2 text-zinc-300 hover:text-amber-400 transition-colors group"
          >
            <MapPin className="w-4 h-4 text-amber-400 shrink-0 group-hover:scale-110 transition-transform" />
            <span className="tracking-wide font-medium">Seawoods West (Sector 40)</span>
          </a>

          {/* Right: Timing details */}
          <div className="flex items-center gap-2 text-zinc-300 font-medium">
            <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="tracking-wide">Mon–Sat: 6:00 AM – 10:30 PM</span>
          </div>
        </div>

      </div>
    </section>
  );
}
