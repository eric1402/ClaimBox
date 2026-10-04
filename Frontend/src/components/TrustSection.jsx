// src/components/TrustSection.jsx
import React from 'react';
import { Star } from 'lucide-react';
import { Pill } from './ui/Pill';
import { Reveal } from './ui/Reveal';
import { MOCK_REVIEWS } from '../data/mock';

export const TrustSection = () => {
  const review = MOCK_REVIEWS[0];

  return (
    <section id="trust" className="bg-[#FFFFFF] dark:bg-[#0E0E0E] py-20 lg:py-24 border-b border-[#ECECE8] dark:border-white/8 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-left space-y-3 mb-12">
          <Reveal delay={100}>
            <Pill variant="light" icon="✦">
              TRUSTED BY MANY
            </Pill>
          </Reveal>

          <Reveal delay={200}>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-white leading-[1.15]">
              A simple solution <br />
              for a common problem.
            </h2>
          </Reveal>
        </div>

        {/* Stats Row & Testimonial Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* 3 Gold Stats (7 cols) */}
          <div className="lg:col-span-7">
            <Reveal delay={300} direction="up">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
                {/* Stat 1 */}
                <div className="space-y-1">
                  <div className="text-4xl sm:text-5xl font-extrabold text-[#D4A95C] tracking-tight">
                    500+
                  </div>
                  <div className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 font-medium">
                    Users keeping track
                  </div>
                </div>

                {/* Stat 2 */}
                <div className="space-y-1">
                  <div className="text-4xl sm:text-5xl font-extrabold text-[#D4A95C] tracking-tight">
                    2,000+
                  </div>
                  <div className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 font-medium">
                    Purchases stored
                  </div>
                </div>

                {/* Stat 3 */}
                <div className="space-y-1">
                  <div className="text-4xl sm:text-5xl font-extrabold text-[#D4A95C] tracking-tight">
                    99%
                  </div>
                  <div className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 font-medium">
                    Would recommend
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Testimonial Card (5 cols) */}
          <div className="lg:col-span-5">
            <Reveal delay={400} direction="left">
              <div className="bg-[#FAFAF8] dark:bg-[#141414] border border-[#ECECE8] dark:border-white/10 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 text-left">
                <div className="flex items-start gap-4 mb-4">
                  {/* Avatar SVG/Photo */}
                  <div className="w-12 h-12 rounded-full overflow-hidden shrink-0 border-2 border-[#D4A95C]/40 bg-neutral-200">
                    <img 
                      src={review.avatar} 
                      alt={review.name} 
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>

                  <div className="flex-1">
                    <p className="text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 italic leading-relaxed">
                      "{review.quote}"
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-[#ECECE8] dark:border-white/8">
                  <div>
                    <h4 className="text-xs font-bold text-neutral-900 dark:text-white">{review.name}</h4>
                    <p className="text-[11px] text-neutral-500">{review.role}</p>
                  </div>

                  {/* 5 Gold Stars */}
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#D4A95C] text-[#D4A95C]" />
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
