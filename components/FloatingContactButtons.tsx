'use client';

import { Phone } from 'lucide-react';
import { WhatsAppIcon } from '@/components/WhatsAppIcon';
import { GYM_DETAILS } from '@/lib/data';

export default function FloatingContactButtons() {
  return (
    <aside
      aria-label="Quick contact shortcuts"
      className="fixed bottom-6 right-4 sm:right-6 z-40 flex flex-col items-end gap-3 select-none"
    >
      {/* WhatsApp Floating Action Button */}
      <a
        href={GYM_DETAILS.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat directly with Revive Fitness on WhatsApp"
        className="group relative flex items-center shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-zinc-950 rounded-full"
      >
        {/* Tooltip on hover */}
        <span className="hidden md:inline-block pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-200 absolute right-16 bg-zinc-900/95 backdrop-blur-md text-emerald-400 text-xs font-semibold px-3 py-1.5 rounded-lg border border-emerald-500/30 whitespace-nowrap shadow-xl">
          Chat on WhatsApp
        </span>

        {/* Pulse effect ring */}
        <span className="absolute -inset-1 rounded-full bg-emerald-500/30 animate-ping opacity-60"></span>

        {/* Core button */}
        <div className="relative w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg shadow-emerald-950/60 border-2 border-white/20">
          <WhatsAppIcon className="w-7 h-7" />
        </div>
      </a>

      {/* Direct Call Floating Action Button */}
      <a
        href={`tel:${GYM_DETAILS.phoneRaw}`}
        aria-label={`Call Revive Fitness at ${GYM_DETAILS.phoneDisplay}`}
        className="group relative flex items-center shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 focus:ring-offset-zinc-950 rounded-full"
      >
        {/* Tooltip on hover */}
        <span className="hidden md:inline-block pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-200 absolute right-16 bg-zinc-900/95 backdrop-blur-md text-amber-400 text-xs font-semibold px-3 py-1.5 rounded-lg border border-zinc-800 whitespace-nowrap shadow-xl">
          Call {GYM_DETAILS.phoneDisplay}
        </span>

        {/* Core button */}
        <div className="relative w-12 h-12 rounded-full bg-zinc-900 hover:bg-zinc-800 text-amber-400 flex items-center justify-center border border-zinc-700/80 shadow-lg shadow-black/60">
          <Phone className="w-5 h-5 stroke-[2.2]" />
        </div>
      </a>
    </aside>
  );
}
