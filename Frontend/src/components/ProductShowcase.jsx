// src/components/ProductShowcase.jsx
import React from 'react';
import { 
  ArrowLeft, 
  Download, 
  CheckCircle, 
  LayoutDashboard, 
  ShoppingBag, 
  ShieldCheck, 
  FileText, 
  Bell, 
  User, 
  Laptop
} from 'lucide-react';
import { Pill } from './ui/Pill';
import { Button } from './ui/Button';
import { Reveal } from './ui/Reveal';
import { CubeIcon } from './ui/Logo';
import { MOCK_PURCHASES } from '../data/mock';

export const ProductShowcase = () => {
  const item = MOCK_PURCHASES.find(p => p.id === 'macbook-air-m2') || MOCK_PURCHASES[0];

  return (
    <section id="showcase" className="bg-[#FAFAF8] dark:bg-[#0C0C0C] py-20 lg:py-28 border-b border-[#ECECE8] dark:border-white/8 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Heading and CTA (4 to 5 cols) */}
          <div className="lg:col-span-5 text-left space-y-5">
            <Reveal delay={100}>
              <Pill variant="light" icon="✦">
                PRODUCT SHOWCASE
              </Pill>
            </Reveal>

            <Reveal delay={200}>
              <h2 className="text-3xl sm:text-4xl xl:text-5xl font-extrabold tracking-tight text-neutral-900 dark:text-white leading-[1.12]">
                A closer look <br />
                at ClaimBox.
              </h2>
            </Reveal>

            <Reveal delay={300}>
              <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 font-normal leading-relaxed max-w-md">
                A clean and modern interface designed to keep your important information organized and easily accessible.
              </p>
            </Reveal>

            <Reveal delay={400}>
              <div className="pt-2">
                <Button to="/dashboard" variant="primary-dark" size="lg" arrow>
                  Explore the Dashboard
                </Button>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Large Dark Laptop Mockup (7 cols) */}
          <div className="lg:col-span-7 relative">
            <Reveal delay={300} direction="left">
              {/* Laptop Container */}
              <div className="rounded-2xl bg-[#0D0D0D] border border-white/12 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)] overflow-hidden text-left font-sans select-none">
                {/* Laptop Bezel Top Bar */}
                <div className="bg-[#0A0A0A] px-4 py-2 border-b border-white/6 flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]/80" />
                  </div>
                  <div className="w-1.5 h-1.5 rounded-full bg-neutral-700" />
                  <div className="w-12" />
                </div>

                {/* Laptop Screen Body */}
                <div className="flex min-h-[390px] text-neutral-200 bg-[#0C0C0C]">
                  {/* Left Sidebar */}
                  <aside className="w-36 sm:w-40 border-r border-white/6 p-3 flex flex-col justify-between shrink-0 bg-[#0A0A0A]">
                    <div className="space-y-4">
                      {/* Logo */}
                      <div className="flex items-center gap-1.5 px-1">
                        <CubeIcon className="w-4 h-4 text-[#D4A95C]" />
                        <span className="text-xs font-bold text-white tracking-tight">ClaimBox</span>
                      </div>

                      {/* Nav Links */}
                      <nav className="space-y-0.5 text-[10.5px]">
                        <div className="flex items-center gap-2 px-2 py-1.5 rounded-lg text-neutral-400">
                          <LayoutDashboard className="w-3.5 h-3.5" />
                          <span>Dashboard</span>
                        </div>
                        {/* Purchases Active */}
                        <div className="flex items-center gap-2 px-2 py-1.5 rounded-lg bg-white/10 text-white font-medium">
                          <ShoppingBag className="w-3.5 h-3.5 text-[#D4A95C]" />
                          <span>Purchases</span>
                        </div>
                        <div className="flex items-center gap-2 px-2 py-1.5 rounded-lg text-neutral-400">
                          <ShieldCheck className="w-3.5 h-3.5" />
                          <span>Warranties</span>
                        </div>
                        <div className="flex items-center gap-2 px-2 py-1.5 rounded-lg text-neutral-400">
                          <FileText className="w-3.5 h-3.5" />
                          <span>Documents</span>
                        </div>
                        <div className="flex items-center gap-2 px-2 py-1.5 rounded-lg text-neutral-400">
                          <Bell className="w-3.5 h-3.5" />
                          <span>Reminders</span>
                        </div>
                        <div className="flex items-center gap-2 px-2 py-1.5 rounded-lg text-neutral-400">
                          <User className="w-3.5 h-3.5" />
                          <span>Profile</span>
                        </div>
                      </nav>
                    </div>
                  </aside>

                  {/* Main Purchase Details Content */}
                  <main className="flex-1 p-3.5 sm:p-5 flex flex-col justify-between overflow-hidden">
                    {/* Top Breadcrumb */}
                    <div className="flex items-center gap-1.5 text-[11px] text-neutral-400 mb-3">
                      <ArrowLeft className="w-3 h-3 cursor-pointer hover:text-white" />
                      <span>Purchases</span>
                      <span>/</span>
                      <span className="text-white font-medium">{item.name}</span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                      {/* Left: Product Info (7 cols) */}
                      <div className="md:col-span-7 space-y-3.5">
                        {/* Title and Active Badge */}
                        <div className="flex items-start justify-between">
                          <div className="flex items-center gap-2.5">
                            <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white">
                              <Laptop className="w-5 h-5" />
                            </div>
                            <div>
                              <h3 className="text-sm sm:text-base font-bold text-white">{item.name}</h3>
                              <p className="text-[10px] text-neutral-400">{item.subTitle}</p>
                            </div>
                          </div>
                          <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                            {item.status}
                          </span>
                        </div>

                        {/* Large Price */}
                        <div>
                          <div className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                            ₹{item.price.toLocaleString('en-IN')}
                          </div>
                        </div>

                        {/* Meta Grid Row */}
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 py-2 border-y border-white/6 text-[10px]">
                          <div>
                            <span className="text-neutral-500 block text-[9px]">Purchase Date</span>
                            <span className="text-neutral-200 font-medium">{item.purchaseDateFormatted}</span>
                          </div>
                          <div>
                            <span className="text-neutral-500 block text-[9px]">Seller</span>
                            <span className="text-neutral-200 font-medium">{item.seller}</span>
                          </div>
                          <div>
                            <span className="text-neutral-500 block text-[9px]">Warranty</span>
                            <span className="text-neutral-200 font-medium">{item.warrantyPeriod}</span>
                          </div>
                          <div>
                            <span className="text-neutral-500 block text-[9px]">Expires On</span>
                            <span className="text-neutral-200 font-medium">{item.warrantyExpiryFormatted}</span>
                          </div>
                        </div>

                        {/* Documents (2) List */}
                        <div className="space-y-1.5">
                          <span className="text-[11px] font-semibold text-neutral-300 block">
                            Documents ({item.documents.length})
                          </span>
                          {item.documents.map((doc) => (
                            <div
                              key={doc.id}
                              className="flex items-center justify-between p-2 rounded-lg bg-black/40 border border-white/6 hover:border-white/12 transition-colors"
                            >
                              <div className="flex items-center gap-2">
                                <div className={`w-5 h-6 rounded flex items-center justify-center text-[8px] font-bold ${
                                  doc.type === 'pdf' 
                                    ? 'bg-red-500/20 text-red-400' 
                                    : 'bg-amber-500/20 text-amber-400'
                                }`}>
                                  {doc.type === 'pdf' ? 'PDF' : 'JPG'}
                                </div>
                                <div>
                                  <p className="text-[10.5px] font-medium text-white">{doc.name}</p>
                                  <p className="text-[9px] text-neutral-500">{doc.size}</p>
                                </div>
                              </div>
                              <button className="p-1 rounded text-neutral-400 hover:text-white hover:bg-white/10">
                                <Download className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Right: Warranty Status Ring Card (5 cols) */}
                      <div className="md:col-span-5 bg-[#141414] border border-white/6 rounded-xl p-3 flex flex-col items-center justify-between text-center">
                        <span className="text-[11px] font-semibold text-neutral-200 w-full text-left">
                          Warranty Status
                        </span>

                        {/* Circular Progress Ring */}
                        <div className="relative my-2 w-28 h-28 flex items-center justify-center">
                          <svg className="w-full h-full -rotate-90 transform" viewBox="0 0 100 100">
                            {/* Track Circle */}
                            <circle
                              cx="50"
                              cy="50"
                              r="40"
                              stroke="rgba(255, 255, 255, 0.08)"
                              strokeWidth="7"
                              fill="none"
                            />
                            {/* Progress Gradient Circle */}
                            <circle
                              cx="50"
                              cy="50"
                              r="40"
                              stroke="url(#warranty-ring-gradient)"
                              strokeWidth="7"
                              strokeDasharray="251.2"
                              strokeDashoffset="75"
                              strokeLinecap="round"
                              fill="none"
                            />
                            <defs>
                              <linearGradient id="warranty-ring-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#10B981" />
                                <stop offset="70%" stopColor="#34D399" />
                                <stop offset="100%" stopColor="#D4A95C" />
                              </linearGradient>
                            </defs>
                          </svg>

                          {/* Center Text inside Ring */}
                          <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                            <span className="text-2xl font-black text-white leading-none tracking-tight">98</span>
                            <span className="text-[8.5px] text-neutral-400 font-medium leading-tight">days remaining</span>
                          </div>
                        </div>

                        {/* Start & End Dates */}
                        <div className="w-full grid grid-cols-2 gap-1 pt-2 border-t border-white/6 text-[9.5px]">
                          <div>
                            <span className="text-neutral-500 block text-[8px]">Start Date</span>
                            <span className="text-neutral-300 font-medium">{item.purchaseDateFormatted}</span>
                          </div>
                          <div>
                            <span className="text-neutral-500 block text-[8px]">End Date</span>
                            <span className="text-neutral-300 font-medium">{item.warrantyExpiryFormatted}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </main>
                </div>

                {/* Base Laptop Strip */}
                <div className="h-2 bg-gradient-to-b from-[#181818] to-[#0A0A0A] border-t border-white/10" />
              </div>

              {/* Floating Green Pill Notification Overlapping bottom right */}
              <div className="mt-4 sm:mt-0 sm:absolute sm:-bottom-5 sm:-right-4 bg-[#141414] border border-emerald-500/30 shadow-xl rounded-xl p-3 flex items-center gap-3 backdrop-blur-md">
                <div className="w-7 h-7 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <p className="text-xs font-semibold text-white">Invoice Uploaded</p>
                  <p className="text-[10px] text-neutral-400">Your document has been securely saved.</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
