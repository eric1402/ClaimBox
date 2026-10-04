// src/pages/Warranties.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  AlertTriangle, 
  Clock, 
  ArrowRight, 
  CheckCircle, 
  XCircle, 
  Calendar,
  AlertCircle
} from 'lucide-react';
import AppLayout from '../components/layout/AppLayout';
import { 
  MacBookThumbnail, 
  HeadphonesThumbnail, 
  MonitorThumbnail, 
  PhoneThumbnail,
  HighFiHeadphones
} from '../components/ui/SVGs';
import { MOCK_PURCHASES, MOCK_STATS, getDaysDifference, formatDaysRemaining } from '../data/mock';

export const Warranties = () => {
  const [tab, setTab] = useState('all');

  const expiringList = MOCK_PURCHASES.filter(p => p.status === 'Expiring');
  const activeList = MOCK_PURCHASES.filter(p => p.status === 'Active');
  const expiredList = MOCK_PURCHASES.filter(p => p.status === 'Expired');

  return (
    <AppLayout title="Warranties">
      <div className="space-y-6 text-left">
        {/* Top Summary Banner */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 rounded-2xl bg-[#141414] border border-white/8">
          <div>
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              Warranty Tracker
            </h2>
            <p className="text-xs text-neutral-400 mt-1">
              Automated expiry countdowns computed daily. Never let coverage lapse unintentionally.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs text-neutral-400">
              <strong className="text-white">{MOCK_STATS.activeWarranties}</strong> active • <strong className="text-amber-400">{MOCK_STATS.expiringSoon}</strong> expiring soon
            </span>
          </div>
        </div>

        {/* Priority Alert Box for Expiring Soon */}
        {expiringList.length > 0 && (
          <div className="p-5 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
                <AlertTriangle className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-white">
                  Attention Required: {expiringList[0].name}
                </h3>
                <p className="text-xs text-neutral-300">
                  Warranty expires in <strong className="text-amber-400">{getDaysDifference(expiringList[0].warrantyExpiry)} days</strong> ({expiringList[0].warrantyExpiryFormatted}). Check device condition before expiry!
                </p>
              </div>
            </div>

            <Link
              to={`/purchases/${expiringList[0].id}`}
              className="px-4 py-2 rounded-xl bg-amber-400 text-black hover:bg-amber-300 font-semibold text-xs transition-colors self-start md:self-auto shrink-0 shadow-sm"
            >
              View Warranty Details
            </Link>
          </div>
        )}

        {/* Tab Filters */}
        <div className="flex items-center gap-2 border-b border-white/8 pb-3">
          <button
            onClick={() => setTab('all')}
            className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-colors cursor-pointer ${
              tab === 'all' ? 'bg-white text-black font-semibold' : 'text-neutral-400 hover:text-white'
            }`}
          >
            All Items ({MOCK_PURCHASES.length})
          </button>
          <button
            onClick={() => setTab('active')}
            className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-colors cursor-pointer ${
              tab === 'active' ? 'bg-white text-black font-semibold' : 'text-neutral-400 hover:text-white'
            }`}
          >
            Active ({activeList.length})
          </button>
          <button
            onClick={() => setTab('expiring')}
            className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-colors cursor-pointer ${
              tab === 'expiring' ? 'bg-white text-black font-semibold' : 'text-neutral-400 hover:text-white'
            }`}
          >
            Expiring Soon ({expiringList.length})
          </button>
          <button
            onClick={() => setTab('expired')}
            className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-colors cursor-pointer ${
              tab === 'expired' ? 'bg-white text-black font-semibold' : 'text-neutral-400 hover:text-white'
            }`}
          >
            Expired ({expiredList.length})
          </button>
        </div>

        {/* Warranty Cards List */}
        <div className="space-y-3">
          {MOCK_PURCHASES
            .filter(item => {
              if (tab === 'all') return true;
              if (tab === 'active') return item.status === 'Active';
              if (tab === 'expiring') return item.status === 'Expiring';
              if (tab === 'expired') return item.status === 'Expired';
              return true;
            })
            .map((item) => {
              const days = getDaysDifference(item.warrantyExpiry);
              const progressPct = Math.min(100, Math.max(0, Math.round((days / 365) * 100)));

              return (
                <div
                  key={item.id}
                  className="p-5 rounded-2xl bg-[#141414] border border-white/8 hover:border-white/15 transition-all flex flex-col md:flex-row md:items-center justify-between gap-4"
                >
                  <div className="flex items-center gap-4 min-w-0">
                    {item.iconType === 'laptop' && <MacBookThumbnail className="w-10 h-10" />}
                    {item.iconType === 'headphones' && <HeadphonesThumbnail className="w-10 h-10" />}
                    {item.iconType === 'monitor' && <MonitorThumbnail className="w-10 h-10" />}
                    {item.iconType === 'phone' && <PhoneThumbnail className="w-10 h-10" />}
                    {item.iconType === 'keyboard' && <MacBookThumbnail className="w-10 h-10" />}

                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <h4 className="text-sm font-bold text-white truncate">{item.name}</h4>
                        <span className={`text-[10px] px-2 py-0.5 rounded-full font-semibold ${
                          item.status === 'Active'
                            ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30'
                            : item.status === 'Expiring'
                            ? 'bg-amber-500/15 text-amber-400 border border-amber-500/30'
                            : 'bg-red-500/15 text-red-400 border border-red-500/30'
                        }`}>
                          {item.status}
                        </span>
                      </div>
                      <p className="text-xs text-neutral-400 mt-0.5">
                        Purchased {item.purchaseDateFormatted} from {item.seller}
                      </p>
                    </div>
                  </div>

                  {/* Progress bar and expiry meta */}
                  <div className="flex flex-col md:flex-row md:items-center gap-4 md:w-1/2 justify-end">
                    <div className="flex-1 max-w-xs space-y-1">
                      <div className="flex justify-between text-[11px]">
                        <span className="text-neutral-400">Coverage Duration</span>
                        <span className="font-semibold text-white">{formatDaysRemaining(item.warrantyExpiry)}</span>
                      </div>
                      <div className="w-full h-2 rounded-full bg-white/5 overflow-hidden">
                        <div
                          className={`h-full rounded-full transition-all duration-500 ${
                            item.status === 'Active'
                              ? 'bg-emerald-400'
                              : item.status === 'Expiring'
                              ? 'bg-amber-400'
                              : 'bg-red-500'
                          }`}
                          style={{ width: `${progressPct}%` }}
                        />
                      </div>
                      <div className="flex justify-between text-[10px] text-neutral-500">
                        <span>Starts: {item.purchaseDateFormatted}</span>
                        <span>Ends: {item.warrantyExpiryFormatted}</span>
                      </div>
                    </div>

                    <Link
                      to={`/purchases/${item.id}`}
                      className="px-3.5 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-white text-xs font-semibold border border-white/8 transition-colors shrink-0 text-center"
                    >
                      View Card
                    </Link>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </AppLayout>
  );
};

export default Warranties;
