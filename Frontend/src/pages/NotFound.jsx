// src/pages/NotFound.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from '../components/ui/Logo';
import { Button } from '../components/ui/Button';

export const NotFound = () => (
  <div className="min-h-screen bg-[#0A0A0A] text-white flex flex-col items-center justify-center p-6 text-center">
    <Logo to="/" dark={true} size="lg" />
    <h1 className="text-6xl font-black text-[#D4A95C] mt-8 mb-2">404</h1>
    <h2 className="text-xl font-bold mb-3">Page Not Found</h2>
    <p className="text-neutral-400 text-sm max-w-sm mb-6">
      The page you're looking for doesn't exist or has been moved.
    </p>
    <Button to="/" variant="primary-white" size="md">
      Back to Home
    </Button>
  </div>
);

export default NotFound;
