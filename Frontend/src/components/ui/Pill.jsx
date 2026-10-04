// src/components/ui/Pill.jsx
import React from 'react';

export const Pill = ({ 
  children, 
  variant = "dark", 
  icon = "✦", 
  className = "" 
}) => {
  const isDark = variant === "dark";

  return (
    <div
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11.5px] font-medium tracking-wide uppercase transition-all duration-300 ${
        isDark
          ? 'bg-[#181818]/90 border border-[#D4A95C]/30 text-[#D4A95C] shadow-sm'
          : 'bg-[#F6F1E7] border border-[#D4A95C]/35 text-[#A67C2E] shadow-xs'
      } ${className}`}
    >
      {icon && <span className="text-[10px] text-[#D4A95C]">{icon}</span>}
      <span>{children}</span>
    </div>
  );
};

export default Pill;
