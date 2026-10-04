// src/components/ui/RouteLoader.jsx
import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { CubeIcon } from './Logo';

const ROUTE_LABELS = {
  '/': 'Home',
  '/login': 'Signing you in',
  '/register': 'Creating your account',
  '/dashboard': 'Loading Dashboard',
  '/purchases': 'Loading Purchases',
  '/warranties': 'Loading Warranties',
  '/documents': 'Loading Documents',
  '/profile': 'Loading Profile',
  '/settings': 'Loading Settings',
  '/404': 'Finding page',
};

const getLabel = (pathname) => {
  if (ROUTE_LABELS[pathname]) return ROUTE_LABELS[pathname];
  if (pathname.startsWith('/purchases/')) return 'Loading Purchase Details';
  return 'Loading ClaimBox';
};

export const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);
  return null;
};

export const RouteLoader = () => {
  const location = useLocation();
  const [visible, setVisible] = useState(false);
  const [leaving, setLeaving] = useState(false);
  const [label, setLabel] = useState('');
  const firstRender = useRef(true);
  const timers = useRef([]);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    setLabel(getLabel(location.pathname));
    setVisible(true);
    setLeaving(false);

    timers.current.forEach(clearTimeout);
    timers.current = [
      setTimeout(() => setLeaving(true), 500),
      setTimeout(() => setVisible(false), 800),
    ];

    return () => timers.current.forEach(clearTimeout);
  }, [location.pathname]);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] pointer-events-auto flex items-center justify-center transition-opacity duration-300 ${
        leaving ? 'opacity-0' : 'opacity-100'
      }`}
      aria-hidden="true"
    >
      {/* Dim + blur backdrop */}
      <div className="absolute inset-0 bg-[#0A0A0A]/70 backdrop-blur-[6px]" />

      {/* Top gold progress bar */}
      <div className="absolute top-0 left-0 right-0 h-[3px] overflow-hidden bg-white/5">
        <div className="route-bar h-full w-1/3 bg-gradient-to-r from-transparent via-[#D4A95C] to-[#F5E6C8] shadow-[0_0_12px_rgba(212,169,92,0.9)]" />
      </div>

      {/* Center card */}
      <div
        className={`relative flex flex-col items-center gap-4 px-8 py-7 rounded-3xl bg-[#111111]/90 border border-white/10 shadow-[0_25px_80px_-15px_rgba(0,0,0,0.9)] transition-all duration-300 ${
          leaving ? 'scale-95 translate-y-2' : 'scale-100 translate-y-0'
        }`}
      >
        {/* Glowing ring behind cube */}
        <div className="relative flex items-center justify-center">
          <div className="absolute w-20 h-20 rounded-full bg-[#D4A95C]/15 blur-2xl animate-pulse" />
          <div className="absolute w-16 h-16 rounded-full border border-[#D4A95C]/25 route-ring" />
          <div className="absolute w-16 h-16 rounded-full border-t-2 border-[#D4A95C] animate-spin" />
          <div className="relative route-cube">
            <CubeIcon className="w-9 h-9" />
          </div>
        </div>

        <div className="text-center space-y-1.5">
          <p className="text-sm font-semibold text-white tracking-tight">
            {label}
            <span className="route-dots ml-0.5">
              <span>.</span>
              <span>.</span>
              <span>.</span>
            </span>
          </p>
          <p className="text-[11px] text-neutral-500 font-medium tracking-wide">
            Your purchases. Always with you.
          </p>
        </div>

        {/* Shimmer line */}
        <div className="w-40 h-[3px] rounded-full bg-white/8 overflow-hidden">
          <div className="route-shimmer h-full w-1/2 rounded-full bg-gradient-to-r from-transparent via-[#D4A95C] to-transparent" />
        </div>
      </div>
    </div>
  );
};

export const InitialPageLoader = () => (
  <div className="min-h-screen bg-[#0A0A0A] flex items-center justify-center">
    <div className="absolute top-0 left-0 right-0 h-[3px] overflow-hidden bg-white/5">
      <div className="route-bar h-full w-1/3 bg-gradient-to-r from-transparent via-[#D4A95C] to-[#F5E6C8]" />
    </div>
    <div className="flex flex-col items-center gap-4 px-8 py-7 rounded-3xl bg-[#111111]/90 border border-white/10">
      <div className="relative flex items-center justify-center">
        <div className="absolute w-20 h-20 rounded-full bg-[#D4A95C]/15 blur-2xl animate-pulse" />
        <div className="absolute w-16 h-16 rounded-full border-t-2 border-[#D4A95C] animate-spin" />
        <div className="relative route-cube">
          <CubeIcon className="w-9 h-9" />
        </div>
      </div>
      <p className="text-sm font-semibold text-white">Loading ClaimBox...</p>
      <div className="w-40 h-[3px] rounded-full bg-white/8 overflow-hidden">
        <div className="route-shimmer h-full w-1/2 rounded-full bg-gradient-to-r from-transparent via-[#D4A95C] to-transparent" />
      </div>
    </div>
  </div>
);

export default RouteLoader;
