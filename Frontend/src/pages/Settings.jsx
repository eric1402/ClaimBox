// src/pages/Settings.jsx
import React, { useState } from 'react';
import { 
  Bell, 
  Globe, 
  Shield, 
  Download, 
  CheckCircle,
  Database
} from 'lucide-react';
import AppLayout from '../components/layout/AppLayout';
import { MOCK_PURCHASES } from '../data/mock';

export const Settings = () => {
  const [notify30Days, setNotify30Days] = useState(true);
  const [notify7Days, setNotify7Days] = useState(true);
  const [notifyExpiryDay, setNotifyExpiryDay] = useState(true);
  const [currency, setCurrency] = useState('INR');
  const [exportNotice, setExportNotice] = useState(false);

  const handleExportData = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(MOCK_PURCHASES, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `claimbox_purchases_backup_${Date.now()}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
    setExportNotice(true);
    setTimeout(() => setExportNotice(false), 3000);
  };

  return (
    <AppLayout title="Settings">
      <div className="space-y-6 text-left max-w-3xl">
        <div>
          <h2 className="text-xl font-bold text-white">Application Settings</h2>
          <p className="text-xs text-neutral-400 mt-1">
            Customize warranty notifications, currency formatting, and data exports.
          </p>
        </div>

        {exportNotice && (
          <div className="p-3.5 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-xs flex items-center gap-2">
            <CheckCircle className="w-4 h-4 shrink-0" />
            <span>Purchases backup JSON exported successfully!</span>
          </div>
        )}

        {/* Notifications Settings */}
        <div className="p-6 rounded-3xl bg-[#141414] border border-white/8 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#D4A95C]">
              <Bell className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white">Warranty Expiry Reminders</h3>
              <p className="text-xs text-neutral-400">Choose when ClaimBox alerts you before warranties expire</p>
            </div>
          </div>

          <div className="space-y-3 pt-2 text-xs">
            <label className="flex items-center justify-between p-3 rounded-xl bg-black/40 border border-white/6 cursor-pointer">
              <div>
                <p className="font-semibold text-white">30 Days Prior Alert</p>
                <p className="text-[11px] text-neutral-400">Receive alert when warranty has 1 month remaining</p>
              </div>
              <input
                type="checkbox"
                checked={notify30Days}
                onChange={(e) => setNotify30Days(e.target.checked)}
                className="w-4 h-4 accent-[#D4A95C] cursor-pointer"
              />
            </label>

            <label className="flex items-center justify-between p-3 rounded-xl bg-black/40 border border-white/6 cursor-pointer">
              <div>
                <p className="font-semibold text-white">7 Days Urgent Notice</p>
                <p className="text-[11px] text-neutral-400">Urgent notification to test device condition</p>
              </div>
              <input
                type="checkbox"
                checked={notify7Days}
                onChange={(e) => setNotify7Days(e.target.checked)}
                className="w-4 h-4 accent-[#D4A95C] cursor-pointer"
              />
            </label>

            <label className="flex items-center justify-between p-3 rounded-xl bg-black/40 border border-white/6 cursor-pointer">
              <div>
                <p className="font-semibold text-white">Day of Expiry Notice</p>
                <p className="text-[11px] text-neutral-400">Final notice on the last day of coverage</p>
              </div>
              <input
                type="checkbox"
                checked={notifyExpiryDay}
                onChange={(e) => setNotifyExpiryDay(e.target.checked)}
                className="w-4 h-4 accent-[#D4A95C] cursor-pointer"
              />
            </label>
          </div>
        </div>

        {/* Currency & Region */}
        <div className="p-6 rounded-3xl bg-[#141414] border border-white/8 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#D4A95C]">
              <Globe className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white">Regional Preferences</h3>
              <p className="text-xs text-neutral-400">Default currency symbol and number formatting</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs pt-1">
            <div>
              <label className="block text-neutral-300 mb-1.5 font-medium">Currency</label>
              <select
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
                className="w-full bg-[#1C1C1C] border border-white/10 rounded-xl px-3.5 py-2.5 text-white"
              >
                <option value="INR">₹ INR (Indian Rupee)</option>
                <option value="USD">$ USD (US Dollar)</option>
                <option value="EUR">€ EUR (Euro)</option>
                <option value="GBP">£ GBP (British Pound)</option>
              </select>
            </div>

            <div>
              <label className="block text-neutral-300 mb-1.5 font-medium">Date Format</label>
              <select className="w-full bg-[#1C1C1C] border border-white/10 rounded-xl px-3.5 py-2.5 text-white">
                <option>DD MMM YYYY (e.g. 10 Jan 2026)</option>
                <option>YYYY-MM-DD</option>
                <option>MM/DD/YYYY</option>
              </select>
            </div>
          </div>
        </div>

        {/* Data Export & Backup */}
        <div className="p-6 rounded-3xl bg-[#141414] border border-white/8 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#D4A95C]">
              <Database className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white">Data Portability</h3>
              <p className="text-xs text-neutral-400">Your data stays yours. Export your complete vault anytime</p>
            </div>
          </div>

          <div className="pt-2">
            <button
              onClick={handleExportData}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white border border-white/10 text-xs font-semibold transition-colors cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>Export Purchases & Warranties (JSON)</span>
            </button>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default Settings;
