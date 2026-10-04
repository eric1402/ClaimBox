// src/components/ui/SVGs.jsx
import React from 'react';

// Hero Curved Background Streaks
export const HeroBackgroundStreaks = () => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0">
    {/* Dark subtle radial gradient center */}
    <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-gradient-to-b from-[#1C1A14]/30 via-[#121212]/10 to-transparent rounded-full blur-[100px] pointer-events-none" />

    {/* Flowing curved light ribbons / streaks */}
    <svg 
      className="absolute top-0 left-0 w-full h-full opacity-35" 
      viewBox="0 0 1440 900" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
    >
      <path 
        d="M-200 450C200 500 500 150 900 250C1300 350 1600 150 1800 200" 
        stroke="url(#streak-grad-1)" 
        strokeWidth="1.5" 
        strokeLinecap="round" 
        className="animate-pulse-slow"
      />
      <path 
        d="M-100 600C300 650 650 300 1000 420C1350 540 1650 350 1900 380" 
        stroke="url(#streak-grad-2)" 
        strokeWidth="1" 
        strokeDasharray="4 6" 
        opacity="0.6"
      />
      <path 
        d="M-150 250C250 200 600 450 1100 350C1450 280 1700 450 1850 420" 
        stroke="url(#streak-grad-3)" 
        strokeWidth="0.8" 
        opacity="0.4"
      />
      
      {/* Subtle bottom curve sweeping toward laptop */}
      <path 
        d="M100 800C400 700 800 850 1200 720C1500 620 1700 780 1900 700" 
        stroke="url(#streak-grad-1)" 
        strokeWidth="1.2" 
        opacity="0.3"
      />

      <defs>
        <linearGradient id="streak-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#444444" stopOpacity="0" />
          <stop offset="30%" stopColor="#8E8E8E" stopOpacity="0.4" />
          <stop offset="60%" stopColor="#D4A95C" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#222222" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="streak-grad-2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#222" stopOpacity="0" />
          <stop offset="50%" stopColor="#666" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#D4A95C" stopOpacity="0.1" />
        </linearGradient>
        <linearGradient id="streak-grad-3" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#555" stopOpacity="0.1" />
          <stop offset="50%" stopColor="#D4A95C" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#111" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  </div>
);

// 3D Glossy Faceted Geometric Cube for Final CTA
export const GlossyCube3D = ({ className = "w-48 h-48 md:w-56 md:h-56" }) => (
  <svg 
    viewBox="0 0 240 240" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={`${className} filter drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)]`}
  >
    <defs>
      {/* Gradients for faceted faces */}
      <linearGradient id="cube-face-top" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#2A2A2A" />
        <stop offset="50%" stopColor="#1A1A1A" />
        <stop offset="100%" stopColor="#0F0F0F" />
      </linearGradient>
      <linearGradient id="cube-face-left" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#1C1C1C" />
        <stop offset="70%" stopColor="#0B0B0B" />
        <stop offset="100%" stopColor="#050505" />
      </linearGradient>
      <linearGradient id="cube-face-right" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#303030" />
        <stop offset="40%" stopColor="#1C1C1C" />
        <stop offset="100%" stopColor="#0A0A0A" />
      </linearGradient>
      <linearGradient id="cube-gold-glow" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFE09E" />
        <stop offset="60%" stopColor="#D4A95C" />
        <stop offset="100%" stopColor="#8A6726" />
      </linearGradient>
      <radialGradient id="cube-specular" cx="45%" cy="35%" r="60%">
        <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.4" />
        <stop offset="40%" stopColor="#FFFFFF" stopOpacity="0.08" />
        <stop offset="100%" stopColor="#000000" stopOpacity="0" />
      </radialGradient>
      <filter id="soft-glow" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation="3" result="blur" />
        <feComposite in="SourceGraphic" in2="blur" operator="over" />
      </filter>
    </defs>

    {/* Facet: Top polygon */}
    <polygon 
      points="120,25 195,68 120,115 45,68" 
      fill="url(#cube-face-top)" 
      stroke="url(#cube-gold-glow)" 
      strokeWidth="1.2" 
    />
    
    {/* Facet: Left polygon */}
    <polygon 
      points="45,68 120,115 120,205 45,158" 
      fill="url(#cube-face-left)" 
      stroke="rgba(255,255,255,0.15)" 
      strokeWidth="1.2" 
    />

    {/* Facet: Right polygon */}
    <polygon 
      points="120,115 195,68 195,158 120,205" 
      fill="url(#cube-face-right)" 
      stroke="url(#cube-gold-glow)" 
      strokeWidth="1.2" 
    />

    {/* Internal Chamfer / Tessellation facets for realistic 3D gemstone look */}
    <polygon 
      points="120,25 155,90 120,115" 
      fill="rgba(255,255,255,0.06)" 
      stroke="rgba(212,169,92,0.3)" 
      strokeWidth="0.8" 
    />
    <polygon 
      points="45,68 85,135 120,115" 
      fill="rgba(212,169,92,0.08)" 
      stroke="rgba(212,169,92,0.4)" 
      strokeWidth="0.8" 
    />
    <polygon 
      points="120,115 155,160 120,205" 
      fill="rgba(255,255,255,0.04)" 
      stroke="rgba(255,255,255,0.1)" 
      strokeWidth="0.8" 
    />

    {/* Central Specular highlight reflection */}
    <circle cx="120" cy="115" r="45" fill="url(#cube-specular)" />

    {/* Sharp Edge Light Accents */}
    <line x1="120" y1="25" x2="195" y2="68" stroke="#FFE9B8" strokeWidth="1.4" strokeOpacity="0.8" />
    <line x1="120" y1="25" x2="120" y2="115" stroke="#FFFFFF" strokeWidth="1.2" strokeOpacity="0.6" />
    <line x1="120" y1="115" x2="195" y2="68" stroke="#FFE9B8" strokeWidth="1.5" strokeOpacity="0.9" />
    <line x1="120" y1="115" x2="120" y2="205" stroke="#D4A95C" strokeWidth="1.4" strokeOpacity="0.7" />
  </svg>
);

// Product Thumbnail: MacBook Air
export const MacBookThumbnail = ({ className = "w-9 h-9" }) => (
  <div className={`${className} rounded-lg bg-[#222] border border-white/10 flex items-center justify-center p-1.5 shrink-0`}>
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-neutral-300" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="12" rx="2" />
      <line x1="2" y1="20" x2="22" y2="20" />
      <path d="M9 16v4" />
      <path d="M15 16v4" />
    </svg>
  </div>
);

// Product Thumbnail: Sony WH-CH520 Headphones
export const HeadphonesThumbnail = ({ className = "w-9 h-9" }) => (
  <div className={`${className} rounded-lg bg-[#222] border border-white/10 flex items-center justify-center p-1.5 shrink-0`}>
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-neutral-300" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3" />
    </svg>
  </div>
);

// High Fidelity Headphones Graphic for Card
export const HighFiHeadphones = ({ className = "w-20 h-20" }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Headband arch */}
    <path 
      d="M20 54C20 34 32 18 50 18C68 18 80 34 80 54" 
      stroke="#444444" 
      strokeWidth="7" 
      strokeLinecap="round" 
    />
    <path 
      d="M23 54C23 37 34 22 50 22C66 22 77 37 77 54" 
      stroke="#1E1E1E" 
      strokeWidth="5" 
      strokeLinecap="round" 
    />
    {/* Headband cushion top */}
    <path 
      d="M32 26C38 21 44 19 50 19C56 19 62 21 68 26" 
      stroke="#555555" 
      strokeWidth="4" 
      strokeLinecap="round" 
    />
    
    {/* Left Earcup */}
    <rect x="14" y="50" width="14" height="28" rx="7" fill="#1A1A1A" stroke="#333333" strokeWidth="2" />
    <rect x="20" y="55" width="6" height="18" rx="3" fill="#0D0D0D" />
    <circle cx="21" cy="64" r="2" fill="#D4A95C" opacity="0.8" />
    
    {/* Right Earcup */}
    <rect x="72" y="50" width="14" height="28" rx="7" fill="#1A1A1A" stroke="#333333" strokeWidth="2" />
    <rect x="74" y="55" width="6" height="18" rx="3" fill="#0D0D0D" />
    <circle cx="79" cy="64" r="2" fill="#D4A95C" opacity="0.8" />

    {/* Swivel metal connectors */}
    <path d="M21 48L21 52" stroke="#888" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M79 48L79 52" stroke="#888" strokeWidth="2.5" strokeLinecap="round" />
  </svg>
);

// Product Thumbnail: Samsung Monitor
export const MonitorThumbnail = ({ className = "w-9 h-9" }) => (
  <div className={`${className} rounded-lg bg-[#222] border border-white/10 flex items-center justify-center p-1.5 shrink-0`}>
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-neutral-300" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <line x1="8" y1="21" x2="16" y2="21" />
      <line x1="12" y1="17" x2="12" y2="21" />
    </svg>
  </div>
);

// Product Thumbnail: iPhone 15
export const PhoneThumbnail = ({ className = "w-9 h-9" }) => (
  <div className={`${className} rounded-lg bg-[#222] border border-white/10 flex items-center justify-center p-1.5 shrink-0`}>
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-neutral-300" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="5" y="2" width="14" height="20" rx="3" />
      <line x1="10" y1="5" x2="14" y2="5" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="12" cy="18" r="0.75" />
    </svg>
  </div>
);

// PROBLEM SECTION ILLUSTRATIONS (Clean custom SVGs matching reference)
// Card 1: Receipts in different apps (chat, mail, photos, files)
export const ProblemAppsIllustration = () => (
  <div className="relative w-24 h-24 flex items-center justify-center select-none">
    {/* Floating WhatsApp-like green badge */}
    <div className="absolute top-1 right-2 w-8 h-8 rounded-xl bg-gradient-to-br from-emerald-400 to-green-500 shadow-md flex items-center justify-center text-white transform rotate-6">
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
      </svg>
    </div>

    {/* Floating Mail-like red/blue badge */}
    <div className="absolute top-3 left-2 w-9 h-8 rounded-xl bg-white border border-neutral-200 shadow-md flex items-center justify-center text-red-500 transform -rotate-6">
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2" fill="#FAFAFA" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" stroke="#EA4335" />
      </svg>
    </div>

    {/* Floating Photos-like colorful gallery icon */}
    <div className="absolute bottom-1 right-5 w-8 h-8 rounded-xl bg-white border border-neutral-200 shadow-md flex items-center justify-center transform rotate-12">
      <div className="grid grid-cols-2 gap-0.5 w-4 h-4">
        <div className="bg-red-400 rounded-xs" />
        <div className="bg-amber-400 rounded-xs" />
        <div className="bg-blue-400 rounded-xs" />
        <div className="bg-green-400 rounded-xs" />
      </div>
    </div>

    {/* Central receipt paper */}
    <div className="w-12 h-14 bg-neutral-50 border border-neutral-300 rounded-md shadow-sm p-1.5 flex flex-col justify-between">
      <div className="space-y-1">
        <div className="w-6 h-1 bg-neutral-300 rounded" />
        <div className="w-8 h-1 bg-neutral-200 rounded" />
        <div className="w-5 h-1 bg-neutral-200 rounded" />
      </div>
      <div className="w-full border-t border-dashed border-neutral-300 pt-0.5 flex justify-between">
        <span className="text-[7px] font-bold text-neutral-400">TOTAL</span>
        <div className="w-3 h-1 bg-neutral-400 rounded" />
      </div>
    </div>
  </div>
);

// Card 2: Stressed person holding head
export const ProblemStressedPersonIllustration = () => (
  <div className="w-24 h-24 flex items-center justify-center select-none">
    <svg viewBox="0 0 100 100" fill="none" className="w-20 h-20">
      {/* Head */}
      <circle cx="50" cy="46" r="22" fill="#F8D3B4" />
      {/* Brown hair */}
      <path d="M28 42C28 28 36 22 50 22C64 22 72 28 72 42C72 32 62 26 50 26C38 26 28 32 28 42Z" fill="#4A2E18" />
      <path d="M30 40C35 34 45 35 50 32C55 35 65 34 70 40C66 32 58 29 50 29C42 29 34 32 30 40Z" fill="#3D2514" />
      
      {/* Distressed eyebrows and eyes */}
      <path d="M40 40L46 43" stroke="#333" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M60 40L54 43" stroke="#333" strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="43" cy="46" r="2" fill="#222" />
      <circle cx="57" cy="46" r="2" fill="#222" />
      
      {/* Open worried mouth */}
      <ellipse cx="50" cy="56" rx="3.5" ry="4.5" fill="#C25A5A" />
      
      {/* Hands holding head / hair in frustration */}
      <ellipse cx="26" cy="38" rx="5" ry="7" transform="rotate(-20 26 38)" fill="#F8D3B4" stroke="#E0A985" strokeWidth="1" />
      <ellipse cx="74" cy="38" rx="5" ry="7" transform="rotate(20 74 38)" fill="#F8D3B4" stroke="#E0A985" strokeWidth="1" />

      {/* Shoulders / Shirt */}
      <path d="M28 78C28 66 38 64 50 64C62 64 72 66 72 78" fill="#3B5998" />

      {/* Stress sweat drop / question marks */}
      <path d="M68 30C68 30 71 27 71 25C71 23.5 69.5 22 68 22C66.5 22 65 23.5 65 25C65 27 68 30 68 30Z" fill="#60A5FA" />
      <text x="20" y="24" fill="#EF4444" fontSize="13" fontWeight="bold">?</text>
    </svg>
  </div>
);

// Card 3: Missed warranty deadlines (document with deadline alert)
export const ProblemMissedDeadlineIllustration = () => (
  <div className="w-24 h-24 flex items-center justify-center select-none">
    <div className="relative">
      {/* Document page */}
      <div className="w-16 h-20 bg-white border border-neutral-200 rounded-lg shadow-sm p-2 flex flex-col justify-between">
        <div className="space-y-1.5">
          <div className="w-8 h-1.5 bg-neutral-300 rounded" />
          <div className="w-11 h-1 bg-neutral-200 rounded" />
          <div className="w-9 h-1 bg-neutral-200 rounded" />
          <div className="w-10 h-1 bg-neutral-200 rounded" />
        </div>
        <div className="flex items-center gap-1 text-[8px] text-neutral-400 border-t border-neutral-100 pt-1">
          <span className="w-2 h-2 rounded-full bg-neutral-300" />
          <span>EXP: 2024</span>
        </div>
      </div>

      {/* Floating Red Warning / Clock Badge */}
      <div className="absolute -bottom-2 -right-2 w-9 h-9 rounded-full bg-red-500 text-white flex items-center justify-center shadow-lg border-2 border-white">
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      </div>

      {/* Exclamation pill */}
      <div className="absolute -top-2 -left-2 px-1.5 py-0.5 rounded bg-amber-500 text-white text-[9px] font-bold shadow-xs">
        !
      </div>
    </div>
  </div>
);

// Card 4: Unnecessary stress and last-minute hassle (red magnifier examining empty/alert)
export const ProblemStressMagnifierIllustration = () => (
  <div className="w-24 h-24 flex items-center justify-center select-none">
    <svg viewBox="0 0 80 80" fill="none" className="w-20 h-20">
      {/* Box behind */}
      <rect x="15" y="25" width="40" height="40" rx="6" fill="#F8F8F8" stroke="#E0E0E0" strokeWidth="1.5" />
      <line x1="22" y1="36" x2="38" y2="36" stroke="#CCC" strokeWidth="2" strokeLinecap="round" />
      <line x1="22" y1="44" x2="48" y2="44" stroke="#E2E2E2" strokeWidth="2" strokeLinecap="round" />

      {/* Red Magnifying Glass */}
      <circle cx="44" cy="38" r="16" fill="rgba(239, 68, 68, 0.08)" stroke="#EF4444" strokeWidth="3" />
      <line x1="55" y1="50" x2="68" y2="65" stroke="#DC2626" strokeWidth="4.5" strokeLinecap="round" />
      
      {/* Red exclamation inside glass */}
      <line x1="44" y1="31" x2="44" y2="39" stroke="#EF4444" strokeWidth="3" strokeLinecap="round" />
      <circle cx="44" cy="45" r="1.5" fill="#EF4444" />

      {/* Stress radiate lines */}
      <line x1="22" y1="18" x2="18" y2="14" stroke="#F87171" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="38" y1="14" x2="38" y2="8" stroke="#F87171" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="56" y1="16" x2="61" y2="11" stroke="#F87171" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  </div>
);
