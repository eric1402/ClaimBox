// src/components/DashboardMockup.jsx
import React from 'react';
import { 
  LayoutDashboard, 
  ShoppingBag, 
  ShieldCheck, 
  FileText, 
  Bell, 
  User, 
  Search,
  ExternalLink,
  ChevronRight,
  ArrowRight
} from 'lucide-react';
import { CubeIcon } from './ui/Logo';
import { 
  MacBookThumbnail, 
  HeadphonesThumbnail, 
  MonitorThumbnail, 
  PhoneThumbnail,
  HighFiHeadphones
} from './ui/SVGs';
import { MOCK_PURCHASES, MOCK_STATS, formatDaysRemaining } from '../data/mock';

export const DashboardMockup = ({ isShowcase = false }) => {
  // Grab the 4 main items
  const purchases = MOCK_PURCHASES.slice(0, 4);
  const expiringItem = MOCK_PURCHASES.find(p => p.id === 'sony-wh-ch520');

  return (
    <div className="w-full text-left font-sans select-none overflow-hidden rounded-2xl bg-[#0F0F0F] border border-white/12 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)]">
      {/* Laptop Top Bezel with Camera Dot */}
      <div className="bg-[#0B0B0B] px-4 py-2 border-b border-white/6 flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]/80" />
        </div>
        <div className="w-1.5 h-1.5 rounded-full bg-neutral-700 mx-auto" />
        <div className="w-12" />
      </div>

      {/* Main Laptop Screen Grid */}
      <div className="flex min-h-[380px] text-[#E5E5E5] bg-[#0A0A0A]">
        {/* Left Sidebar */}
        <aside className="w-40 sm:w-44 border-r border-white/6 p-3 sm:p-4 flex flex-col justify-between shrink-0 bg-[#0C0C0C]">
          <div className="space-y-4">
            {/* App Brand */}
            <div className="flex items-center gap-2 px-1">
              <CubeIcon className="w-4 h-4 text-[#D4A95C]" />
              <span className="text-xs font-bold tracking-tight text-white">ClaimBox</span>
            </div>

            {/* Navigation links */}
            <nav className="space-y-0.5 text-[11px]">
              <div className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg bg-white/10 text-white font-medium">
                <LayoutDashboard className="w-3.5 h-3.5 text-[#D4A95C]" />
                <span>Dashboard</span>
              </div>
              <div className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-neutral-400 hover:text-neutral-200">
                <ShoppingBag className="w-3.5 h-3.5" />
                <span>Purchases</span>
              </div>
              <div className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-neutral-400 hover:text-neutral-200">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Warranties</span>
              </div>
              <div className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-neutral-400 hover:text-neutral-200">
                <FileText className="w-3.5 h-3.5" />
                <span>Documents</span>
              </div>
              <div className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-neutral-400 hover:text-neutral-200">
                <Bell className="w-3.5 h-3.5" />
                <span>Reminders</span>
              </div>
              <div className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-neutral-400 hover:text-neutral-200">
                <User className="w-3.5 h-3.5" />
                <span>Profile</span>
              </div>
            </nav>
          </div>

          <div className="pt-3 border-t border-white/6 text-[10px] text-neutral-500">
            <span className="text-[#D4A95C]">●</span> Sync active
          </div>
        </aside>

        {/* Right Dashboard Area */}
        <main className="flex-1 p-3.5 sm:p-4 flex flex-col justify-between overflow-hidden">
          {/* Top Bar with Search & User Profile */}
          <div className="flex items-center justify-between gap-3 pb-3 border-b border-white/6">
            <div className="relative flex-1 max-w-[210px]">
              <Search className="w-3 h-3 text-neutral-500 absolute left-2.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                readOnly
                placeholder="Search your purchases..."
                className="w-full pl-7 pr-2 py-1 text-[10px] bg-white/5 border border-white/8 rounded-md text-neutral-300 placeholder-neutral-500 focus:outline-none"
              />
            </div>
            
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-amber-500 to-amber-200 text-[#111] font-bold text-[10px] flex items-center justify-center border border-white/20">
                A
              </div>
              <span className="text-[11px] font-medium text-neutral-200 hidden sm:inline">Ayush</span>
            </div>
          </div>

          {/* Welcome greeting */}
          <div className="py-2.5">
            <h3 className="text-xs sm:text-sm font-semibold text-white flex items-center gap-1.5">
              Good Morning, Ayush <span className="inline-block animate-bounce">👋</span>
            </h3>
            <p className="text-[10px] text-neutral-400">Here's your purchase overview</p>
          </div>

          {/* 4 Stats Cards */}
          <div className="grid grid-cols-4 gap-1.5 sm:gap-2 mb-3">
            <div className="bg-[#141414] border border-white/6 rounded-lg p-2">
              <span className="text-sm sm:text-base font-bold text-white block leading-tight">{MOCK_STATS.totalPurchases}</span>
              <span className="text-[8.5px] sm:text-[9.5px] text-neutral-400 leading-none">Total Purchases</span>
            </div>
            <div className="bg-[#141414] border border-white/6 rounded-lg p-2">
              <span className="text-sm sm:text-base font-bold text-emerald-400 block leading-tight">{MOCK_STATS.activeWarranties}</span>
              <span className="text-[8.5px] sm:text-[9.5px] text-neutral-400 leading-none">Active Warranties</span>
            </div>
            <div className="bg-[#141414] border border-white/6 rounded-lg p-2">
              <span className="text-sm sm:text-base font-bold text-amber-400 block leading-tight">{MOCK_STATS.expiringSoon}</span>
              <span className="text-[8.5px] sm:text-[9.5px] text-neutral-400 leading-none">Expiring Soon</span>
            </div>
            <div className="bg-[#141414] border border-white/6 rounded-lg p-2">
              <span className="text-sm sm:text-base font-bold text-red-400 block leading-tight">{MOCK_STATS.expired}</span>
              <span className="text-[8.5px] sm:text-[9.5px] text-neutral-400 leading-none">Expired</span>
            </div>
          </div>

          {/* Bottom Grid: Recent Purchases + Warranty Expiring Card */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-2.5">
            {/* Recent Purchases List (7 cols) */}
            <div className="md:col-span-7 bg-[#141414] border border-white/6 rounded-xl p-2.5 flex flex-col justify-between">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] font-semibold text-neutral-200">Recent Purchases</span>
                <span className="text-[9.5px] text-neutral-400 hover:text-neutral-200 flex items-center gap-0.5 cursor-pointer">
                  View all <ChevronRight className="w-2.5 h-2.5" />
                </span>
              </div>

              <div className="space-y-1.5">
                {purchases.map((item) => (
                  <div 
                    key={item.id} 
                    className="flex items-center justify-between p-1.5 rounded-lg bg-black/30 border border-white/4 hover:border-white/10 transition-colors"
                  >
                    <div className="flex items-center gap-2 min-w-0">
                      {item.iconType === 'laptop' && <MacBookThumbnail className="w-6 h-6" />}
                      {item.iconType === 'headphones' && <HeadphonesThumbnail className="w-6 h-6" />}
                      {item.iconType === 'monitor' && <MonitorThumbnail className="w-6 h-6" />}
                      {item.iconType === 'phone' && <PhoneThumbnail className="w-6 h-6" />}
                      <div className="min-w-0">
                        <p className="text-[10px] font-medium text-white truncate">{item.name}</p>
                        <p className="text-[8.5px] text-neutral-400">{item.purchaseDateFormatted}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <span className="text-[10px] font-semibold text-neutral-200">₹{item.price.toLocaleString('en-IN')}</span>
                      <span className={`text-[8.5px] px-1.5 py-0.5 rounded-full font-medium ${
                        item.status === 'Active' 
                          ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30' 
                          : 'bg-amber-500/15 text-amber-400 border border-amber-500/30'
                      }`}>
                        {item.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Warranty Expiring Soon Card (5 cols) */}
            <div className="md:col-span-5 bg-[#141414] border border-white/6 rounded-xl p-2.5 flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-semibold text-neutral-200 block">Warranty Expiring Soon</span>
                <span className="text-[9px] text-neutral-400 block mb-2">2 items need your attention.</span>
              </div>

              {/* Headphones Centerpiece */}
              <div className="bg-[#0D0D0D] border border-white/6 rounded-lg p-2.5 flex flex-col items-center justify-center text-center">
                <HighFiHeadphones className="w-16 h-16 my-1" />
                <span className="text-[10.5px] font-semibold text-white mt-1">Sony WH-CH520</span>
                <span className="inline-block mt-1 text-[8.5px] px-2 py-0.5 rounded-full bg-amber-500/15 text-amber-400 border border-amber-500/30 font-medium">
                  {formatDaysRemaining(expiringItem?.warrantyExpiry || '2026-10-22')}
                </span>
              </div>

              <button className="mt-2 w-full py-1 text-[9.5px] font-medium rounded-md bg-white/10 hover:bg-white/15 text-white border border-white/10 flex items-center justify-center gap-1 transition-colors cursor-pointer">
                <span>View Details</span>
                <ArrowRight className="w-2.5 h-2.5" />
              </button>
            </div>
          </div>
        </main>
      </div>

      {/* Laptop Keyboard Lip Base Accent */}
      <div className="h-2.5 bg-gradient-to-b from-[#181818] to-[#0A0A0A] border-t border-white/10 flex items-center justify-center">
        <div className="w-16 h-0.5 rounded-full bg-neutral-600/50" />
      </div>
    </div>
  );
};

export default DashboardMockup;
