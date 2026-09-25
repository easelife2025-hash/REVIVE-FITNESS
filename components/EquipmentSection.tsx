'use client';

import { useState } from 'react';
import Image from 'next/image';
import { FACILITIES_DATA, GYM_DETAILS } from '@/lib/data';
import { CheckCircle2, ShieldCheck, Wind, Lock, Sparkles, Flame, Eye } from 'lucide-react';

export default function EquipmentSection() {
  const [activeZone, setActiveZone] = useState<string>(FACILITIES_DATA[0].id);

  return (
    <section id="equipment" className="py-20 lg:py-28 bg-zinc-900/40 border-t border-zinc-900 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Headline */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-widest text-amber-400 font-bold">
            Built For High Performance
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight mt-1">
            Modern Equipment & Facilities
          </h2>
          <p className="mt-4 text-sm sm:text-base text-zinc-400">
            A serious workout requires serious engineering. From calibrated Olympic barbells to dedicated sprint turf lanes and high-cadence spin bikes, we maintain high standards across all zones.
          </p>
        </div>

        {/* Feature Zones Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Zone Selection List */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            {FACILITIES_DATA.map((zone) => {
              const isActive = zone.id === activeZone;
              return (
                <div
                  key={zone.id}
                  onClick={() => setActiveZone(zone.id)}
                  className={`p-5 rounded-2xl border transition-all cursor-pointer text-left ${
                    isActive
                      ? 'bg-zinc-900 border-amber-400/80 shadow-xl shadow-amber-400/5 translate-x-1'
                      : 'bg-zinc-950/60 border-zinc-800/80 hover:border-zinc-700 hover:bg-zinc-900/40'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-white text-base sm:text-lg">
                      {zone.title}
                    </h3>
                    {isActive ? (
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span>
                    ) : null}
                  </div>
                  <p className="text-xs sm:text-sm text-zinc-400 mt-1">
                    {zone.subtitle}
                  </p>
                </div>
              );
            })}

            {/* Quick Amenity Trust Bar */}
            <div className="mt-4 p-5 rounded-2xl bg-zinc-950/90 border border-zinc-800/80">
              <h4 className="text-xs uppercase font-bold text-zinc-300 tracking-wider mb-3">
                Member Amenities Included
              </h4>
              <div className="grid grid-cols-2 gap-3 text-xs text-zinc-300">
                <div className="flex items-center gap-2">
                  <Wind className="w-4 h-4 text-amber-400" />
                  <span>Central High-Air AC</span>
                </div>
                <div className="flex items-center gap-2">
                  <Lock className="w-4 h-4 text-amber-400" />
                  <span>Secure Day Lockers</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-amber-400" />
                  <span>Biometric Entry System</span>
                </div>
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  <span>Sanitized Daily</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Selected Zone Detailed Preview */}
          <div className="lg:col-span-7">
            {(() => {
              const current =
                FACILITIES_DATA.find((z) => z.id === activeZone) || FACILITIES_DATA[0];
              return (
                <div className="rounded-3xl bg-zinc-950 border border-zinc-800 overflow-hidden shadow-2xl">
                  {/* Large High-Res Zone Photo */}
                  <div className="relative h-64 sm:h-80 w-full">
                    <Image
                      src={current.image}
                      alt={current.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 60vw"
                      className="object-cover object-center filter brightness-90 contrast-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/30 to-transparent" />
                    
                    <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                      <div>
                        <span className="text-xs uppercase font-bold text-amber-400 tracking-wider">
                          Zone Overview
                        </span>
                        <h3 className="text-xl sm:text-2xl font-black text-white uppercase">
                          {current.title}
                        </h3>
                      </div>
                    </div>
                  </div>

                  {/* Specifications & Breakdown */}
                  <div className="p-6 sm:p-8">
                    <p className="text-sm text-zinc-300 leading-relaxed">
                      {current.description}
                    </p>

                    <h4 className="mt-6 text-xs uppercase font-bold text-amber-400 tracking-wider mb-3">
                      Equipment Specifications
                    </h4>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {current.specs.map((spec, i) => (
                        <div
                          key={i}
                          className="flex items-start gap-2.5 p-3 rounded-xl bg-zinc-900/80 border border-zinc-800/80 text-xs text-zinc-200"
                        >
                          <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                          <span>{spec}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 pt-5 border-t border-zinc-800/80 flex flex-wrap items-center justify-between gap-4 text-xs text-zinc-400">
                      <div className="flex items-center gap-1.5">
                        <Flame className="w-4 h-4 text-amber-400" />
                        <span>Located on 1st Floor, Jairam Tukaram Tandel Marg</span>
                      </div>
                      <a
                        href={GYM_DETAILS.whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-amber-400 hover:text-amber-300 font-semibold inline-flex items-center gap-1"
                      >
                        Ask gym floor questions →
                      </a>
                    </div>
                  </div>

                </div>
              );
            })()}
          </div>

        </div>

      </div>
    </section>
  );
}
