// src/components/FinalCTA.jsx
import React from 'react';
import { Button } from './ui/Button';
import { Reveal } from './ui/Reveal';
import { GlossyCube3D } from './ui/SVGs';

export const FinalCTA = () => {
  return (
    <section id="final-cta" className="bg-[#FAFAF8] dark:bg-[#0C0C0C] py-16 lg:py-24 px-4 sm:px-6 lg:px-8 transition-colors">
      <div className="max-w-7xl mx-auto">
        <Reveal delay={100} direction="up">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0E0E0E] via-[#0A0A0A] to-[#121212] border border-white/10 p-8 sm:p-12 lg:p-16 shadow-2xl">
            {/* Subtle background ambient light */}
            <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#D4A95C]/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
              {/* Left Column: Copy & CTA Button (7 to 8 cols) */}
              <div className="lg:col-span-8 text-left space-y-5">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.12]">
                  Stop searching for receipts. <br />
                  Start <span className="text-[#D4A95C]">keeping them.</span>
                </h2>

                <p className="text-sm sm:text-base text-neutral-400 font-normal leading-relaxed max-w-xl">
                  Join ClaimBox today and keep all your purchases, invoices and warranties in one secure place.
                </p>

                <div className="pt-2 space-y-2.5">
                  <Button to="/register" variant="primary-white" size="lg" arrow className="px-6 py-3 font-semibold shadow-lg">
                    Create your ClaimBox
                  </Button>
                  <p className="text-xs text-neutral-400 font-normal">
                    Free to start. No credit card required.
                  </p>
                </div>
              </div>

              {/* Right Column: 3D Glossy Faceted Geometric Cube (4 to 5 cols) */}
              <div className="lg:col-span-4 flex items-center justify-center lg:justify-end">
                <div className="transform hover:scale-105 hover:rotate-2 transition-transform duration-500">
                  <GlossyCube3D className="w-48 h-48 sm:w-56 sm:h-56" />
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default FinalCTA;
