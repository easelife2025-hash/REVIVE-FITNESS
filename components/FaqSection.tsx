'use client';

import { useState } from 'react';
import { ChevronDown, Phone } from 'lucide-react';
import { WhatsAppIcon } from '@/components/WhatsAppIcon';
import { FAQS, GYM_DETAILS } from '@/lib/data';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 lg:py-24 bg-zinc-950 border-t border-zinc-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-xs uppercase tracking-widest text-amber-400 font-bold">
            Got Questions?
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tight mt-1">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-sm text-zinc-400">
            Everything you need to know about training at Revive Fitness Seawoods.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-2xl bg-zinc-900/60 border border-zinc-800/80 overflow-hidden transition-colors hover:border-zinc-700"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className="text-sm sm:text-base font-bold text-white">
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-lg bg-zinc-950 flex items-center justify-center text-amber-400 transition-transform duration-200 shrink-0 ${
                      isOpen ? 'rotate-180 bg-amber-400 text-zinc-950' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-zinc-300 leading-relaxed border-t border-zinc-800/40">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions */}
        <div className="mt-12 p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="text-sm font-bold text-white">Still have questions before visiting?</h4>
            <p className="text-xs text-zinc-400 mt-0.5">Call or WhatsApp our reception directly in Seawoods.</p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={`tel:${GYM_DETAILS.phoneRaw}`}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-xs font-semibold text-zinc-200 border border-zinc-700"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>{GYM_DETAILS.phoneDisplay}</span>
            </a>

            <a
              href={GYM_DETAILS.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-500/15 hover:bg-emerald-500/25 text-xs font-semibold text-emerald-400 border border-emerald-500/30"
            >
              <WhatsAppIcon className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
