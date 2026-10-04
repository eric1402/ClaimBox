// src/pages/Profile.jsx
import React, { useState } from 'react';
import { User, Mail, Shield, HardDrive, CheckCircle2 } from 'lucide-react';
import AppLayout from '../components/layout/AppLayout';
import { MOCK_USER, MOCK_STATS } from '../data/mock';

export const Profile = () => {
  const [name, setName] = useState(MOCK_USER.name);
  const [email, setEmail] = useState(MOCK_USER.email);
  const [saved, setSaved] = useState(false);

  const handleSave = (e) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  return (
    <AppLayout title="User Profile">
      <div className="space-y-6 text-left max-w-3xl">
        {/* Top Profile Card */}
        <div className="p-6 rounded-3xl bg-[#141414] border border-white/8 flex flex-col sm:flex-row items-center gap-6">
          <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-amber-500 to-amber-200 text-[#111] font-extrabold text-2xl flex items-center justify-center border-2 border-white/20 shadow-xl shrink-0">
            A
          </div>

          <div className="flex-1 text-center sm:text-left">
            <div className="flex flex-col sm:flex-row sm:items-center gap-2">
              <h2 className="text-xl font-bold text-white">{name}</h2>
              <span className="inline-block text-[10px] px-2.5 py-0.5 rounded-full bg-[#D4A95C]/20 text-[#D4A95C] border border-[#D4A95C]/40 font-semibold self-center sm:self-auto">
                {MOCK_USER.plan}
              </span>
            </div>
            <p className="text-xs text-neutral-400 mt-1">{email}</p>
            <p className="text-[11px] text-neutral-500 mt-0.5">Member since {MOCK_USER.memberSince}</p>
          </div>
        </div>

        {saved && (
          <div className="p-3.5 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-xs flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4" />
            <span>Profile details saved successfully!</span>
          </div>
        )}

        {/* Stats and Usage */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-4 rounded-2xl bg-[#141414] border border-white/8">
            <span className="text-xs text-neutral-400 block mb-1">Purchases Tracked</span>
            <span className="text-2xl font-bold text-white">{MOCK_STATS.totalPurchases}</span>
          </div>

          <div className="p-4 rounded-2xl bg-[#141414] border border-white/8">
            <span className="text-xs text-neutral-400 block mb-1">Documents Stored</span>
            <span className="text-2xl font-bold text-white">6 files</span>
          </div>

          <div className="p-4 rounded-2xl bg-[#141414] border border-white/8">
            <span className="text-xs text-neutral-400 block mb-1">Storage Usage</span>
            <span className="text-2xl font-bold text-emerald-400">11.8 MB</span>
            <span className="text-[10px] text-neutral-500 block mt-0.5">of 5.0 GB available</span>
          </div>
        </div>

        {/* Edit Form */}
        <div className="p-6 rounded-3xl bg-[#141414] border border-white/8 space-y-4">
          <h3 className="text-sm font-bold text-white">Personal Information</h3>
          <form onSubmit={handleSave} className="space-y-4 text-xs">
            <div>
              <label className="block text-neutral-300 mb-1.5 font-medium">Full Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-3.5 py-2.5 text-white focus:outline-none focus:border-[#D4A95C]"
              />
            </div>

            <div>
              <label className="block text-neutral-300 mb-1.5 font-medium">Email Address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-3.5 py-2.5 text-white focus:outline-none focus:border-[#D4A95C]"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="px-5 py-2.5 rounded-xl bg-white text-black hover:bg-neutral-200 font-semibold text-xs shadow-md transition-colors cursor-pointer"
              >
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </AppLayout>
  );
};

export default Profile;
