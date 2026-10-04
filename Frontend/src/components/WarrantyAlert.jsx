// src/components/WarrantyAlert.jsx
import React from 'react';
import { Bell, Mail, Calendar } from 'lucide-react';
import { Pill } from './ui/Pill';
import { Reveal } from './ui/Reveal';
import { HighFiHeadphones } from './ui/SVGs';
import { MOCK_PURCHASES, formatDaysRemaining } from '../data/mock';

export const WarrantyAlert = () => {
  const item = MOCK_PURCHASES.find(p => p.id === 'sony-wh-ch520') || MOCK_PURCHASES[1];

  return (
    <section className="bg-[#0A0A0A] text-[#F5F1EA] py-20 lg:py-24 border-b border-white/8 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Bell Icon, Pill & Headings (4 to 5 cols) */}
          <div className="lg:col-span-5 text-left space-y-4">
            <Reveal delay={100}>
              <div className="flex items-center gap-3">
                {/* Gold bell tile */}
                <div className="w-12 h-12 rounded-2xl bg-[#D4A95C]/10 border border-[#D4A95C]/30 flex items-center justify-center text-[#D4A95C] shadow-lg shadow-[#D4A95C]/5">
                  <Bell className="w-5 h-5 fill-[#D4A95C]/20" />
                </div>
                <Pill variant="dark" icon="✦">
                  NEVER MISS A WARRANTY
                </Pill>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-[1.15]">
                Get timely alerts for <br />
                expiring warranties.
              </h2>
            </Reveal>

            <Reveal delay={300}>
              <p className="text-sm sm:text-base text-neutral-400 font-normal leading-relaxed max-w-sm">
                ClaimBox helps you stay informed with clear warranty status and upcoming expiry alerts.
              </p>
            </Reveal>
          </div>

          {/* Middle Card: Sony WH-CH520 Expiring Card (4 cols) */}
          <div className="lg:col-span-4">
            <Reveal delay={300} direction="up">
              <div className="bg-[#141414] border border-white/10 rounded-2xl p-5 hover:border-[#D4A95C]/40 transition-all duration-300 shadow-xl flex flex-col justify-between text-left">
                <div className="flex items-center gap-4 mb-4">
                  {/* HighFi Headphones visual */}
                  <div className="w-16 h-16 rounded-xl bg-black/50 border border-white/10 flex items-center justify-center p-1.5 shrink-0">
                    <HighFiHeadphones className="w-12 h-12" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white leading-snug">{item.name}</h3>
                    <p className="text-xs text-neutral-400">{item.subTitle}</p>
                    <span className="inline-block mt-2 text-[10px] font-semibold px-2.5 py-0.5 rounded-full bg-red-500/15 text-red-400 border border-red-500/30">
                      {formatDaysRemaining(item.warrantyExpiry)}
                    </span>
                  </div>
                </div>

                <div className="pt-3 border-t border-white/8 space-y-2 text-xs">
                  <div className="flex items-center justify-between text-neutral-400">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-neutral-500" />
                      Purchase Date:
                    </span>
                    <span className="text-neutral-200 font-medium">{item.purchaseDateFormatted}</span>
                  </div>
                  <div className="flex items-center justify-between text-neutral-400">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-red-400/80" />
                      Warranty Ends:
                    </span>
                    <span className="text-red-400 font-semibold">{item.warrantyExpiryFormatted}</span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Card: Stay Notified (3 cols) */}
          <div className="lg:col-span-3">
            <Reveal delay={400} direction="left">
              <div className="bg-[#141414] border border-white/10 rounded-2xl p-5 hover:border-[#D4A95C]/40 transition-all duration-300 shadow-xl text-left h-full flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#D4A95C]/10 border border-[#D4A95C]/25 flex items-center justify-center text-[#D4A95C] mb-4">
                    <Mail className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2 tracking-tight">Stay notified</h3>
                  <p className="text-xs text-neutral-400 leading-relaxed font-normal">
                    We'll show you which warranties are expiring soon so you never miss an important date.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-white/8 text-[11px] text-[#D4A95C] font-medium flex items-center gap-1">
                  <span>✦ Automatic status updates</span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WarrantyAlert;
