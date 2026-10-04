// src/components/layout/AppLayout.jsx
import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, 
  ShoppingBag, 
  ShieldCheck, 
  FileText, 
  User, 
  Settings as SettingsIcon, 
  Search, 
  Bell, 
  Plus, 
  LogOut, 
  Menu, 
  X, 
  Sun, 
  Moon, 
  ArrowLeft,
  ChevronDown
} from 'lucide-react';
import { Logo, CubeIcon } from '../ui/Logo';
import { Button } from '../ui/Button';
import { MOCK_USER, MOCK_STATS } from '../../data/mock';

export const AppLayout = ({ children, title = 'Dashboard' }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showNotifications, setShowNotifications] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return document.documentElement.classList.contains('dark') || 
           localStorage.getItem('claimbox-theme') === 'dark';
  });

  const location = useLocation();
  const navigate = useNavigate();

  const toggleTheme = () => {
    const next = !isDarkMode;
    setIsDarkMode(next);
    if (next) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('claimbox-theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('claimbox-theme', 'light');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('claimbox-user');
    navigate('/login');
  };

  const navItems = [
    { label: 'Dashboard', path: '/dashboard', icon: <LayoutDashboard className="w-4 h-4" /> },
    { label: 'Purchases', path: '/purchases', icon: <ShoppingBag className="w-4 h-4" /> },
    { label: 'Warranties', path: '/warranties', icon: <ShieldCheck className="w-4 h-4" /> },
    { label: 'Documents', path: '/documents', icon: <FileText className="w-4 h-4" /> },
    { label: 'Profile', path: '/profile', icon: <User className="w-4 h-4" /> },
    { label: 'Settings', path: '/settings', icon: <SettingsIcon className="w-4 h-4" /> },
  ];

  return (
    <div className="min-h-screen bg-[#0E0E0E] text-[#F5F1EA] flex font-sans">
      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex w-64 flex-col justify-between bg-[#121212] border-r border-white/8 p-5 shrink-0 select-none">
        <div className="space-y-6">
          {/* Logo */}
          <div className="flex items-center justify-between px-2">
            <Logo to="/dashboard" dark={true} size="md" />
            <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-[#D4A95C]/15 text-[#D4A95C] border border-[#D4A95C]/30">
              PRO
            </span>
          </div>

          {/* Nav Items */}
          <nav className="space-y-1 text-sm font-medium">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path || 
                (item.path === '/purchases' && location.pathname.startsWith('/purchases/'));

              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl transition-all ${
                    isActive
                      ? 'bg-white/10 text-white font-semibold shadow-xs border border-white/10'
                      : 'text-neutral-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span className={isActive ? 'text-[#D4A95C]' : 'text-neutral-400'}>
                    {item.icon}
                  </span>
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Sidebar Bottom: Back to Website & User Status */}
        <div className="pt-4 border-t border-white/8 space-y-3">
          <Link
            to="/"
            className="flex items-center gap-2 text-xs text-neutral-400 hover:text-[#D4A95C] transition-colors px-2"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Landing Page</span>
          </Link>

          <div className="flex items-center justify-between p-2 rounded-xl bg-white/5 border border-white/6">
            <div className="flex items-center gap-2.5 min-w-0">
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-amber-500 to-amber-200 text-[#111] font-bold text-xs flex items-center justify-center shrink-0 border border-white/20">
                A
              </div>
              <div className="min-w-0">
                <p className="text-xs font-semibold text-white truncate">{MOCK_USER.name}</p>
                <p className="text-[10px] text-neutral-400 truncate">{MOCK_USER.email}</p>
              </div>
            </div>

            <button
              onClick={handleLogout}
              title="Sign Out"
              className="p-1.5 rounded-lg text-neutral-400 hover:text-red-400 hover:bg-red-500/10 transition-colors"
            >
              <LogOut className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content Container */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Top Navbar */}
        <header className="h-16 bg-[#121212]/80 backdrop-blur-md border-b border-white/8 px-4 sm:px-8 flex items-center justify-between gap-4 sticky top-0 z-30">
          {/* Left: Mobile hamburger & Page Title */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden p-2 rounded-lg bg-white/5 border border-white/10 text-neutral-300"
            >
              <Menu className="w-5 h-5" />
            </button>
            <h1 className="text-base sm:text-lg font-bold text-white tracking-tight">{title}</h1>
          </div>

          {/* Search Input in Topbar */}
          <div className="hidden md:flex items-center flex-1 max-w-md mx-4">
            <div className="relative w-full">
              <Search className="w-4 h-4 text-neutral-500 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search purchases, invoices, serial numbers..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-xl pl-9 pr-4 py-1.5 text-xs text-neutral-200 placeholder-neutral-500 focus:outline-none focus:border-[#D4A95C]/50 transition-colors"
              />
            </div>
          </div>

          {/* Right Action Icons */}
          <div className="flex items-center gap-2.5">
            {/* Quick Add Button */}
            <Link
              to="/purchases"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white text-black hover:bg-neutral-200 font-semibold text-xs transition-colors cursor-pointer shadow-sm"
            >
              <Plus className="w-3.5 h-3.5 stroke-[2.5]" />
              <span className="hidden sm:inline">Add Purchase</span>
            </Link>

            {/* Notifications Bell */}
            <div className="relative">
              <button
                onClick={() => setShowNotifications(!showNotifications)}
                className="w-8 h-8 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-neutral-300 transition-colors relative"
              >
                <Bell className="w-4 h-4" />
                <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              </button>

              {/* Notification Popover */}
              {showNotifications && (
                <div className="absolute right-0 mt-2 w-72 bg-[#181818] border border-white/12 rounded-2xl p-4 shadow-2xl z-50 text-left">
                  <div className="flex items-center justify-between pb-2 mb-2 border-b border-white/8">
                    <span className="text-xs font-bold text-white">Notifications</span>
                    <span className="text-[10px] text-[#D4A95C]">{MOCK_STATS.expiringSoon} Expiring Soon</span>
                  </div>
                  <div className="space-y-2 text-xs">
                    <div className="p-2 rounded-lg bg-amber-500/10 border border-amber-500/20 text-neutral-200">
                      <p className="font-semibold text-amber-400">Sony WH-CH520</p>
                      <p className="text-[11px] text-neutral-400">Warranty expires in 18 days (22 Oct 2026).</p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="w-8 h-8 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-neutral-300 transition-colors"
            >
              {isDarkMode ? <Sun className="w-4 h-4 text-[#D4A95C]" /> : <Moon className="w-4 h-4" />}
            </button>
          </div>
        </header>

        {/* Scrollable Main View Area */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-8">
          <div className="max-w-6xl mx-auto">
            {children}
          </div>
        </main>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex">
          <div 
            className="fixed inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="relative w-72 bg-[#121212] border-r border-white/10 p-5 flex flex-col justify-between z-10">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <Logo to="/dashboard" dark={true} size="md" />
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1 rounded-lg text-neutral-400 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <nav className="space-y-1 text-sm font-medium">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-neutral-300 hover:text-white hover:bg-white/10"
                  >
                    {item.icon}
                    <span>{item.label}</span>
                  </Link>
                ))}
              </nav>
            </div>

            <div className="pt-4 border-t border-white/8 space-y-3">
              <Link
                to="/"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2 text-xs text-neutral-400 hover:text-[#D4A95C]"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Return to Landing Page</span>
              </Link>
              <button
                onClick={handleLogout}
                className="w-full flex items-center justify-center gap-2 py-2 rounded-xl bg-red-500/10 text-red-400 border border-red-500/20 text-xs font-semibold"
              >
                <LogOut className="w-4 h-4" />
                <span>Sign Out</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AppLayout;
