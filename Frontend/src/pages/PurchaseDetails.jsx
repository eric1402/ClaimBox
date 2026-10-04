// src/pages/PurchaseDetails.jsx
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  Download, 
  FileText, 
  Calendar, 
  Store, 
  Clock, 
  ShieldCheck, 
  AlertTriangle, 
  FileCheck, 
  Tag, 
  Share2, 
  Trash2,
  CheckCircle2
} from 'lucide-react';
import AppLayout from '../components/layout/AppLayout';
import { 
  MacBookThumbnail, 
  HeadphonesThumbnail, 
  MonitorThumbnail, 
  PhoneThumbnail 
} from '../components/ui/SVGs';
import { MOCK_PURCHASES, getDaysDifference, formatDaysRemaining } from '../data/mock';

export const PurchaseDetails = () => {
  const { id } = useParams();
  const [claimModalOpen, setClaimModalOpen] = useState(false);
  const [claimSuccess, setClaimSuccess] = useState(false);

  const purchase = MOCK_PURCHASES.find((p) => p.id === id) || MOCK_PURCHASES[0];
  const daysLeft = getDaysDifference(purchase.warrantyExpiry);

  const handleClaimSubmit = (e) => {
    e.preventDefault();
    setClaimSuccess(true);
    setTimeout(() => {
      setClaimSuccess(false);
      setClaimModalOpen(false);
      alert('Claim package generated! All invoices and serial numbers compiled into PDF.');
    }, 1200);
  };

  return (
    <AppLayout title={purchase.name}>
      <div className="space-y-6 text-left">
        {/* Breadcrumb & Navigation */}
        <div className="flex items-center justify-between">
          <Link
            to="/purchases"
            className="inline-flex items-center gap-2 text-xs text-neutral-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Purchases</span>
          </Link>

          <div className="flex items-center gap-2">
            <button 
              onClick={() => alert('Link copied to clipboard!')} 
              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-neutral-400 hover:text-white text-xs border border-white/8 transition-colors"
            >
              <Share2 className="w-4 h-4" />
            </button>
            <button 
              onClick={() => setClaimModalOpen(true)}
              className="px-4 py-2 rounded-xl bg-[#D4A95C] text-black hover:bg-[#c2964b] font-semibold text-xs transition-colors shadow-md cursor-pointer"
            >
              Claim Warranty
            </button>
          </div>
        </div>

        {/* Top Product Header Card */}
        <div className="p-6 rounded-3xl bg-[#141414] border border-white/8 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-sm">
          <div className="flex items-center gap-4">
            {purchase.iconType === 'laptop' && <MacBookThumbnail className="w-14 h-14" />}
            {purchase.iconType === 'headphones' && <HeadphonesThumbnail className="w-14 h-14" />}
            {purchase.iconType === 'monitor' && <MonitorThumbnail className="w-14 h-14" />}
            {purchase.iconType === 'phone' && <PhoneThumbnail className="w-14 h-14" />}
            {purchase.iconType === 'keyboard' && <MacBookThumbnail className="w-14 h-14" />}

            <div>
              <div className="flex items-center gap-3">
                <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  {purchase.name}
                </h2>
                <span className={`text-[10px] px-2.5 py-0.5 rounded-full font-semibold ${
                  purchase.status === 'Active'
                    ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30'
                    : purchase.status === 'Expiring'
                    ? 'bg-amber-500/15 text-amber-400 border border-amber-500/30'
                    : 'bg-red-500/15 text-red-400 border border-red-500/30'
                }`}>
                  {purchase.status}
                </span>
              </div>
              <p className="text-xs text-neutral-400 mt-1">{purchase.subTitle} • S/N: {purchase.serialNumber}</p>
            </div>
          </div>

          <div className="text-left md:text-right">
            <span className="text-[11px] text-neutral-400 block">Purchase Value</span>
            <span className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              ₹{purchase.price.toLocaleString('en-IN')}
            </span>
          </div>
        </div>

        {/* Main Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Details & Documents (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Metadata Grid */}
            <div className="p-5 rounded-2xl bg-[#141414] border border-white/8 space-y-4">
              <h3 className="text-sm font-bold text-white">Purchase & Store Information</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
                <div className="space-y-1">
                  <span className="text-neutral-500 text-[10px] flex items-center gap-1">
                    <Calendar className="w-3 h-3" /> Purchase Date
                  </span>
                  <p className="font-semibold text-white">{purchase.purchaseDateFormatted}</p>
                </div>
                <div className="space-y-1">
                  <span className="text-neutral-500 text-[10px] flex items-center gap-1">
                    <Store className="w-3 h-3" /> Seller / Store
                  </span>
                  <p className="font-semibold text-white">{purchase.seller}</p>
                </div>
                <div className="space-y-1">
                  <span className="text-neutral-500 text-[10px] flex items-center gap-1">
                    <Clock className="w-3 h-3" /> Warranty Duration
                  </span>
                  <p className="font-semibold text-white">{purchase.warrantyPeriod}</p>
                </div>
                <div className="space-y-1">
                  <span className="text-neutral-500 text-[10px] flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3" /> Expiry Date
                  </span>
                  <p className="font-semibold text-white">{purchase.warrantyExpiryFormatted}</p>
                </div>
              </div>

              {purchase.notes && (
                <div className="pt-3 border-t border-white/6 text-xs">
                  <span className="text-neutral-500 text-[10px] block mb-1">Notes</span>
                  <p className="text-neutral-300 leading-relaxed">{purchase.notes}</p>
                </div>
              )}
            </div>

            {/* Documents List */}
            <div className="p-5 rounded-2xl bg-[#141414] border border-white/8 space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-bold text-white">
                  Attached Documents ({purchase.documents.length})
                </h3>
                <span className="text-[10px] text-neutral-400">Encrypted Cloud Storage</span>
              </div>

              <div className="space-y-2">
                {purchase.documents.map((doc) => (
                  <div
                    key={doc.id}
                    className="flex items-center justify-between p-3 rounded-xl bg-black/40 border border-white/6 hover:border-white/12 transition-all"
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-7 h-9 rounded-lg flex items-center justify-center text-[9px] font-bold ${
                        doc.type === 'pdf' ? 'bg-red-500/20 text-red-400' : 'bg-blue-500/20 text-blue-400'
                      }`}>
                        {doc.type.toUpperCase()}
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-white">{doc.name}</p>
                        <p className="text-[10px] text-neutral-400">{doc.size} • Uploaded {doc.uploadedAt}</p>
                      </div>
                    </div>

                    <button
                      onClick={() => alert(`Downloaded file: ${doc.name}`)}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-white text-xs border border-white/10 transition-colors"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Download</span>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Warranty Status Gauge (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-3xl bg-[#141414] border border-white/8 flex flex-col items-center justify-between text-center">
              <div className="w-full flex items-center justify-between mb-4">
                <h3 className="text-sm font-bold text-white">Warranty Status</h3>
                <span className="text-[10px] text-[#D4A95C] font-semibold">Active Tracker</span>
              </div>

              {/* Circular Gauge */}
              <div className="relative my-4 w-36 h-36 flex items-center justify-center">
                <svg className="w-full h-full -rotate-90 transform" viewBox="0 0 100 100">
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    stroke="rgba(255, 255, 255, 0.08)"
                    strokeWidth="8"
                    fill="none"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    stroke={daysLeft < 0 ? '#EF4444' : daysLeft <= 30 ? '#F59E0B' : '#10B981'}
                    strokeWidth="8"
                    strokeDasharray="251.2"
                    strokeDashoffset={daysLeft < 0 ? 0 : Math.max(0, 251.2 - (daysLeft / 365) * 251.2)}
                    strokeLinecap="round"
                    fill="none"
                  />
                </svg>

                <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                  <span className="text-3xl font-extrabold text-white leading-none">
                    {daysLeft < 0 ? '0' : daysLeft}
                  </span>
                  <span className="text-[10px] text-neutral-400 font-medium mt-1">
                    {daysLeft < 0 ? 'Expired' : 'days remaining'}
                  </span>
                </div>
              </div>

              {/* Start & End Dates */}
              <div className="w-full grid grid-cols-2 gap-2 pt-4 border-t border-white/8 text-xs">
                <div>
                  <span className="text-neutral-500 text-[10px] block">Start Date</span>
                  <span className="text-neutral-200 font-semibold">{purchase.purchaseDateFormatted}</span>
                </div>
                <div>
                  <span className="text-neutral-500 text-[10px] block">Expiry Date</span>
                  <span className="text-neutral-200 font-semibold">{purchase.warrantyExpiryFormatted}</span>
                </div>
              </div>

              {/* Status Banner */}
              <div className={`mt-5 w-full p-3 rounded-xl text-xs font-medium flex items-center justify-center gap-2 ${
                daysLeft > 30 
                  ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' 
                  : daysLeft > 0 
                  ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20' 
                  : 'bg-red-500/10 text-red-400 border border-red-500/20'
              }`}>
                <span>●</span>
                <span>{formatDaysRemaining(purchase.warrantyExpiry)}</span>
              </div>
            </div>

            {/* Quick Action Box */}
            <div className="p-5 rounded-2xl bg-[#141414] border border-white/8 space-y-3">
              <h4 className="text-xs font-bold text-white">Need to claim warranty?</h4>
              <p className="text-xs text-neutral-400 leading-relaxed">
                ClaimBox prepares a one-click proof-of-purchase package with your invoice, serial number, and purchase timestamp.
              </p>
              <button
                onClick={() => setClaimModalOpen(true)}
                className="w-full py-2.5 rounded-xl bg-white text-black hover:bg-neutral-200 font-semibold text-xs transition-colors"
              >
                Generate Claim Packet
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Claim Modal Simulation */}
      {claimModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-[#161616] border border-white/12 rounded-3xl p-6 max-w-md w-full text-left space-y-4 shadow-2xl">
            <div className="flex items-center justify-between pb-3 border-b border-white/8">
              <h3 className="text-base font-bold text-white">File Warranty Claim</h3>
              <button 
                onClick={() => setClaimModalOpen(false)}
                className="p-1 rounded-lg text-neutral-400 hover:text-white"
              >
                ✕
              </button>
            </div>

            {claimSuccess ? (
              <div className="py-8 text-center space-y-2">
                <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto animate-bounce" />
                <h4 className="text-base font-bold text-white">Claim Packet Ready!</h4>
                <p className="text-xs text-neutral-400">All documents and serial numbers packaged.</p>
              </div>
            ) : (
              <form onSubmit={handleClaimSubmit} className="space-y-3 text-xs">
                <div>
                  <label className="block text-neutral-300 mb-1">Issue Description</label>
                  <textarea 
                    rows={3} 
                    placeholder="Describe the hardware or software problem..." 
                    className="w-full bg-white/5 border border-white/10 rounded-xl p-2.5 text-white placeholder-neutral-500" 
                    required 
                  />
                </div>
                <div className="p-3 rounded-xl bg-white/5 border border-white/8 text-[11px] text-neutral-400 space-y-1">
                  <p className="font-semibold text-white">Documents to be attached:</p>
                  {purchase.documents.map(d => (
                    <p key={d.id}>✓ {d.name}</p>
                  ))}
                  <p>✓ Serial Number: {purchase.serialNumber}</p>
                </div>
                <div className="flex items-center justify-end gap-2 pt-2">
                  <button 
                    type="button"
                    onClick={() => setClaimModalOpen(false)}
                    className="px-4 py-2 rounded-xl text-neutral-400 hover:text-white text-xs font-semibold"
                  >
                    Cancel
                  </button>
                  <button 
                    type="submit"
                    className="px-4 py-2 rounded-xl bg-[#D4A95C] text-black font-semibold text-xs shadow-md"
                  >
                    Generate & Submit
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </AppLayout>
  );
};

export default PurchaseDetails;
