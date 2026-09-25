'use client';

import { useState } from 'react';
import { X, CheckCircle2, Phone, Dumbbell, Calendar, Clock, User, ArrowRight } from 'lucide-react';
import { WhatsAppIcon } from '@/components/WhatsAppIcon';
import { GYM_DETAILS, SERVICES_DATA } from '@/lib/data';

interface BookVisitModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
}

export default function BookVisitModal({
  isOpen,
  onClose,
  preselectedService,
}: BookVisitModalProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState(preselectedService || 'CrossFit');
  const [slot, setSlot] = useState('Morning (6:00 AM – 10:00 AM)');
  const [date, setDate] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;
    setIsSubmitted(true);
  };

  const getWhatsAppBookingUrl = () => {
    const text = `Hi Revive Fitness! I want to book a gym visit at Seawoods.%0A%0A*Name:* ${encodeURIComponent(
      name
    )}%0A*Phone:* ${encodeURIComponent(phone)}%0A*Service Interest:* ${encodeURIComponent(
      service
    )}%0A*Preferred Slot:* ${encodeURIComponent(slot)}${
      date ? `%0A*Preferred Date:* ${encodeURIComponent(date)}` : ''
    }`;
    return `https://wa.me/${GYM_DETAILS.whatsappRaw}?text=${text}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg rounded-3xl bg-zinc-950 border border-zinc-800 p-6 sm:p-8 shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <div>
            {/* Header */}
            <div className="flex items-center gap-2.5 mb-2">
              <div className="w-8 h-8 rounded-lg bg-amber-400 text-zinc-950 flex items-center justify-center font-black">
                <Dumbbell className="w-4 h-4" />
              </div>
              <span className="text-xs uppercase font-bold tracking-widest text-amber-400">
                REVIVE FITNESS · SEAWOODS
              </span>
            </div>

            <h3 className="text-2xl font-black text-white uppercase tracking-tight">
              Book a Free Gym Visit
            </h3>
            <p className="mt-1.5 text-xs sm:text-sm text-zinc-400">
              Schedule your personalized facility tour, meet our trainers, and experience the energy of our club in Sector 40.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              {/* Name */}
              <div>
                <label className="block text-xs font-semibold uppercase text-zinc-300 tracking-wider mb-1.5">
                  Your Full Name <span className="text-amber-400">*</span>
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-zinc-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Rahul Patil"
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-amber-400 transition-colors"
                  />
                </div>
              </div>

              {/* Phone */}
              <div>
                <label className="block text-xs font-semibold uppercase text-zinc-300 tracking-wider mb-1.5">
                  Phone Number (WhatsApp) <span className="text-amber-400">*</span>
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-zinc-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g. 98200 12345"
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-amber-400 transition-colors"
                  />
                </div>
              </div>

              {/* Service Interest */}
              <div>
                <label className="block text-xs font-semibold uppercase text-zinc-300 tracking-wider mb-1.5">
                  Primary Interest
                </label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-sm text-white focus:outline-none focus:border-amber-400 transition-colors"
                >
                  <option value="CrossFit">CrossFit & Functional Training</option>
                  <option value="Weight Training">Weight Training & Strength</option>
                  <option value="Cycling">Indoor Cycling & Spin</option>
                  <option value="Personal Training">1-on-1 Personal Training</option>
                  <option value="Nutrition Consulting">Nutrition Consulting</option>
                  <option value="General Gym Tour">General Gym Walk-through</option>
                </select>
              </div>

              {/* Time slot & Date */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold uppercase text-zinc-300 tracking-wider mb-1.5">
                    Preferred Time Slot
                  </label>
                  <select
                    value={slot}
                    onChange={(e) => setSlot(e.target.value)}
                    className="w-full px-3 py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-xs sm:text-sm text-white focus:outline-none focus:border-amber-400"
                  >
                    <option value="Morning (6:00 AM – 10:00 AM)">Morning (6 AM – 10 AM)</option>
                    <option value="Afternoon (12:00 PM – 4:00 PM)">Afternoon (12 PM – 4 PM)</option>
                    <option value="Evening (5:00 PM – 10:00 PM)">Evening (5 PM – 10 PM)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase text-zinc-300 tracking-wider mb-1.5">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-xs sm:text-sm text-white focus:outline-none focus:border-amber-400"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-4 px-6 rounded-xl bg-amber-400 hover:bg-amber-300 text-zinc-950 font-black text-sm uppercase tracking-wider transition-all shadow-xl shadow-amber-400/20 cursor-pointer flex items-center justify-center gap-2"
                >
                  <span>Confirm Visit Request</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <p className="text-[11px] text-zinc-400 text-center">
                We respect your privacy. No spam. You will also get a 1-tap WhatsApp confirmation.
              </p>
            </form>
          </div>
        ) : (
          <div className="text-center py-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h3 className="text-2xl font-black text-white uppercase">
              Visit Request Received!
            </h3>

            <p className="mt-2 text-sm text-zinc-300">
              Thank you, <span className="font-semibold text-white">{name}</span>! Our team at Revive Fitness Seawoods has noted your request for <span className="text-amber-400 font-semibold">{service}</span>.
            </p>

            <div className="mt-5 p-4 rounded-2xl bg-zinc-900 border border-zinc-800 text-xs text-left space-y-2 text-zinc-300">
              <div className="flex justify-between">
                <span className="text-zinc-500">Contact:</span>
                <span className="font-medium text-white">{phone}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-500">Slot:</span>
                <span className="font-medium text-white">{slot}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-500">Location:</span>
                <span className="font-medium text-amber-400">1st Floor, Jairam Tukaram Tandel Marg</span>
              </div>
            </div>

            {/* Direct Instant WhatsApp connect */}
            <div className="mt-6 flex flex-col gap-3">
              <a
                href={getWhatsAppBookingUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-emerald-950/40"
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span>Send via WhatsApp for Instant VIP Entry</span>
              </a>

              <a
                href={`tel:${GYM_DETAILS.phoneRaw}`}
                className="w-full py-3 px-4 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-200 font-semibold text-xs border border-zinc-800 flex items-center justify-center gap-2"
              >
                <Phone className="w-3.5 h-3.5 text-amber-400" />
                <span>Call Directly: {GYM_DETAILS.phoneDisplay}</span>
              </a>
            </div>

            <button
              onClick={() => {
                setIsSubmitted(false);
                onClose();
              }}
              className="mt-5 text-xs text-zinc-500 hover:text-zinc-300 underline"
            >
              Done & Close
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
