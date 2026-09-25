'use client';

import { Dumbbell, ArrowRight, Phone, MapPin, CheckCircle2 } from 'lucide-react';
import { WhatsAppIcon } from '@/components/WhatsAppIcon';
import { GYM_DETAILS } from '@/lib/data';

interface CtaSectionProps {
  onOpenBookModal: () => void;
}

export default function CtaSection({ onOpenBookModal }: CtaSectionProps) {
  return (
    <section className="py-20 lg:py-28 bg-zinc-950 relative overflow-hidden border-t border-zinc-900">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Monogram */}
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-amber-400 text-zinc-950 mb-6 shadow-xl shadow-amber-400/20">
          <Dumbbell className="w-8 h-8 stroke-[2.5]" />
        </div>

        {/* Headline */}
        <span className="block text-xs uppercase tracking-widest text-amber-400 font-bold mb-2">
          Your Transformation Starts in Seawoods
        </span>
        
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white uppercase tracking-tight max-w-3xl mx-auto leading-[1.1]">
          Ready to Train Strong and Live Stronger?
        </h2>

        <p className="mt-5 text-sm sm:text-base md:text-lg text-zinc-300 max-w-2xl mx-auto leading-relaxed">
          Book a complimentary walk-through of Revive Fitness. Experience our dedicated CrossFit turf, heavy strength deck, and talk with our certified coaches.
        </p>

        {/* Feature Checkpoints */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-xs sm:text-sm text-zinc-300">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Zero Pushy Sales Pressure</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Complete Facility & Turf Tour</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Personalized Workout Consultation</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={onOpenBookModal}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-amber-400 hover:bg-amber-300 text-zinc-950 font-black text-sm tracking-wider uppercase shadow-xl shadow-amber-400/25 transition-all hover:scale-105 active:scale-95 cursor-pointer"
          >
            <span>Book a Visit Now</span>
            <ArrowRight className="w-4 h-4 stroke-[2.5]" />
          </button>

          <a
            href={GYM_DETAILS.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm tracking-wider uppercase transition-all shadow-lg shadow-emerald-950/40 border border-emerald-500/30"
          >
            <WhatsAppIcon className="w-4 h-4" />
            <span>WhatsApp Us</span>
          </a>

          <a
            href={`tel:${GYM_DETAILS.phoneRaw}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-200 font-semibold text-sm border border-zinc-800 transition-all hover:border-zinc-600"
          >
            <Phone className="w-4 h-4 text-amber-400" />
            <span>Call 083699 44765</span>
          </a>
        </div>

        {/* Trust Tag */}
        <div className="mt-8 text-xs text-zinc-400">
          Rated <span className="font-bold text-amber-400">4.9★</span> by 192+ verified members across Google and Justdial.
        </div>

      </div>
    </section>
  );
}
