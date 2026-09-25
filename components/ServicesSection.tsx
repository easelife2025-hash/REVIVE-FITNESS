'use client';

import { useState } from 'react';
import Image from 'next/image';
import { SERVICES_DATA, ServiceItem, GYM_DETAILS } from '@/lib/data';
import { ArrowRight, Check, Dumbbell, Sparkles } from 'lucide-react';
import { WhatsAppIcon } from '@/components/WhatsAppIcon';

interface ServicesSectionProps {
  onOpenBookModal: (serviceId?: string) => void;
}

export default function ServicesSection({ onOpenBookModal }: ServicesSectionProps) {
  const [selectedServiceId, setSelectedServiceId] = useState<string>(SERVICES_DATA[0].id);

  const activeService: ServiceItem =
    SERVICES_DATA.find((s) => s.id === selectedServiceId) || SERVICES_DATA[0];

  return (
    <section id="services" className="pt-8 pb-16 sm:pt-10 sm:pb-20 lg:pt-16 lg:pb-24 bg-zinc-950 border-t border-zinc-900 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs uppercase tracking-widest text-amber-400 font-bold">
              Core Offerings
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight mt-1">
              5 Disciplines.{' '}
              <span className="text-zinc-500 font-normal">One High-Energy Club.</span>
            </h2>
          </div>
          <p className="text-sm sm:text-base text-zinc-400 max-w-md">
            Whether your goal is raw barbell power, cardiovascular stamina, CrossFit athleticism, or customized fat loss, Revive Fitness provides the coaches and gear.
          </p>
        </div>

        {/* Interactive Segmented Selector Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {SERVICES_DATA.map((service) => {
            const isActive = service.id === selectedServiceId;
            return (
              <button
                key={service.id}
                onClick={() => setSelectedServiceId(service.id)}
                className={`shrink-0 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold tracking-wide uppercase transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-amber-400 text-zinc-950 shadow-lg shadow-amber-400/20 scale-[1.02]'
                    : 'bg-zinc-900/90 text-zinc-300 hover:text-white hover:bg-zinc-800 border border-zinc-800'
                }`}
              >
                {service.name}
              </button>
            );
          })}
        </div>

        {/* Active Service Detailed Showcase Panel */}
        <div className="relative rounded-3xl bg-zinc-900/70 border border-zinc-800 overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            
            {/* Image Preview Side */}
            <div className="lg:col-span-6 relative min-h-[340px] sm:min-h-[420px] lg:min-h-[500px]">
              <Image
                src={activeService.image}
                alt={`${activeService.name} at Revive Fitness Seawoods`}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center filter brightness-90 contrast-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-zinc-950/30 lg:to-zinc-900/90" />
              
              {/* Floating highlight tag on image */}
              <div className="absolute top-4 left-4 z-10 bg-zinc-950/80 backdrop-blur-md border border-zinc-700/80 px-3 py-1.5 rounded-lg text-xs font-semibold text-amber-400 flex items-center gap-1.5 shadow-md">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{activeService.highlight}</span>
              </div>
            </div>

            {/* Content & Details Side */}
            <div className="lg:col-span-6 p-6 sm:p-10 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs font-semibold uppercase text-amber-400 tracking-wider">
                  <Dumbbell className="w-4 h-4" />
                  <span>Revive Fitness Program</span>
                </div>

                <h3 className="text-2xl sm:text-4xl font-black text-white uppercase mt-2">
                  {activeService.name}
                </h3>

                <p className="mt-4 text-sm sm:text-base text-zinc-300 leading-relaxed">
                  {activeService.fullDesc}
                </p>

                {/* Features List */}
                <div className="mt-6">
                  <h4 className="text-xs uppercase font-bold text-zinc-400 tracking-wider mb-3">
                    What You Get & Experience
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {activeService.features.map((feat, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-200 bg-zinc-950/60 border border-zinc-800/80 p-2.5 rounded-lg"
                      >
                        <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Ideal For */}
                <div className="mt-5 p-3 rounded-xl bg-zinc-950/40 border border-zinc-800 text-xs text-zinc-400">
                  <span className="font-semibold text-zinc-300">Recommended for: </span>
                  {activeService.suitableFor}
                </div>
              </div>

              {/* Actions */}
              <div className="mt-8 pt-6 border-t border-zinc-800/80 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => onOpenBookModal(activeService.id)}
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-zinc-950 font-bold text-xs uppercase tracking-wider transition-all shadow-lg shadow-amber-400/20 cursor-pointer"
                >
                  <span>Book {activeService.name} Trial</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href={`https://wa.me/${GYM_DETAILS.whatsappRaw}?text=${encodeURIComponent(
                    `Hi Revive Fitness, I want to enquire about ${activeService.name} sessions at Seawoods.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs font-semibold tracking-wide transition-all"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  <span>WhatsApp Enquiry</span>
                </a>
              </div>

            </div>

          </div>
        </div>

        {/* 5-Column Grid Overview Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES_DATA.map((service) => (
            <div
              key={service.id}
              onClick={() => setSelectedServiceId(service.id)}
              className={`p-6 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${
                service.id === selectedServiceId
                  ? 'bg-zinc-900 border-amber-400/60 shadow-xl shadow-amber-400/5'
                  : 'bg-zinc-900/40 border-zinc-800/80 hover:border-zinc-700 hover:bg-zinc-900/70'
              }`}
            >
              <div>
                <div className="flex items-center justify-between">
                  <h4 className="text-lg font-bold text-white uppercase">{service.name}</h4>
                  <span className="text-[11px] text-amber-400 font-semibold px-2 py-0.5 rounded bg-amber-400/10 border border-amber-400/20">
                    {service.highlight}
                  </span>
                </div>
                <p className="mt-3 text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  {service.shortDesc}
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-zinc-800 flex items-center justify-between text-xs font-semibold">
                <span className="text-zinc-500">Tap to inspect gear & specs</span>
                <span className="text-amber-400 flex items-center gap-1">
                  View <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
