// src/pages/Purchases.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, 
  Filter, 
  Plus, 
  ChevronRight, 
  Calendar, 
  Tag, 
  ShieldAlert, 
  ExternalLink 
} from 'lucide-react';
import AppLayout from '../components/layout/AppLayout';
import { 
  MacBookThumbnail, 
  HeadphonesThumbnail, 
  MonitorThumbnail, 
  PhoneThumbnail 
} from '../components/ui/SVGs';
import { MOCK_PURCHASES, formatDaysRemaining } from '../data/mock';

export const Purchases = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('All');
  const [status, setStatus] = useState('All');

  const categories = ['All', 'Laptop', 'Headphones', 'Monitor', 'Phone', 'Accessories'];
  const statuses = ['All', 'Active', 'Expiring', 'Expired'];

  const filteredItems = MOCK_PURCHASES.filter((item) => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          item.seller.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          item.brand.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCat = category === 'All' || item.category === category;
    const matchesStatus = status === 'All' || item.status === status;
    return matchesSearch && matchesCat && matchesStatus;
  });

  return (
    <AppLayout title="Purchases">
      <div className="space-y-6 text-left">
        {/* Top Controls */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-bold text-white">Your Purchases Vault</h2>
            <p className="text-xs text-neutral-400">
              {filteredItems.length} items found with stored receipts and active warranties
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button 
              onClick={() => alert('New purchase form ready')} 
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white text-black hover:bg-neutral-200 text-xs font-semibold transition-all shadow-md cursor-pointer"
            >
              <Plus className="w-4 h-4 stroke-[2.5]" />
              <span>Add Purchase</span>
            </button>
          </div>
        </div>

        {/* Filters and Search Bar */}
        <div className="p-4 rounded-2xl bg-[#141414] border border-white/8 space-y-3">
          <div className="flex flex-col sm:flex-row sm:items-center gap-3">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-neutral-500 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search by product name, brand, or store..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-xl pl-9 pr-3.5 py-2 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-[#D4A95C] transition-colors"
              />
            </div>

            {/* Status Tabs */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
              {statuses.map((st) => (
                <button
                  key={st}
                  onClick={() => setStatus(st)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-colors cursor-pointer shrink-0 ${
                    status === st
                      ? 'bg-white text-black font-semibold'
                      : 'bg-white/5 text-neutral-400 hover:text-white'
                  }`}
                >
                  {st}
                </button>
              ))}
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pt-1 border-t border-white/6">
            <span className="text-[11px] text-neutral-500 mr-2 shrink-0">Category:</span>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`px-2.5 py-1 rounded-lg text-[11px] font-medium transition-colors cursor-pointer shrink-0 ${
                  category === cat
                    ? 'bg-[#D4A95C]/20 text-[#D4A95C] border border-[#D4A95C]/40'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Purchases Grid / Table */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredItems.map((item) => (
            <Link
              key={item.id}
              to={`/purchases/${item.id}`}
              className="p-5 rounded-2xl bg-[#141414] border border-white/8 hover:border-[#D4A95C]/40 hover:bg-[#181818] transition-all flex flex-col justify-between group shadow-sm"
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="flex items-center gap-3 min-w-0">
                    {item.iconType === 'laptop' && <MacBookThumbnail className="w-10 h-10" />}
                    {item.iconType === 'headphones' && <HeadphonesThumbnail className="w-10 h-10" />}
                    {item.iconType === 'monitor' && <MonitorThumbnail className="w-10 h-10" />}
                    {item.iconType === 'phone' && <PhoneThumbnail className="w-10 h-10" />}
                    {item.iconType === 'keyboard' && <MacBookThumbnail className="w-10 h-10" />}
                    <div className="min-w-0">
                      <h3 className="text-sm font-bold text-white group-hover:text-[#D4A95C] transition-colors truncate">
                        {item.name}
                      </h3>
                      <p className="text-[11px] text-neutral-400 truncate">{item.subTitle}</p>
                    </div>
                  </div>

                  <span className={`text-[10px] px-2 py-0.5 rounded-full font-semibold shrink-0 ${
                    item.status === 'Active'
                      ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30'
                      : item.status === 'Expiring'
                      ? 'bg-amber-500/15 text-amber-400 border border-amber-500/30'
                      : 'bg-red-500/15 text-red-400 border border-red-500/30'
                  }`}>
                    {item.status}
                  </span>
                </div>

                <div className="py-2.5 my-2 border-y border-white/6 grid grid-cols-2 gap-2 text-xs">
                  <div>
                    <span className="text-[10px] text-neutral-500 block">Price</span>
                    <span className="font-bold text-white">₹{item.price.toLocaleString('en-IN')}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-neutral-500 block">Seller</span>
                    <span className="font-medium text-neutral-300">{item.seller}</span>
                  </div>
                </div>

                <div className="space-y-1 text-xs text-neutral-400">
                  <div className="flex items-center justify-between text-[11px]">
                    <span>Purchased:</span>
                    <span className="text-neutral-300">{item.purchaseDateFormatted}</span>
                  </div>
                  <div className="flex items-center justify-between text-[11px]">
                    <span>Warranty:</span>
                    <span className="text-neutral-300">{item.warrantyPeriod}</span>
                  </div>
                </div>
              </div>

              <div className="pt-3 mt-3 border-t border-white/6 flex items-center justify-between text-xs">
                <span className={`text-[11px] font-medium ${
                  item.status === 'Active' ? 'text-emerald-400' : item.status === 'Expiring' ? 'text-amber-400' : 'text-red-400'
                }`}>
                  {formatDaysRemaining(item.warrantyExpiry)}
                </span>
                <span className="text-[11px] text-[#D4A95C] font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  View <ChevronRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </AppLayout>
  );
};

export default Purchases;
