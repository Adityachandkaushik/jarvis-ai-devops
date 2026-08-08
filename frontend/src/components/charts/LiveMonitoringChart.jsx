import React from 'react';
import { motion } from 'framer-motion';

export const LiveMonitoringChart = () => {
  return (
    <div className="glass-panel p-4 rounded-xl border border-slate-800 space-y-4">
      <div className="flex justify-between items-center">
        <h4 className="font-orbitron text-xs font-bold text-white">LIVE MONITORING</h4>
        <div className="flex items-center space-x-3 text-[10px] font-mono">
          <span className="text-[#00E5FF]">CPU</span>
          <span className="text-[#7C3AED]">RAM</span>
        </div>
      </div>
      <div className="relative w-full h-32 bg-[#030712]/60 rounded-lg p-2 border border-slate-800/80">
        <svg className="w-full h-full" viewBox="0 0 300 100" preserveAspectRatio="none">
          <motion.path
            d="M 0,70 Q 50,20 100,50 T 200,30 T 300,60"
                   fill="none"
            stroke="#00E5FF"
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
          />
          <motion.path
            d="M 0,40 Q 60,80 120,30 T 220,70 T 300,20"
            fill="none"
            stroke="#7C3AED"
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
          />
        </svg>
      </div>
    </div>
  );
};