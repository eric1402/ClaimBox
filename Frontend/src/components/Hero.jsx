// src/components/Hero.jsx
import React from 'react';
import { Play, Check, Users, Box, Star } from 'lucide-react';
import { Pill } from './ui/Pill';
import { Button } from './ui/Button';
import { Reveal } from './ui/Reveal';
import { DashboardMockup } from './DashboardMockup';
import { HeroBackgroundStreaks } from './ui/SVGs';

export const Hero = () => {
  const scrollToDemo = (e) => {
    e.preventDefault();
    const showcase = document.getElementById('showcase');
    if (showcase) {
      showcase.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative bg-[#0A0A0A] text-[#F5F1EA] pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden border-b border-white/6">
      {/* Background SVG Streaks */}
      <HeroBackgroundStreaks />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 xl:gap-12 items-center">
          {/* Left Column: Headline and CTAs (5 to 6 cols) */}
          <div className="lg:col-span-6 xl:col-span-5 space-y-6 text-left min-w-0 relative z-10">
            <Reveal delay={100}>
              <Pill variant="dark" icon="★" className="mb-2">
                Your Purchases. Always Organized.
              </Pill>
            </Reveal>

            <Reveal delay={200}>
              <h1 className="text-4xl sm:text-5xl lg:text-[48px] xl:text-[60px] font-extrabold tracking-tight text-white leading-[1.08] text-balance">
                <span className="block">Everything you buy,</span>
                <span className="block">always <span className="text-[#D4A95C]">with you.</span></span>
              </h1>
            </Reveal>

            <Reveal delay={300}>
              <p className="text-base sm:text-lg text-neutral-400 font-normal leading-relaxed max-w-xl">
                Store your purchases, track warranties, and keep all invoices and important documents in one secure place. Never lose a receipt again.
              </p>
            </Reveal>

            {/* Buttons Row */}
            <Reveal delay={400}>
              <div className="flex flex-wrap items-center gap-3.5 pt-2">
                <Button 
                  to="/register" 
                  variant="primary-white" 
                  size="lg" 
                  arrow
                  className="shadow-xl shadow-white/5"
                >
                  Get Started Free
                </Button>

                <Button
                  onClick={scrollToDemo}
                  variant="outline-dark"
                  size="lg"
                  icon={<Play className="w-4 h-4 fill-white/80 text-white" />}
                >
                  Watch Demo
                </Button>
              </div>
            </Reveal>

            {/* Trust Row with Checks */}
            <Reveal delay={500}>
              <div className="flex flex-wrap items-center gap-y-2 gap-x-5 text-xs text-neutral-400 pt-3">
                <div className="flex items-center gap-1.5">
                  <span className="w-4 h-4 rounded-full bg-[#D4A95C]/15 text-[#D4A95C] flex items-center justify-center text-[10px] font-bold">
                    ✓
                  </span>
                  <span>Free to start</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-4 h-4 rounded-full bg-[#D4A95C]/15 text-[#D4A95C] flex items-center justify-center text-[10px] font-bold">
                    ✓
                  </span>
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-4 h-4 rounded-full bg-[#D4A95C]/15 text-[#D4A95C] flex items-center justify-center text-[10px] font-bold">
                    ✓
                  </span>
                  <span>Your data stays private</span>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: 3D Tilted Laptop Frame (7 cols) */}
          <div className="lg:col-span-6 xl:col-span-7 relative z-0 min-w-0 w-full">
            <Reveal delay={250} direction="left">
              <div className="perspective-1000 w-full">
                <div className="laptop-tilt">
                  <div className="animate-subtle-float">
                    <DashboardMockup />
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* 3 Dark Glass Stat Cards Overlapping the Hero Bottom Edge (Left side) */}
        <div className="mt-14 lg:mt-16 -mb-8 lg:-mb-12 relative z-20">
          <Reveal delay={600} direction="up">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-xl">
              {/* Card 1: 500+ Happy Users */}
              <div className="glass-dark rounded-2xl p-4 flex items-center gap-3.5 hover:border-[#D4A95C]/40 transition-all duration-300 shadow-2xl">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#D4A95C] shrink-0">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xl font-bold tracking-tight text-white">500+</div>
                  <div className="text-xs text-neutral-400 font-medium">Happy Users</div>
                </div>
              </div>

              {/* Card 2: 2,000+ Purchases Tracked */}
              <div className="glass-dark rounded-2xl p-4 flex items-center gap-3.5 hover:border-[#D4A95C]/40 transition-all duration-300 shadow-2xl">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#D4A95C] shrink-0">
                  <Box className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xl font-bold tracking-tight text-white">2,000+</div>
                  <div className="text-xs text-neutral-400 font-medium">Purchases Tracked</div>
                </div>
              </div>

              {/* Card 3: 99% Would Recommend */}
              <div className="glass-dark rounded-2xl p-4 flex items-center gap-3.5 hover:border-[#D4A95C]/40 transition-all duration-300 shadow-2xl">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#D4A95C] shrink-0">
                  <Star className="w-5 h-5 fill-[#D4A95C]/20 text-[#D4A95C]" />
                </div>
                <div>
                  <div className="text-xl font-bold tracking-tight text-white">99%</div>
                  <div className="text-xs text-neutral-400 font-medium">Would Recommend</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Hero;
