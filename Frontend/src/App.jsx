// src/App.jsx
import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Landing from './pages/Landing';

// Lazy loaded pages for Phase 2
const Login = lazy(() => import('./pages/Login'));
const Register = lazy(() => import('./pages/Register'));
const Dashboard = lazy(() => import('./pages/Dashboard'));
const Purchases = lazy(() => import('./pages/Purchases'));
const PurchaseDetails = lazy(() => import('./pages/PurchaseDetails'));
const Warranties = lazy(() => import('./pages/Warranties'));
const Documents = lazy(() => import('./pages/Documents'));
const Profile = lazy(() => import('./pages/Profile'));
const Settings = lazy(() => import('./pages/Settings'));
const NotFound = lazy(() => import('./pages/NotFound'));

// Loading spinner fallback
const PageLoader = () => (
  <div className="min-h-screen bg-[#0A0A0A] flex items-center justify-center text-[#D4A95C]">
    <div className="flex flex-col items-center gap-3">
      <div className="w-8 h-8 border-2 border-[#D4A95C] border-t-transparent rounded-full animate-spin" />
      <span className="text-xs text-neutral-400 font-medium">Loading ClaimBox...</span>
    </div>
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          {/* Phase 1: Landing Page */}
          <Route path="/" element={<Landing />} />

          {/* Phase 2: Auth and App Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/purchases" element={<Purchases />} />
          <Route path="/purchases/:id" element={<PurchaseDetails />} />
          <Route path="/warranties" element={<Warranties />} />
          <Route path="/documents" element={<Documents />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />

          {/* 404 Route */}
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
