import React from 'react';
import { motion } from 'framer-motion';

export const AICoreReactor = () => {
  return (
    <div className="relative w-full h-[320px] flex items-center justify-center overflow-hidden">
      <div className="absolute w-72 h-72 rounded-full bg-[#00E5FF]/10 blur-3xl animate-pulse" />
      
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        className="absolute w-64 h-64 rounded-full border border-dashed border-[#00E5FF]/40"
      />

      <motion.div 
        animate={{ rotate: -360 }}
        transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
        className="absolute w-52 h-52 rounded-full border-2 border-t-[#00E5FF] border-b-[#7C3AED] border-l-transparent border-r-transparent opacity-80"
      />

      <motion.div 
        animate={{ rotate: 360, scale: [0.98, 1.02, 0.98] }}
        transition={{ rotate: { duration: 10, repeat: Infinity, ease: 'linear' }, scale: { duration: 2, repeat: Infinity, ease: 'easeInOut' } }}
        className="absolute w-40 h-40 rounded-full border border-[#00E5FF] shadow-[0_0_20px_rgba(0,229,255,0.4)]"
      />

      <div className="relative z-10 w-28 h-28 rounded-full bg-slate-950/90 border-2 border-[#00E5FF] shadow-[0_0_30px_rgba(0,229,255,0.6)] flex flex-col items-center justify-center">
        <svg viewBox="0 0 24 24" className="w-10 h-10 text-[#00E5FF]" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
          <circle cx="9" cy="10" r="1.5" fill="#00E5FF"/>
          <circle cx="15" cy="10" r="1.5" fill="#00E5FF"/>
        </svg>
        <span className="text-[10px] font-orbitron font-bold tracking-widest text-[#00E5FF] mt-1">JARVIS AI</span>
        <span className="text-[8px] font-mono text-[#22C55E] animate-pulse">ONLINE</span>
      </div>
    </div>
  );
};