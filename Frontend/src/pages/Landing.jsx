// src/pages/Landing.jsx
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import FeatureStrip from '../components/FeatureStrip';
import ProblemSection from '../components/ProblemSection';
import HowItWorks from '../components/HowItWorks';
import ProductShowcase from '../components/ProductShowcase';
import WarrantyAlert from '../components/WarrantyAlert';
import TrustSection from '../components/TrustSection';
import FinalCTA from '../components/FinalCTA';
import Footer from '../components/Footer';

export const Landing = () => {
  return (
    <div className="min-h-screen bg-[#FAFAF8] dark:bg-[#0A0A0A] flex flex-col font-sans transition-colors duration-200">
      {/* 1. Navbar */}
      <Navbar />

      {/* Main Sections */}
      <main className="flex-1">
        {/* 2. Hero */}
        <Hero />

        {/* 3. Feature Strip */}
        <FeatureStrip />

        {/* 4. The Problem */}
        <ProblemSection />

        {/* 5. How ClaimBox Works */}
        <HowItWorks />

        {/* 6. Product Showcase */}
        <ProductShowcase />

        {/* 7. Warranty Alert */}
        <WarrantyAlert />

        {/* 8. Trust Section */}
        <TrustSection />

        {/* 9. Final CTA */}
        <FinalCTA />
      </main>

      {/* 10. Footer */}
      <Footer />
    </div>
  );
};

export default Landing;
