'use client';

import { WHY_CHOOSE_US, GYM_DETAILS } from '@/lib/data';
import { MapPin, Dumbbell, Users, Sparkles, Clock, ShieldCheck, ArrowRight } from 'lucide-react';

const ICON_MAP = {
  MapPin,
  Dumbbell,
  Users,
  Sparkles,
  Clock,
  ShieldCheck,
};

interface WhyChooseUsSectionProps {
  onOpenBookModal: () => void;
}

export default function WhyChooseUsSection({ onOpenBookModal }: WhyChooseUsSectionProps) {
  return (
    <section id="why-us" className="py-20 lg:py-28 bg-zinc-950 border-t border-zinc-900 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs uppercase tracking-widest text-amber-400 font-bold">
            The Revive Difference
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight mt-1">
            Why Seawoods Chooses Revive Fitness
          </h2>
          <p className="mt-4 text-sm sm:text-base text-zinc-400">
            No empty claims or generic gym gimmicks. Here is why over 192 verified members rate Revive Fitness 4.9 out of 5 stars in Navi Mumbai.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_CHOOSE_US.map((item, index) => {
            const IconComponent =
              ICON_MAP[item.iconName as keyof typeof ICON_MAP] || Dumbbell;

            return (
              <div
                key={index}
                className="relative rounded-2xl bg-zinc-900/60 border border-zinc-800/80 p-7 hover:border-amber-400/40 hover:bg-zinc-900 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-amber-400/10 border border-amber-400/20 text-amber-400 flex items-center justify-center mb-5 group-hover:scale-105 group-hover:bg-amber-400 group-hover:text-zinc-950 transition-all">
                    <IconComponent className="w-6 h-6 stroke-[2]" />
                  </div>

                  <h3 className="text-lg font-bold text-white uppercase tracking-wide">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm text-zinc-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-zinc-800/60 flex items-center justify-between text-xs text-zinc-500 font-medium">
                  <span>Standard at Revive</span>
                  <span className="text-amber-400/80 font-mono text-[11px]">0{index + 1}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner Call to Action */}
        <div className="mt-14 rounded-3xl bg-gradient-to-r from-zinc-900 via-zinc-900 to-zinc-950 border border-zinc-800 p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div>
            <h3 className="text-xl sm:text-2xl font-black text-white uppercase">
              Experience The Vibe In Person
            </h3>
            <p className="mt-1.5 text-xs sm:text-sm text-zinc-400 max-w-xl">
              Walk through the CrossFit zone, inspect the strength deck, meet our certified coaches, and see why our members love training here.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0 w-full md:w-auto">
            <button
              onClick={onOpenBookModal}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-zinc-950 font-bold text-xs uppercase tracking-wider transition-all shadow-lg shadow-amber-400/20 cursor-pointer"
            >
              <span>Schedule Free Visit</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href={`tel:${GYM_DETAILS.phoneRaw}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-200 font-semibold text-xs transition-all border border-zinc-700"
            >
              <span>Call 083699 44765</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
