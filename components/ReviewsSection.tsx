'use client';

import { useState } from 'react';
import { Star, ShieldCheck, CheckCircle2, ExternalLink } from 'lucide-react';
import { WhatsAppIcon } from '@/components/WhatsAppIcon';
import { REAL_REVIEWS, GYM_DETAILS, ReviewItem } from '@/lib/data';

export default function ReviewsSection() {
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const filters = ['All', 'CrossFit', 'Personal Training', 'Facilities', 'Transformation', 'Atmosphere'];

  const filteredReviews =
    activeFilter === 'All'
      ? REAL_REVIEWS
      : REAL_REVIEWS.filter((r) => r.category === activeFilter);

  return (
    <section id="reviews" className="py-20 lg:py-28 bg-zinc-900/50 border-t border-zinc-900 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Real Rating Trust Banner */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-12">
          
          <div className="lg:col-span-7">
            <span className="text-xs uppercase tracking-widest text-amber-400 font-bold">
              Real Member Experiences
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight mt-1">
              4.9★ Verified Rating
            </h2>
            <p className="mt-3 text-sm sm:text-base text-zinc-400">
              Authentic feedback from real fitness enthusiasts and residents of Seawoods West, Sector 40, Navi Mumbai.
            </p>
          </div>

          {/* Trust Score Box */}
          <div className="lg:col-span-5 flex flex-col sm:flex-row sm:items-center sm:justify-end gap-4">
            <div className="p-4 rounded-2xl bg-zinc-950 border border-zinc-800 flex items-center gap-4 shadow-xl">
              <div className="text-center pl-2">
                <div className="text-3xl font-black text-amber-400">4.9</div>
                <div className="flex items-center text-amber-400 mt-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </div>
              <div className="h-10 w-px bg-zinc-800" />
              <div>
                <div className="text-xs font-bold text-white uppercase tracking-wide">
                  192+ Verified Reviews
                </div>
                <div className="text-xs text-zinc-400 mt-0.5">
                  Google & Justdial Ratings
                </div>
                <a
                  href={GYM_DETAILS.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] text-amber-400 hover:text-amber-300 font-medium inline-flex items-center gap-1 mt-1"
                >
                  <span>View Google Profile</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeFilter === filter
                  ? 'bg-amber-400 text-zinc-950 shadow-md shadow-amber-400/20'
                  : 'bg-zinc-950 text-zinc-400 hover:text-white border border-zinc-800 hover:bg-zinc-900'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredReviews.map((review: ReviewItem) => (
            <div
              key={review.id}
              className="rounded-2xl bg-zinc-950/80 border border-zinc-800/90 p-6 flex flex-col justify-between hover:border-zinc-700 transition-all shadow-lg"
            >
              <div>
                {/* Header: Stars & Source */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-0.5 text-amber-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  <span className="text-[11px] text-zinc-400 font-medium px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800">
                    via {review.source}
                  </span>
                </div>

                {/* Testimonial Quote */}
                <p className="text-sm text-zinc-300 leading-relaxed italic">
                  &ldquo;{review.comment}&rdquo;
                </p>
              </div>

              {/* Author Footer */}
              <div className="mt-6 pt-4 border-t border-zinc-800/80 flex items-center justify-between">
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-white">
                    {review.author}
                  </h4>
                  <div className="flex items-center gap-1.5 text-[11px] text-zinc-400 mt-0.5">
                    <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                    <span>{review.timeAgo}</span>
                  </div>
                </div>

                <span className="text-[10px] uppercase font-semibold text-amber-400/80 px-2 py-0.5 rounded bg-amber-400/5 border border-amber-400/20">
                  {review.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Review Highlights Summary */}
        <div className="mt-12 p-6 rounded-2xl bg-zinc-950/60 border border-zinc-800 flex flex-wrap items-center justify-between gap-4 text-xs text-zinc-400">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
            <span>Consistently rated for clean facilities, trainer dedication, CrossFit turf, and location convenience.</span>
          </div>

          <a
            href={GYM_DETAILS.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-400 hover:text-emerald-300 font-semibold inline-flex items-center gap-1.5"
          >
            <WhatsAppIcon className="w-3.5 h-3.5" />
            <span>Connect with our team on WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
}
