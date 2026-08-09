import React from 'react';
import { motion } from 'framer-motion';

export const LiveMonitoringChart = () => {
  return (
    <div className="glass-panel p-4 rounded-xl border border-slate-800 space-y-3 font-mono">
      <div className="flex justify-between items-center text-xs">
        <h4 className="font-orbitron font-bold text-white tracking-wider">RESOURCE TELEMETRY</h4>
        <div className="flex items-center space-x-3 text-[10px]">
          <span className="flex items-center gap-1 text-[#00E5FF]">
            <span className="w-2 h-2 rounded-full bg-[#00E5FF]" /> CPU (23%)
          </span>
          <span className="flex items-center gap-1 text-[#8B5CF6]">
            <span className="w-2 h-2 rounded-full bg-[#8B5CF6]" /> RAM (45%)
          </span>
        </div>
      </div>

      <div className="relative w-full h-32 bg-[#02050e]/80 rounded-lg p-2 border border-slate-800 overflow-hidden">
        <svg className="w-full h-full" viewBox="0 0 300 100" preserveAspectRatio="none">
          {/* Animated Wave Lines */}
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
            stroke="#8B5CF6"
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
          />
        </svg>
      </div>

      <div className="grid grid-cols-3 gap-2 text-center text-[10px]">
        <div className="p-1.5 rounded bg-slate-900/60 border border-slate-800">
          <div className="text-slate-400">DISK READ</div>
          <div className="text-[#00E5FF] font-bold">124 MB/s</div>
        </div>
        <div className="p-1.5 rounded bg-slate-900/60 border border-slate-800">
          <div className="text-slate-400">DISK WRITE</div>
          <div className="text-[#8B5CF6] font-bold">88 MB/s</div>
        </div>
        <div className="p-1.5 rounded bg-slate-900/60 border border-slate-800">
          <div className="text-slate-400">NET I/O</div>
          <div className="text-[#10B981] font-bold">1.2 GB/s</div>
        </div>
      </div>
    </div>
  );
};