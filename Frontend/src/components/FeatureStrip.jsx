// src/components/FeatureStrip.jsx
import React from 'react';
import { Shield, Clock, FileText, BarChart3 } from 'lucide-react';
import { Reveal } from './ui/Reveal';

export const FeatureStrip = () => {
  const features = [
    {
      icon: <Shield className="w-5 h-5 text-[#D4A95C]" />,
      title: 'Purchase Vault',
      description: 'Keep every purchase organized with complete details.',
    },
    {
      icon: <Clock className="w-5 h-5 text-[#D4A95C]" />,
      title: 'Warranty Tracking',
      description: 'Know exactly when your warranty expires.',
    },
    {
      icon: <FileText className="w-5 h-5 text-[#D4A95C]" />,
      title: 'Invoice Storage',
      description: 'Store invoices, bills and warranty cards securely.',
    },
    {
      icon: <BarChart3 className="w-5 h-5 text-[#D4A95C]" />,
      title: 'Smart Overview',
      description: 'Get a clear view of what needs your attention.',
    },
  ];

  return (
    <section id="features" className="bg-[#FFFFFF] dark:bg-[#111111] border-b border-[#ECECE8] dark:border-white/8 pt-12 sm:pt-16 pb-10 transition-colors relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-[#ECECE8] dark:divide-white/8">
          {features.map((item, idx) => (
            <div 
              key={item.title}
              className={`py-4 sm:py-2 px-3 sm:px-6 flex items-start gap-4 transition-all duration-300 hover:translate-y-[-2px] ${
                idx === 0 ? 'sm:pl-0' : ''
              }`}
            >
              {/* Beige/gold-tinted rounded-square icon tile */}
              <div className="w-12 h-12 rounded-xl bg-[#F7F3EB] dark:bg-[#1D1B16] border border-[#D4A95C]/25 flex items-center justify-center shrink-0 shadow-xs">
                {item.icon}
              </div>

              <div className="text-left space-y-1">
                <h3 className="text-sm font-bold tracking-tight text-neutral-900 dark:text-neutral-100">
                  {item.title}
                </h3>
                <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureStrip;
