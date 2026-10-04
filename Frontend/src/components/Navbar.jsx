// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sun, Moon, Menu, X, ArrowRight } from 'lucide-react';
import { Logo } from './ui/Logo';
import { Button } from './ui/Button';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return document.documentElement.classList.contains('dark') || 
           localStorage.getItem('claimbox-theme') === 'dark';
  });

  const location = useLocation();
  const isLandingPage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      if (!isLandingPage) return;

      // Update active section based on scroll position
      const sections = ['how-it-works', 'features', 'trust', 'final-cta'];
      const scrollPos = window.scrollY + 200;

      let current = 'home';
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el && el.offsetTop <= scrollPos) {
          if (sectionId === 'how-it-works') current = 'how-it-works';
          else if (sectionId === 'features') current = 'features';
          else if (sectionId === 'trust') current = 'about';
          else if (sectionId === 'final-cta') current = 'pricing';
        }
      }
      if (window.scrollY < 250) {
        current = 'home';
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isLandingPage]);

  const toggleTheme = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    if (newMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('claimbox-theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('claimbox-theme', 'light');
    }
  };

  const scrollTo = (id) => {
    setMobileMenuOpen(false);
    if (id === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setActiveSection('home');
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -70;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const navLinks = [
    { label: 'Home', id: 'top', key: 'home' },
    { label: 'How it works', id: 'how-it-works', key: 'how-it-works' },
    { label: 'Features', id: 'features', key: 'features' },
    { label: 'Pricing', id: 'final-cta', key: 'pricing' },
    { label: 'About', id: 'trust', key: 'about' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0A0A0A]/85 backdrop-blur-md border-b border-white/8 py-3.5 shadow-lg shadow-black/20'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Left: Brand Logo */}
        <div className="flex items-center">
          <Logo to="/" dark={true} size="md" />
        </div>

        {/* Center: Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = isLandingPage && activeSection === link.key;
            return (
              <button
                key={link.key}
                onClick={() => isLandingPage ? scrollTo(link.id) : (window.location.href = `/#${link.id}`)}
                className={`relative text-sm font-medium transition-colors py-1 cursor-pointer ${
                  isActive ? 'text-white' : 'text-neutral-400 hover:text-white'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-white rounded-full transition-all" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Right: Actions */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-neutral-300 hover:text-white transition-all cursor-pointer"
          >
            {isDarkMode ? <Sun className="w-4 h-4 text-[#D4A95C]" /> : <Moon className="w-4 h-4" />}
          </button>

          {/* Sign In */}
          <Button to="/login" variant="outline-dark" size="sm" className="px-4 py-2 text-xs font-semibold">
            Sign In
          </Button>

          {/* Get Started -> */}
          <Button to="/register" variant="primary-white" size="sm" arrow className="px-4 py-2 text-xs font-semibold">
            Get Started
          </Button>
        </div>

        {/* Mobile Hamburger & Actions */}
        <div className="flex items-center gap-2 sm:hidden">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-neutral-300"
          >
            {isDarkMode ? <Sun className="w-3.5 h-3.5 text-[#D4A95C]" /> : <Moon className="w-3.5 h-3.5" />}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
            className="p-1.5 rounded-lg bg-white/5 border border-white/10 text-neutral-300 hover:text-white"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#0D0D0D]/95 backdrop-blur-xl border-b border-white/10 px-6 py-6 space-y-4 animate-in fade-in duration-200">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <button
                key={link.key}
                onClick={() => scrollTo(link.id)}
                className="text-left text-base font-medium text-neutral-300 hover:text-white py-1.5"
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="pt-4 border-t border-white/10 flex flex-col gap-2.5">
            <Button
              to="/login"
              variant="outline-dark"
              size="md"
              className="w-full justify-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Sign In
            </Button>
            <Button
              to="/register"
              variant="primary-white"
              size="md"
              arrow
              className="w-full justify-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get Started
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
