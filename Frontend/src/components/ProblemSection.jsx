// src/components/ProblemSection.jsx
import React from 'react';
import { ArrowRight, ArrowDown } from 'lucide-react';
import { Pill } from './ui/Pill';
import { Reveal } from './ui/Reveal';
import { 
  ProblemAppsIllustration, 
  ProblemStressedPersonIllustration, 
  ProblemMissedDeadlineIllustration, 
  ProblemStressMagnifierIllustration 
} from './ui/SVGs';

export const ProblemSection = () => {
  const steps = [
    {
      title: 'Receipts in different apps',
      illustration: <ProblemAppsIllustration />,
    },
    {
      title: 'Hard to find when needed',
      illustration: <ProblemStressedPersonIllustration />,
    },
    {
      title: 'Missed warranty deadlines',
      illustration: <ProblemMissedDeadlineIllustration />,
    },
    {
      title: 'Unnecessary stress and last-minute hassle',
      illustration: <ProblemStressMagnifierIllustration />,
    },
  ];

  return (
    <section className="bg-[#FAFAF8] dark:bg-[#0C0C0C] py-20 lg:py-28 border-b border-[#ECECE8] dark:border-white/8 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Heading & Description (4 to 5 cols) */}
          <div className="lg:col-span-5 text-left space-y-4">
            <Reveal delay={100}>
              <Pill variant="light" icon="✦">
                THE PROBLEM
              </Pill>
            </Reveal>

            <Reveal delay={200}>
              <h2 className="text-3xl sm:text-4xl xl:text-5xl font-extrabold tracking-tight text-neutral-900 dark:text-white leading-[1.12]">
                Important details <br />
                get lost.
              </h2>
            </Reveal>

            <Reveal delay={300}>
              <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 font-normal leading-relaxed max-w-md">
                You buy something, and later when you need the invoice or warranty details, you can't find it. It's buried in emails, WhatsApp chats or your gallery.
              </p>
            </Reveal>
          </div>

          {/* Right Column: 4 Connected Cards (7 cols) */}
          <div className="lg:col-span-7">
            <Reveal delay={300} direction="left">
              <div className="flex flex-col md:flex-row items-center justify-between gap-3 sm:gap-2">
                {steps.map((step, idx) => (
                  <React.Fragment key={step.title}>
                    {/* The Card */}
                    <div className="w-full md:w-36 lg:w-40 bg-white dark:bg-[#141414] border border-[#ECECE8] dark:border-white/8 rounded-2xl p-4 flex flex-col items-center justify-between text-center min-h-[175px] shadow-sm hover:shadow-md hover:border-[#D4A95C]/40 transition-all duration-300">
                      <div className="flex-1 flex items-center justify-center py-2">
                        {step.illustration}
                      </div>
                      <p className="text-[12px] font-semibold text-neutral-800 dark:text-neutral-200 mt-2 leading-tight">
                        {step.title}
                      </p>
                    </div>

                    {/* Arrow between cards */}
                    {idx < steps.length - 1 && (
                      <div className="flex items-center justify-center text-neutral-400 dark:text-neutral-500 py-1 md:py-0 shrink-0">
                        {/* Desktop Arrow Right */}
                        <ArrowRight className="hidden md:block w-4 h-4 text-[#D4A95C]/70" />
                        {/* Mobile Arrow Down */}
                        <ArrowDown className="md:hidden w-4 h-4 text-[#D4A95C]/70" />
                      </div>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
