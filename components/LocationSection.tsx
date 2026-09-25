'use client';

import { useState } from 'react';
import { MapPin, Navigation, Phone, Train, Car, Copy, Check, ExternalLink, ShieldCheck } from 'lucide-react';
import { GYM_DETAILS } from '@/lib/data';

export default function LocationSection() {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(GYM_DETAILS.address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="location" className="py-20 lg:py-28 bg-zinc-900/60 border-t border-zinc-900 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <span className="text-xs uppercase tracking-widest text-amber-400 font-bold">
            Easy To Reach
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight mt-1">
            Location & Directions
          </h2>
          <p className="mt-3 text-sm sm:text-base text-zinc-400">
            Positioned in the prime hub of Seawoods West, Sector 40, directly accessible from Grand Central Mall and Seawoods Darave Station.
          </p>
        </div>

        {/* 2-Column Layout: Details on left, Map on right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Details Column */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Address Card */}
            <div className="p-7 rounded-3xl bg-zinc-950 border border-zinc-800 shadow-xl">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-amber-400/10 border border-amber-400/20 text-amber-400 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                    Official Gym Address
                  </span>
                  <p className="text-base sm:text-lg font-bold text-white mt-1 leading-snug">
                    {GYM_DETAILS.address}
                  </p>
                </div>
              </div>

              {/* Action Buttons for address */}
              <div className="mt-6 flex flex-wrap gap-2.5">
                <a
                  href={GYM_DETAILS.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-zinc-950 font-bold text-xs uppercase tracking-wider transition-all shadow-md shadow-amber-400/15"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Get Directions</span>
                </a>

                <button
                  onClick={handleCopyAddress}
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-200 border border-zinc-800 text-xs font-semibold transition-all cursor-pointer"
                  title="Copy full address to clipboard"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span className="text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-zinc-400" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Direct Call row */}
              <div className="mt-6 pt-5 border-t border-zinc-800/80 flex items-center justify-between text-xs">
                <span className="text-zinc-400">Direct Reception Call:</span>
                <a
                  href={`tel:${GYM_DETAILS.phoneRaw}`}
                  className="font-bold text-amber-400 hover:text-amber-300 inline-flex items-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>{GYM_DETAILS.phoneDisplay}</span>
                </a>
              </div>
            </div>

            {/* Commute & Landmark Guides */}
            <div className="p-7 rounded-3xl bg-zinc-950 border border-zinc-800 space-y-5">
              <h3 className="text-xs uppercase font-bold text-zinc-300 tracking-wider">
                Transit & Landmarks
              </h3>

              {/* By Train */}
              <div className="flex items-start gap-3 text-xs sm:text-sm text-zinc-300">
                <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 text-amber-400 flex items-center justify-center shrink-0">
                  <Train className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">By Suburban Railway (Harbour Line)</div>
                  <p className="text-zinc-400 text-xs mt-0.5">
                    Alight at Seawoods Darave Station. Take the West exit towards Grand Central Mall. REVIVE FITNESS is just a 2-minute walk away.
                  </p>
                </div>
              </div>

              {/* By Road & Landmark */}
              <div className="flex items-start gap-3 text-xs sm:text-sm text-zinc-300">
                <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 text-amber-400 flex items-center justify-center shrink-0">
                  <Car className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">Landmark & Parking</div>
                  <p className="text-zinc-400 text-xs mt-0.5">
                    Located on 51 Jairam Tukaram Tandel Marg, right beside Grand Central Mall. Convenient two-wheeler and four-wheeler parking spaces available.
                  </p>
                </div>
              </div>

            </div>

          </div>

          {/* Map Column */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-zinc-950 border border-zinc-800 overflow-hidden shadow-2xl">
              
              {/* Top header of map */}
              <div className="p-4 bg-zinc-900/90 border-b border-zinc-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                  <span className="text-xs font-bold text-white uppercase tracking-wider">
                    Interactive Map · Seawoods West
                  </span>
                </div>
                <a
                  href={GYM_DETAILS.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-amber-400 hover:text-amber-300 font-semibold inline-flex items-center gap-1"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Map embed / visual container */}
              <div className="relative w-full h-[380px] sm:h-[440px] bg-zinc-900">
                <iframe
                  title="Revive Fitness Seawoods Map"
                  src="https://maps.google.com/maps?q=REVIVE+FITNESS+51+Jairam+Tukaram+Tandel+Marg+near+Grand+Central+Mall+Seawoods+West+Sector+40+Navi+Mumbai+400706&t=&z=16&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(95%)' }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />

                {/* Overlaid location card indicator */}
                <div className="absolute bottom-4 left-4 right-4 sm:right-auto sm:max-w-xs p-3.5 rounded-xl bg-zinc-950/95 backdrop-blur-md border border-zinc-800 text-xs shadow-2xl">
                  <div className="flex items-center gap-2 font-bold text-white uppercase">
                    <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                    <span>REVIVE FITNESS</span>
                  </div>
                  <div className="text-[11px] text-zinc-300 mt-1">
                    1st Floor, 51 Jairam Tukaram Tandel Marg
                  </div>
                  <div className="text-[10px] text-amber-400 font-medium mt-1">
                    Opposite / near Grand Central Mall
                  </div>
                </div>
              </div>

              {/* Bottom bar */}
              <div className="p-4 bg-zinc-950 flex flex-wrap items-center justify-between gap-3 text-xs text-zinc-400 border-t border-zinc-800">
                <span>Pincode: 400706 · Navi Mumbai</span>
                <span className="text-zinc-300 font-medium">1st Floor Facility</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
