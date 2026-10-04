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
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

/** Smooth top progress bar + soft floating pill. No blocking overlay, no flicker. */
export const RouteLoader = () => {
  const location = useLocation();
  const [active, setActive] = useState(false);
  const [progress, setProgress] = useState(0);
  const [label, setLabel] = useState('');
  const firstRender = useRef(true);
  const raf = useRef(null);
  const timeouts = useRef([]);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    setLabel(getLabel(location.pathname));
    setActive(true);
    setProgress(0);

    const start = performance.now();
    const DURATION = 750;

    const tick = (now) => {
      const t = Math.min((now - start) / DURATION, 1);
      // easeOutCubic to 90%
      const eased = 1 - Math.pow(1 - t, 3);
      setProgress(Math.round(eased * 90));
      if (t < 1) {
        raf.current = requestAnimationFrame(tick);
      } else {
        // finish smoothly to 100 then fade out
        setProgress(100);
        timeouts.current.push(setTimeout(() => setActive(false), 350));
      }
    };
    raf.current = requestAnimationFrame(tick);

    return () => {
      if (raf.current) cancelAnimationFrame(raf.current);
      timeouts.current.forEach(clearTimeout);
      timeouts.current = [];
    };
  }, [location.pathname]);

  return (
    <>
      {/* Top gold progress bar — always mounted, opacity animated */}
      <div
        className={`fixed top-0 left-0 right-0 z-[100] h-[2px] pointer-events-none transition-opacity duration-300 ${
          active ? 'opacity-100' : 'opacity-0'
        }`}
        aria-hidden="true"
      >
        <div className="h-full w-full bg-transparent">
          <div
            className="h-full bg-gradient-to-r from-[#D4A95C] via-[#E8C87E] to-[#F5E6C8] shadow-[0_0_10px_rgba(212,169,92,0.8)] will-change-transform"
            style={{
              width: `${progress}%`,
              transition: 'width 120ms ease-out',
            }}
          />
        </div>
      </div>

      {/* Soft floating pill — no backdrop blur, no blocking */}
      <div
        className={`fixed bottom-8 left-1/2 -translate-x-1/2 z-[100] pointer-events-none transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          active ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-95'
        }`}
        aria-hidden="true"
      >
        <div className="flex items-center gap-3 pl-3 pr-5 py-2.5 rounded-full bg-[#141414]/95 border border-white/10 shadow-[0_16px_50px_-10px_rgba(0,0,0,0.85)]">
          <span className="relative flex items-center justify-center w-8 h-8">
            <span className="absolute inset-0 rounded-full border border-white/10" />
            <span className="absolute inset-0 rounded-full border-t-2 border-[#D4A95C] animate-spin" />
            <CubeIcon className="w-4 h-4" />
          </span>
          <span className="text-xs font-semibold text-white tracking-tight whitespace-nowrap">
            {label}
          </span>
          <span className="flex items-center gap-1">
            <span className="route-soft-dot" />
            <span className="route-soft-dot route-soft-dot-2" />
            <span className="route-soft-dot route-soft-dot-3" />
          </span>
        </div>
      </div>
    </>
  );
};

/** Page content fades/slides in softly on every route change. */
export const PageFade = ({ children }) => {
  const { pathname } = useLocation();
  return (
    <div key={pathname} className="page-enter">
      {children}
    </div>
  );
};

export const InitialPageLoader = () => (
  <div className="min-h-screen bg-[#0A0A0A] flex items-center justify-center">
    <div className="flex flex-col items-center gap-5">
      <span className="relative flex items-center justify-center w-16 h-16">
        <span className="absolute inset-0 rounded-full border border-white/10" />
        <span className="absolute inset-0 rounded-full border-t-2 border-[#D4A95C] animate-spin" />
        <CubeIcon className="w-7 h-7" />
      </span>
      <p className="text-sm font-semibold text-white tracking-tight">Loading ClaimBox</p>
      <div className="w-44 h-[2px] rounded-full bg-white/10 overflow-hidden">
        <div className="route-shimmer-smooth h-full w-1/2 rounded-full bg-gradient-to-r from-transparent via-[#D4A95C] to-transparent" />
      </div>
    </div>
  </div>
);

export default RouteLoader;
