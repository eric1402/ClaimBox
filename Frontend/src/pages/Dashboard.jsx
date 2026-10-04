// src/pages/Dashboard.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ShoppingBag, 
  ShieldCheck, 
  AlertTriangle, 
  XCircle, 
  ArrowRight, 
  ChevronRight, 
  Plus, 
  FileText,
  Download,
  Calendar
} from 'lucide-react';
import AppLayout from '../components/layout/AppLayout';
import { 
  MacBookThumbnail, 
  HeadphonesThumbnail, 
  MonitorThumbnail, 
  PhoneThumbnail, 
  HighFiHeadphones 
} from '../components/ui/SVGs';
import { MOCK_PURCHASES, MOCK_STATS, MOCK_DOCUMENTS, formatDaysRemaining } from '../data/mock';

export const Dashboard = () => {
  const [filter, setFilter] = useState('All');
  const [showAddModal, setShowAddModal] = useState(false);

  const filteredPurchases = MOCK_PURCHASES.filter((item) => {
    if (filter === 'All') return true;
    return item.status === filter;
  });

  const expiringItem = MOCK_PURCHASES.find(p => p.id === 'sony-wh-ch520');

  return (
    <AppLayout title="Dashboard">
      <div className="space-y-6 text-left">
        {/* Top Greeting Banner */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 rounded-2xl bg-[#141414] border border-white/8 shadow-sm">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
              Good Morning, Ayush <span className="animate-bounce inline-block">👋</span>
            </h2>
            <p className="text-xs sm:text-sm text-neutral-400 mt-1">
              Here is what is happening with your purchases and warranties today.
            </p>
          </div>

          <button
            onClick={() => setShowAddModal(true)}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white text-black hover:bg-neutral-200 text-xs font-semibold transition-all shadow-md self-start sm:self-auto cursor-pointer"
          >
            <Plus className="w-4 h-4 stroke-[2.5]" />
            <span>Add New Purchase</span>
          </button>
        </div>

        {/* 4 Stat Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          <div className="p-4 rounded-2xl bg-[#141414] border border-white/8">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-neutral-400 font-medium">Total Purchases</span>
              <ShoppingBag className="w-4 h-4 text-neutral-400" />
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white">{MOCK_STATS.totalPurchases}</div>
            <div className="text-[10px] text-neutral-500 mt-1">Across 4 categories</div>
          </div>

          <div className="p-4 rounded-2xl bg-[#141414] border border-white/8">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-neutral-400 font-medium">Active Warranties</span>
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400">{MOCK_STATS.activeWarranties}</div>
            <div className="text-[10px] text-neutral-500 mt-1">Full coverage active</div>
          </div>

          <div className="p-4 rounded-2xl bg-[#141414] border border-white/8">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-neutral-400 font-medium">Expiring Soon</span>
              <AlertTriangle className="w-4 h-4 text-amber-400" />
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-amber-400">{MOCK_STATS.expiringSoon}</div>
            <div className="text-[10px] text-neutral-500 mt-1">Needs attention in 30 days</div>
          </div>

          <div className="p-4 rounded-2xl bg-[#141414] border border-white/8">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-neutral-400 font-medium">Expired</span>
              <XCircle className="w-4 h-4 text-red-400" />
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-red-400">{MOCK_STATS.expired}</div>
            <div className="text-[10px] text-neutral-500 mt-1">Eligible for renewal</div>
          </div>
        </div>

        {/* Main 2-column Grid: Purchases on Left, Warranty Alert & Docs on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Recent Purchases (8 cols) */}
          <div className="lg:col-span-8 bg-[#141414] border border-white/8 rounded-2xl p-5 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h3 className="text-base font-bold text-white">Recent Purchases</h3>
                <p className="text-xs text-neutral-400">Click any purchase to view details and invoices</p>
              </div>

              {/* Status filter pills */}
              <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
                {['All', 'Active', 'Expiring', 'Expired'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setFilter(tab)}
                    className={`px-3 py-1 rounded-full text-xs font-medium transition-colors cursor-pointer ${
                      filter === tab
                        ? 'bg-white text-black font-semibold'
                        : 'bg-white/5 text-neutral-400 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            {/* List */}
            <div className="space-y-2">
              {filteredPurchases.map((item) => (
                <Link
                  key={item.id}
                  to={`/purchases/${item.id}`}
                  className="flex items-center justify-between p-3.5 rounded-xl bg-black/40 border border-white/6 hover:border-[#D4A95C]/40 hover:bg-white/5 transition-all group"
                >
                  <div className="flex items-center gap-3.5 min-w-0">
                    {item.iconType === 'laptop' && <MacBookThumbnail className="w-8 h-8" />}
                    {item.iconType === 'headphones' && <HeadphonesThumbnail className="w-8 h-8" />}
                    {item.iconType === 'monitor' && <MonitorThumbnail className="w-8 h-8" />}
                    {item.iconType === 'phone' && <PhoneThumbnail className="w-8 h-8" />}
                    {item.iconType === 'keyboard' && <MacBookThumbnail className="w-8 h-8" />}

                    <div className="min-w-0">
                      <p className="text-xs sm:text-sm font-semibold text-white group-hover:text-[#D4A95C] transition-colors truncate">
                        {item.name}
                      </p>
                      <p className="text-[11px] text-neutral-400 truncate">
                        {item.subTitle} • Purchased {item.purchaseDateFormatted}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 shrink-0">
                    <span className="text-xs sm:text-sm font-bold text-white">
                      ₹{item.price.toLocaleString('en-IN')}
                    </span>
                    <span className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${
                      item.status === 'Active'
                        ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30'
                        : item.status === 'Expiring'
                        ? 'bg-amber-500/15 text-amber-400 border border-amber-500/30'
                        : 'bg-red-500/15 text-red-400 border border-red-500/30'
                    }`}>
                      {item.status}
                    </span>
                    <ChevronRight className="w-4 h-4 text-neutral-500 group-hover:text-white transition-colors" />
                  </div>
                </Link>
              ))}
            </div>

            <div className="pt-2 flex justify-end">
              <Link 
                to="/purchases" 
                className="text-xs text-neutral-400 hover:text-[#D4A95C] flex items-center gap-1 font-medium transition-colors"
              >
                <span>View all {MOCK_PURCHASES.length} purchases</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Right Column: Expiring Warranty & Documents (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            {/* Warranty Expiring Soon Card */}
            <div className="bg-[#141414] border border-white/8 rounded-2xl p-4.5 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-1">
                  <h3 className="text-xs font-bold text-white">Warranty Expiring Soon</h3>
                  <span className="text-[10px] text-amber-400 font-semibold">Priority</span>
                </div>
                <p className="text-[11px] text-neutral-400 mb-3">2 items need your attention.</p>
              </div>

              {/* Sony WH-CH520 preview */}
              <div className="bg-[#0B0B0B] border border-white/6 rounded-xl p-3 flex flex-col items-center justify-center text-center">
                <HighFiHeadphones className="w-16 h-16 my-1" />
                <span className="text-xs font-semibold text-white mt-1">Sony WH-CH520</span>
                <span className="inline-block mt-1 text-[10px] px-2.5 py-0.5 rounded-full bg-amber-500/15 text-amber-400 border border-amber-500/30 font-medium">
                  {formatDaysRemaining(expiringItem?.warrantyExpiry || '2026-10-22')}
                </span>
                <span className="text-[10px] text-neutral-400 mt-1">
                  Ends on {expiringItem?.warrantyExpiryFormatted}
                </span>
              </div>

              <Link
                to={`/purchases/${expiringItem?.id || 'sony-wh-ch520'}`}
                className="mt-3 w-full py-2 text-xs font-semibold rounded-xl bg-white/10 hover:bg-white/15 text-white border border-white/10 flex items-center justify-center gap-1.5 transition-colors"
              >
                <span>View Details</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Quick Documents Preview */}
            <div className="bg-[#141414] border border-white/8 rounded-2xl p-4.5 space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="text-xs font-bold text-white">Recent Documents</h3>
                <Link to="/documents" className="text-[10px] text-[#D4A95C] hover:underline">
                  View all
                </Link>
              </div>

              <div className="space-y-2 text-xs">
                {MOCK_DOCUMENTS.slice(0, 3).map((doc) => (
                  <div 
                    key={doc.id}
                    className="flex items-center justify-between p-2 rounded-lg bg-black/40 border border-white/6"
                  >
                    <div className="flex items-center gap-2 min-w-0">
                      <div className={`w-5 h-6 rounded flex items-center justify-center text-[8px] font-bold shrink-0 ${
                        doc.type === 'PDF' ? 'bg-red-500/20 text-red-400' : 'bg-blue-500/20 text-blue-400'
                      }`}>
                        {doc.type}
                      </div>
                      <div className="min-w-0">
                        <p className="text-[11px] font-medium text-white truncate">{doc.title}</p>
                        <p className="text-[9px] text-neutral-400 truncate">{doc.size}</p>
                      </div>
                    </div>
                    <button 
                      onClick={() => alert(`Simulated download for: ${doc.title}`)} 
                      className="p-1 rounded text-neutral-400 hover:text-white hover:bg-white/10"
                    >
                      <Download className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add Purchase Modal Simulation */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-[#161616] border border-white/12 rounded-3xl p-6 max-w-md w-full text-left space-y-4 shadow-2xl">
            <div className="flex items-center justify-between pb-3 border-b border-white/8">
              <h3 className="text-base font-bold text-white">Add New Purchase</h3>
              <button 
                onClick={() => setShowAddModal(false)}
                className="p-1 rounded-lg text-neutral-400 hover:text-white"
              >
                ✕
              </button>
            </div>
            <div className="space-y-3 text-xs">
              <div>
                <label className="block text-neutral-300 mb-1">Product Name</label>
                <input 
                  type="text" 
                  placeholder="e.g. iPad Pro M4" 
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-white" 
                />
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-neutral-300 mb-1">Price (₹)</label>
                  <input 
                    type="number" 
                    placeholder="99900" 
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-white" 
                  />
                </div>
                <div>
                  <label className="block text-neutral-300 mb-1">Category</label>
                  <select className="w-full bg-[#202020] border border-white/10 rounded-xl px-3 py-2 text-white">
                    <option>Tablet</option>
                    <option>Laptop</option>
                    <option>Phone</option>
                    <option>Audio</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-neutral-300 mb-1">Upload Receipt / Invoice</label>
                <div className="border border-dashed border-white/20 rounded-xl p-4 text-center text-neutral-400 hover:border-[#D4A95C]/40 cursor-pointer">
                  Drag invoice PDF here or click to browse
                </div>
              </div>
            </div>
            <div className="flex items-center justify-end gap-2 pt-2">
              <button 
                onClick={() => setShowAddModal(false)}
                className="px-4 py-2 rounded-xl text-neutral-400 hover:text-white text-xs font-semibold"
              >
                Cancel
              </button>
              <button 
                onClick={() => {
                  alert('Purchase added successfully!');
                  setShowAddModal(false);
                }}
                className="px-4 py-2 rounded-xl bg-white text-black hover:bg-neutral-200 text-xs font-semibold shadow-md"
              >
                Save Purchase
              </button>
            </div>
          </div>
        </div>
      )}
    </AppLayout>
  );
};

export default Dashboard;
