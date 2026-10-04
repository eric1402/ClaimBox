// src/components/HowItWorks.jsx
import React from 'react';
import { Plus, Folder, Shield, Check } from 'lucide-react';
import { Pill } from './ui/Pill';
import { Reveal } from './ui/Reveal';

export const HowItWorks = () => {
  const steps = [
    {
      step: '1',
      icon: <Plus className="w-5 h-5 text-white" />,
      title: 'Add Purchase',
      description: 'Enter product details, purchase date, price and warranty information.',
    },
    {
      step: '2',
      icon: <Folder className="w-5 h-5 text-white" />,
      title: 'Organize',
      description: 'Upload invoices and important documents for each purchase.',
    },
    {
      step: '3',
      icon: <Shield className="w-5 h-5 text-white" />,
      title: 'Track Warranty',
      description: 'Get automatic warranty status and expiry notifications.',
    },
    {
      step: '4',
      icon: <Check className="w-5 h-5 text-white" strokeWidth={2.5} />,
      title: 'Claim with Ease',
      description: 'Access all details when you need to make a warranty claim.',
    },
  ];

  return (
    <section id="how-it-works" className="bg-[#0A0A0A] text-[#F5F1EA] py-20 lg:py-28 border-b border-white/8 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          {/* Left Column: Heading & Subtitle (4 to 5 cols) */}
          <div className="lg:col-span-4 text-left space-y-4">
            <Reveal delay={100}>
              <Pill variant="dark" icon="✦">
                HOW CLAIMBOX WORKS
              </Pill>
            </Reveal>

            <Reveal delay={200}>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-[1.15]">
                Manage your purchases <br />
                in 4 simple steps.
              </h2>
            </Reveal>

            <Reveal delay={300}>
              <p className="text-sm sm:text-base text-neutral-400 font-normal leading-relaxed max-w-sm">
                A simple and effective way to keep track of your purchases, warranties and documents.
              </p>
            </Reveal>
          </div>

          {/* Right Column: 4 Step Cards (8 cols) */}
          <div className="lg:col-span-8">
            <Reveal delay={300} direction="up">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {steps.map((item) => (
                  <div
                    key={item.step}
                    className="flex flex-col items-start text-left p-4 rounded-2xl bg-[#121212] border border-white/8 hover:border-[#D4A95C]/40 transition-all duration-300 group"
                  >
                    {/* Header with White Number Badge & Dark Icon Tile */}
                    <div className="flex items-center gap-2 mb-4">
                      {/* Number circle badge */}
                      <div className="w-6 h-6 rounded-full bg-white text-black font-bold text-xs flex items-center justify-center shadow-sm">
                        {item.step}
                      </div>

                      {/* Dark icon tile */}
                      <div className="w-10 h-10 rounded-xl bg-[#1A1A1A] border border-white/10 flex items-center justify-center text-white group-hover:scale-105 group-hover:border-[#D4A95C]/30 transition-all">
                        {item.icon}
                      </div>
                    </div>

                    {/* Step Title & Description */}
                    <h3 className="text-sm font-bold text-white mb-1.5 tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-xs text-neutral-400 leading-relaxed font-normal">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
