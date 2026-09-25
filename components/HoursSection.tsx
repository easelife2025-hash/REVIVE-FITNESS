'use client';

import { useState, useEffect } from 'react';
import { Clock, CheckCircle2, AlertCircle, Sun, Moon, Sparkles, ArrowRight } from 'lucide-react';
import { GYM_DETAILS } from '@/lib/data';

interface HoursSectionProps {
  onOpenBookModal: () => void;
}

export default function HoursSection({ onOpenBookModal }: HoursSectionProps) {
  const [isOpenNow, setIsOpenNow] = useState<boolean | null>(null);
  const [statusMessage, setStatusMessage] = useState<string>('Checking live gym status...');

  useEffect(() => {
    const calculateStatus = () => {
      // Calculate current Indian Standard Time (UTC + 5 hours 30 minutes)
      const now = new Date();
      const utc = now.getTime() + now.getTimezoneOffset() * 60000;
      const istTime = new Date(utc + 3600000 * 5.5);

      const day = istTime.getDay(); // 0 is Sunday, 1 is Monday ... 6 is Saturday
      const hours = istTime.getHours();
      const minutes = istTime.getMinutes();
      const currentDecimal = hours + minutes / 60;

      if (day === 0) {
        // Sunday: 7:00 AM to 1:00 PM (7.0 to 13.0)
        if (currentDecimal >= 7.0 && currentDecimal < 13.0) {
          setIsOpenNow(true);
          setStatusMessage('Open today (Sunday) until 1:00 PM');
        } else if (currentDecimal < 7.0) {
          setIsOpenNow(false);
          setStatusMessage('Opens today at 7:00 AM');
        } else {
          setIsOpenNow(false);
          setStatusMessage('Closed for Sunday afternoon · Reopens Monday at 6:00 AM');
        }
      } else {
        // Mon - Sat: 6:00 AM to 10:30 PM (6.0 to 22.5)
        if (currentDecimal >= 6.0 && currentDecimal < 22.5) {
          setIsOpenNow(true);
          setStatusMessage('Open right now · Closes at 10:30 PM tonight');
        } else if (currentDecimal < 6.0) {
          setIsOpenNow(false);
          setStatusMessage('Opens today at 6:00 AM sharp');
        } else {
          setIsOpenNow(false);
          setStatusMessage(
            day === 6
              ? 'Closed for the night · Reopens Sunday at 7:00 AM'
              : 'Closed for the night · Reopens tomorrow at 6:00 AM'
          );
        }
      }
    };

    calculateStatus();
    const interval = setInterval(calculateStatus, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hours" className="py-20 lg:py-28 bg-zinc-950 border-t border-zinc-900 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-widest text-amber-400 font-bold">
            Training Schedule
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight mt-1">
            Opening Hours
          </h2>
          <p className="mt-4 text-sm sm:text-base text-zinc-400">
            Engineered around the routines of busy working professionals, early morning athletes, and evening lifters in Navi Mumbai.
          </p>
        </div>

        {/* Live Status Header Banner */}
        <div className="max-w-3xl mx-auto mb-10">
          <div className="p-4 sm:p-5 rounded-2xl bg-zinc-900/90 border border-zinc-800 flex items-center justify-between gap-4 shadow-xl">
            <div className="flex items-center gap-3">
              <span className="relative flex h-3.5 w-3.5">
                {isOpenNow ? (
                  <>
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500"></span>
                  </>
                ) : (
                  <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-amber-500"></span>
                )}
              </span>

              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-white">
                    {isOpenNow ? 'GYM IS CURRENTLY OPEN' : 'GYM IS CURRENTLY CLOSED'}
                  </span>
                  <span className="text-[10px] text-zinc-400 font-mono">IST (Seawoods)</span>
                </div>
                <p className="text-xs sm:text-sm text-zinc-300 mt-0.5 font-medium">
                  {statusMessage}
                </p>
              </div>
            </div>

            <button
              onClick={onOpenBookModal}
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-amber-400 hover:bg-amber-300 text-zinc-950 font-bold text-xs uppercase tracking-wider transition-all"
            >
              <span>Book Visit</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Timings Schedule Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          
          {/* Weekday Schedule Card */}
          <div className="rounded-3xl bg-zinc-900/70 border border-zinc-800 p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 pointer-events-none opacity-10">
              <Clock className="w-32 h-32 text-amber-400" />
            </div>

            <div>
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
                  Monday to Saturday
                </span>
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-amber-400/10 text-amber-400 border border-amber-400/20">
                  Full Access
                </span>
              </div>

              <div className="mt-4 text-3xl sm:text-4xl font-black text-white tracking-tight">
                6:00 AM – 10:30 PM
              </div>

              <p className="mt-2 text-xs sm:text-sm text-zinc-400">
                Continuous 16.5 hours of training access daily. Perfect for early birds before office or late evening strength sessions.
              </p>

              <div className="mt-6 space-y-2 text-xs text-zinc-300">
                <div className="flex items-center justify-between py-1.5 border-b border-zinc-800">
                  <span className="text-zinc-400">Morning Session:</span>
                  <span className="font-semibold text-white">6:00 AM – 11:30 AM</span>
                </div>
                <div className="flex items-center justify-between py-1.5 border-b border-zinc-800">
                  <span className="text-zinc-400">Afternoon (Quiet Hours):</span>
                  <span className="font-semibold text-white">12:00 PM – 4:00 PM</span>
                </div>
                <div className="flex items-center justify-between py-1.5">
                  <span className="text-zinc-400">Evening Energy Rush:</span>
                  <span className="font-semibold text-white">5:00 PM – 10:30 PM</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-zinc-800 flex items-center gap-2 text-xs text-zinc-400">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Coaches and floor staff available throughout operating hours</span>
            </div>
          </div>

          {/* Sunday Schedule Card */}
          <div className="rounded-3xl bg-zinc-900/70 border border-zinc-800 p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 pointer-events-none opacity-10">
              <Sun className="w-32 h-32 text-amber-400" />
            </div>

            <div>
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
                  Sunday Morning
                </span>
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-emerald-400/10 text-emerald-400 border border-emerald-400/20">
                  Weekend Session
                </span>
              </div>

              <div className="mt-4 text-3xl sm:text-4xl font-black text-white tracking-tight">
                7:00 AM – 1:00 PM
              </div>

              <p className="mt-2 text-xs sm:text-sm text-zinc-400">
                Dedicated weekend morning slots for mobility, conditioning, heavy lifting, or spin workouts before spending Sunday with family.
              </p>

              <div className="mt-6 space-y-2 text-xs text-zinc-300">
                <div className="flex items-center justify-between py-1.5 border-b border-zinc-800">
                  <span className="text-zinc-400">Doors Open:</span>
                  <span className="font-semibold text-white">7:00 AM</span>
                </div>
                <div className="flex items-center justify-between py-1.5 border-b border-zinc-800">
                  <span className="text-zinc-400">CrossFit & Cardio:</span>
                  <span className="font-semibold text-white">Open Floor Access</span>
                </div>
                <div className="flex items-center justify-between py-1.5">
                  <span className="text-zinc-400">Sunday Close:</span>
                  <span className="font-semibold text-white">1:00 PM</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-zinc-800 flex items-center gap-2 text-xs text-zinc-400">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Full air conditioning and locker facilities active</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
