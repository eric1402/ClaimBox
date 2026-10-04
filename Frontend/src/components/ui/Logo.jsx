// src/components/ui/Logo.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export const CubeIcon = ({ className = "w-6 h-6", gold = "#D4A95C" }) => (
  <svg 
    viewBox="0 0 32 32" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Outer isometric hexagon */}
    <polygon 
      points="16,2 29,9.5 29,22.5 16,30 3,22.5 3,9.5" 
      fill="rgba(212, 169, 92, 0.04)" 
      stroke={gold} 
      strokeWidth="2.2" 
      strokeLinejoin="round" 
    />
    {/* Internal Y lines to form 3D cube */}
    <line x1="16" y1="16" x2="29" y2="9.5" stroke={gold} strokeWidth="1.8" strokeLinecap="round" />
    <line x1="16" y1="16" x2="3" y2="9.5" stroke={gold} strokeWidth="1.8" strokeLinecap="round" />
    <line x1="16" y1="16" x2="16" y2="30" stroke={gold} strokeWidth="1.8" strokeLinecap="round" />
    
    {/* Subtle top facet highlight */}
    <polygon 
      points="16,3.5 27,9.8 16,15.8 5,9.8" 
      fill="rgba(212, 169, 92, 0.12)" 
    />
  </svg>
);

export const Logo = ({ 
  to = "/", 
  dark = true, 
  size = "md", 
  onClick,
  showTagline = false 
}) => {
  const iconSizes = {
    sm: "w-5 h-5",
    md: "w-6 h-6",
    lg: "w-8 h-8",
  };

  const textSizes = {
    sm: "text-base",
    md: "text-lg font-bold tracking-tight",
    lg: "text-xl font-bold tracking-tight",
  };

  const content = (
    <div className="flex items-center gap-2.5 group cursor-pointer select-none">
      <div className="transition-transform duration-300 group-hover:scale-105">
        <CubeIcon className={iconSizes[size]} />
      </div>
      <div className="flex flex-col">
        <span className={`font-semibold tracking-tight ${dark ? 'text-white' : 'text-neutral-900'} ${textSizes[size]}`}>
          ClaimBox
        </span>
        {showTagline && (
          <span className="text-[11px] text-neutral-500 font-normal">
            Your purchases. Always with you.
          </span>
        )}
      </div>
    </div>
  );

  if (to) {
    return (
      <Link to={to} onClick={onClick} className="inline-flex items-center">
        {content}
      </Link>
    );
  }

  return content;
};

export default Logo;
