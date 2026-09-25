'use client';

import Link from 'next/link';
import { Dumbbell, Phone, MapPin, Clock, Star, ArrowUp } from 'lucide-react';
import { WhatsAppIcon } from '@/components/WhatsAppIcon';
import { GYM_DETAILS, SERVICES_DATA } from '@/lib/data';

interface FooterProps {
  onOpenBookModal: (service?: string) => void;
}

export default function Footer({ onOpenBookModal }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-zinc-950 border-t border-zinc-900 text-zinc-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="inline-flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-amber-400 flex items-center justify-center text-zinc-950 font-black shadow-lg shadow-amber-400/20">
                <Dumbbell className="w-6 h-6 stroke-[2.5]" />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1">
                  <span className="text-xl font-black tracking-wider text-white uppercase">REVIVE</span>
                  <span className="text-xl font-black tracking-wider text-amber-400 uppercase">FITNESS</span>
                </div>
                <span className="text-[10px] tracking-widest text-zinc-400 uppercase font-semibold">
                  Seawoods · Navi Mumbai
                </span>
              </div>
            </Link>

            <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              &ldquo;Train Strong. Live Stronger.&rdquo; Premier fitness destination in Seawoods West featuring CrossFit, heavy strength equipment, spin studio, personal coaching, and clinical nutrition consulting.
            </p>

            <div className="flex items-center gap-2 pt-1">
              <div className="flex items-center text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-white font-bold text-xs">4.9 / 5.0</span>
              <span className="text-zinc-500">·</span>
              <span className="text-zinc-400">192 Verified Reviews</span>
            </div>
          </div>

          {/* Quick Disciplines */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase font-bold text-white tracking-widest">
              Training Disciplines
            </h4>
            <ul className="space-y-2 text-zinc-400">
              {SERVICES_DATA.map((service) => (
                <li key={service.id}>
                  <button
                    onClick={() => onOpenBookModal(service.name)}
                    className="hover:text-amber-400 transition-colors text-left flex items-center gap-1.5 cursor-pointer"
                  >
                    <span className="w-1 h-1 rounded-full bg-amber-400"></span>
                    <span>{service.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours & Schedule */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs uppercase font-bold text-white tracking-widest">
              Operating Hours
            </h4>
            <div className="space-y-2 text-zinc-300">
              <div>
                <div className="text-white font-semibold">Mon – Sat</div>
                <div className="text-zinc-400">6:00 AM – 10:30 PM</div>
              </div>
              <div className="pt-1">
                <div className="text-white font-semibold">Sunday</div>
                <div className="text-zinc-400">7:00 AM – 1:00 PM</div>
              </div>
              <div className="text-[11px] text-emerald-400 font-medium pt-1">
                Continuous Day Access
              </div>
            </div>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase font-bold text-white tracking-widest">
              Visit or Contact
            </h4>
            <div className="space-y-2.5 text-zinc-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span className="leading-snug">
                  1st Floor, REVIVE FITNESS, 51 Jairam Tukaram Tandel Marg, near Grand Central Mall, Seawoods West, Sector 40, Navi Mumbai 400706
                </span>
              </div>

              <div className="flex items-center gap-2 pt-1">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a
                  href={`tel:${GYM_DETAILS.phoneRaw}`}
                  className="text-white font-bold hover:text-amber-400 transition-colors"
                >
                  {GYM_DETAILS.phoneDisplay}
                </a>
              </div>

              <div className="pt-2 flex items-center gap-2">
                <a
                  href={GYM_DETAILS.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 text-xs font-semibold flex items-center gap-1.5 hover:bg-emerald-500/25 transition-colors"
                >
                  <WhatsAppIcon className="w-3.5 h-3.5" />
                  <span>WhatsApp Helpdesk</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-8 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-zinc-500 text-[11px]">
          <div>
            © {new Date().getFullYear()} REVIVE FITNESS. All rights reserved. Seawoods, Navi Mumbai.
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 text-zinc-400 hover:text-white transition-colors cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
