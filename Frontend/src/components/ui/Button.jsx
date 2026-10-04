// src/components/ui/Button.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Play } from 'lucide-react';

export const Button = ({
  children,
  variant = 'primary-white',
  size = 'md',
  to,
  href,
  onClick,
  icon,
  arrow = false,
  className = '',
  disabled = false,
  type = 'button',
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-xl transition-all duration-200 select-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#D4A95C]/50 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed';

  const sizes = {
    sm: 'text-xs px-3.5 py-1.5 gap-1.5',
    md: 'text-sm px-4.5 py-2.5 gap-2',
    lg: 'text-[15px] px-6 py-3 gap-2.5 font-semibold',
  };

  const variants = {
    'primary-white': 'bg-white text-[#0A0A0A] hover:bg-[#F2F2F0] shadow-sm hover:shadow border border-white/80',
    'primary-dark': 'bg-[#111111] text-[#F5F1EA] hover:bg-[#1A1A1A] border border-white/10 hover:border-white/20 shadow-sm',
    'outline-dark': 'bg-transparent text-[#F5F1EA] border border-white/15 hover:border-white/30 hover:bg-white/5',
    'outline-light': 'bg-transparent text-neutral-800 border border-neutral-300 hover:border-neutral-400 hover:bg-neutral-50',
    'secondary-dark': 'bg-[#181818] text-[#F5F1EA] border border-white/10 hover:border-[#D4A95C]/40 hover:bg-[#1F1F1F]',
    'gold-subtle': 'bg-[#D4A95C]/10 text-[#D4A95C] border border-[#D4A95C]/30 hover:bg-[#D4A95C]/20',
  };

  const classes = `${baseStyles} ${sizes[size] || sizes.md} ${variants[variant] || variants['primary-white']} ${className}`;

  const content = (
    <>
      {icon && <span className="inline-flex shrink-0">{icon}</span>}
      <span>{children}</span>
      {arrow && <ArrowRight className="w-4 h-4 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5" />}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={`group ${classes}`}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={`group ${classes}`} onClick={onClick}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} className={`group ${classes}`} onClick={onClick} disabled={disabled}>
      {content}
    </button>
  );
};

export default Button;
