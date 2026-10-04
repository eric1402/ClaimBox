// src/pages/Register.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Lock, Mail, User, CheckCircle2, AlertCircle } from 'lucide-react';
import { Logo } from '../components/ui/Logo';
import { Button } from '../components/ui/Button';

export const Register = () => {
  const [name, setName] = useState('Ayush');
  const [email, setEmail] = useState('ayush@example.com');
  const [password, setPassword] = useState('secret123');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!name || !email || !password) {
      setError('Please fill in all fields.');
      return;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters long.');
      return;
    }

    setLoading(true);
    setTimeout(() => {
      // Store user
      localStorage.setItem('claimbox-user', JSON.stringify({
        name,
        email,
        token: 'mock-token-xyz-123'
      }));
      setLoading(false);
      navigate('/dashboard');
    }, 400);
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white flex flex-col justify-between p-4 sm:p-8">
      {/* Top Bar with Back to Landing */}
      <div className="max-w-md w-full mx-auto flex items-center justify-between">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-xs text-neutral-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>
        <Logo to="/" dark={true} size="sm" />
      </div>

      {/* Main Register Card */}
      <div className="max-w-md w-full mx-auto my-8">
        <div className="bg-[#121212] border border-white/10 rounded-3xl p-6 sm:p-8 shadow-2xl">
          <div className="text-center space-y-2 mb-6">
            <h1 className="text-2xl font-bold tracking-tight text-white">Create your ClaimBox</h1>
            <p className="text-xs text-neutral-400">
              Start storing receipts, warranties, and invoices securely.
            </p>
          </div>

          {error && (
            <div className="mb-4 p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{error}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                Full Name
              </label>
              <div className="relative">
                <User className="w-4 h-4 text-neutral-500 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your full name"
                  className="w-full bg-white/5 border border-white/10 rounded-xl pl-9 pr-3.5 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-[#D4A95C] transition-colors"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                Email Address
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-neutral-500 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@example.com"
                  className="w-full bg-white/5 border border-white/10 rounded-xl pl-9 pr-3.5 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-[#D4A95C] transition-colors"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                Password
              </label>
              <div className="relative">
                <Lock className="w-4 h-4 text-neutral-500 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="At least 6 characters"
                  className="w-full bg-white/5 border border-white/10 rounded-xl pl-9 pr-3.5 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-[#D4A95C] transition-colors"
                  required
                />
              </div>
            </div>

            <div className="text-[11px] text-neutral-400 leading-tight">
              By creating an account, you agree to our Terms of Service and Privacy Policy. Free to start, no card needed.
            </div>

            <Button
              type="submit"
              variant="primary-white"
              size="md"
              disabled={loading}
              className="w-full justify-center py-2.5 text-sm font-semibold shadow-md mt-2"
            >
              {loading ? 'Creating account...' : 'Create Account'}
            </Button>
          </form>

          <div className="mt-6 pt-4 border-t border-white/8 text-center text-xs text-neutral-400">
            Already have an account?{' '}
            <Link to="/login" className="text-[#D4A95C] hover:underline font-semibold">
              Sign in
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom info */}
      <div className="text-center text-[11px] text-neutral-500">
        © 2026 ClaimBox. All rights reserved.
      </div>
    </div>
  );
};

export default Register;
