// src/pages/Documents.jsx
import React, { useState } from 'react';
import { 
  FileText, 
  Download, 
  Upload, 
  Search, 
  Eye, 
  Filter, 
  CheckCircle,
  FileCheck
} from 'lucide-react';
import AppLayout from '../components/layout/AppLayout';
import { MOCK_DOCUMENTS } from '../data/mock';

export const Documents = () => {
  const [search, setSearch] = useState('');
  const [docFilter, setDocFilter] = useState('All');
  const [docsList, setDocsList] = useState(MOCK_DOCUMENTS);
  const [uploadSuccess, setUploadSuccess] = useState(false);

  const filteredDocs = docsList.filter((doc) => {
    const matchesSearch = doc.title.toLowerCase().includes(search.toLowerCase()) ||
                          doc.purchaseName.toLowerCase().includes(search.toLowerCase());
    const matchesType = docFilter === 'All' || doc.type === docFilter;
    return matchesSearch && matchesType;
  });

  const handleSimulatedUpload = (e) => {
    e.preventDefault();
    const newDoc = {
      id: `doc-${Date.now()}`,
      title: 'Sony_Extended_Coverage_2026.pdf',
      size: '1.9 MB',
      type: 'PDF',
      purchaseName: 'Sony WH-CH520',
      date: '04 Oct 2026',
    };
    setDocsList([newDoc, ...docsList]);
    setUploadSuccess(true);
    setTimeout(() => setUploadSuccess(false), 3000);
  };

  return (
    <AppLayout title="Documents">
      <div className="space-y-6 text-left">
        {/* Top Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 rounded-2xl bg-[#141414] border border-white/8">
          <div>
            <h2 className="text-xl font-bold text-white">Invoice & Document Vault</h2>
            <p className="text-xs text-neutral-400 mt-1">
              All proof of purchase bills, tax receipts, and warranty cards securely stored in one place.
            </p>
          </div>

          <button
            onClick={handleSimulatedUpload}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white text-black hover:bg-neutral-200 text-xs font-semibold transition-all shadow-md self-start sm:self-auto cursor-pointer"
          >
            <Upload className="w-4 h-4 stroke-[2.5]" />
            <span>Upload Document</span>
          </button>
        </div>

        {uploadSuccess && (
          <div className="p-3.5 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-xs flex items-center gap-2 animate-in fade-in">
            <CheckCircle className="w-4 h-4 shrink-0" />
            <span>New invoice uploaded successfully! Document encrypted and indexed.</span>
          </div>
        )}

        {/* Search and Filter */}
        <div className="p-4 rounded-2xl bg-[#141414] border border-white/8 flex flex-col sm:flex-row sm:items-center gap-3">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-neutral-500 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by file name or purchase..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-xl pl-9 pr-3.5 py-2 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-[#D4A95C]"
            />
          </div>

          <div className="flex items-center gap-1.5">
            {['All', 'PDF', 'JPG'].map((type) => (
              <button
                key={type}
                onClick={() => setDocFilter(type)}
                className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-colors cursor-pointer ${
                  docFilter === type
                    ? 'bg-white text-black font-semibold'
                    : 'bg-white/5 text-neutral-400 hover:text-white'
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        {/* Documents Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredDocs.map((doc) => (
            <div
              key={doc.id}
              className="p-5 rounded-2xl bg-[#141414] border border-white/8 hover:border-white/15 transition-all flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-start justify-between">
                  <div className={`w-10 h-12 rounded-xl flex items-center justify-center font-bold text-xs ${
                    doc.type === 'PDF' ? 'bg-red-500/20 text-red-400 border border-red-500/30' : 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                  }`}>
                    {doc.type}
                  </div>

                  <span className="text-[10px] text-neutral-400 bg-white/5 px-2 py-0.5 rounded-md">
                    {doc.size}
                  </span>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-white leading-snug truncate" title={doc.title}>
                    {doc.title}
                  </h4>
                  <p className="text-xs text-[#D4A95C] mt-1">{doc.purchaseName}</p>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-white/6 flex items-center justify-between text-xs">
                <span className="text-[11px] text-neutral-400">Date: {doc.date}</span>
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => alert(`Previewing ${doc.title}`)}
                    className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-neutral-300 hover:text-white"
                    title="Preview"
                  >
                    <Eye className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => alert(`Downloaded ${doc.title}`)}
                    className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-neutral-300 hover:text-white"
                    title="Download"
                  >
                    <Download className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AppLayout>
  );
};

export default Documents;
