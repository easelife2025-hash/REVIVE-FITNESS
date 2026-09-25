'use client';

import { Phone, MessageSquare, Calendar, Navigation } from 'lucide-react';
import { GYM_DETAILS } from '@/lib/data';

interface FloatingMobileBarProps {
  onOpenBookModal: () => void;
}

export default function FloatingMobileBar({ onOpenBookModal }: FloatingMobileBarProps) {
  return (
    <div className="fixed bottom-0 inset-x-0 z-40 lg:hidden bg-zinc-950/95 backdrop-blur-lg border-t border-zinc-800 p-2.5 pb-safe shadow-2xl">
      <div className="grid grid-cols-4 gap-1.5 max-w-md mx-auto">
        
        {/* Call Button */}
        <a
          href={`tel:${GYM_DETAILS.phoneRaw}`}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-200 active:scale-95 transition-transform"
        >
          <Phone className="w-4 h-4 text-amber-400" />
          <span className="text-[10px] font-bold mt-1 uppercase tracking-tight">Call</span>
        </a>

        {/* WhatsApp Button */}
        <a
          href={GYM_DETAILS.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-emerald-950/70 border border-emerald-500/40 text-emerald-400 active:scale-95 transition-transform"
        >
          <MessageSquare className="w-4 h-4" />
          <span className="text-[10px] font-bold mt-1 uppercase tracking-tight">WhatsApp</span>
        </a>

        {/* Book Visit Button */}
        <button
          onClick={onOpenBookModal}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-amber-400 text-zinc-950 font-bold active:scale-95 transition-transform shadow-md shadow-amber-400/20"
        >
          <Calendar className="w-4 h-4 stroke-[2.5]" />
          <span className="text-[10px] font-black mt-1 uppercase tracking-tight">Visit</span>
        </button>

        {/* Directions Button */}
        <a
          href={GYM_DETAILS.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-200 active:scale-95 transition-transform"
        >
          <Navigation className="w-4 h-4 text-amber-400" />
          <span className="text-[10px] font-bold mt-1 uppercase tracking-tight">Directions</span>
        </a>

      </div>
    </div>
  );
}
