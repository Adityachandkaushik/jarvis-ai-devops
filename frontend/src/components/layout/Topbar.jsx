import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Activity, Bell, Search, Settings, Cpu, User } from 'lucide-react';

export const TopBar = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formattedDate = time.toLocaleDateString('en-US', {
    weekday: 'short',
    day: '2-digit',
    month: 'short',
    year: 'numeric'
  }).toUpperCase();

  const formattedTime = time.toLocaleTimeString('en-US', {
    hour12: false,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });

  return (
    <header className="relative z-20 w-full h-16 px-6 glass-panel border-b border-[#00E5FF]/20 flex items-center justify-between">
      <div className="flex items-center space-x-6">
        <motion.div whileHover={{ scale: 1.05 }} className="flex items-center space-x-3 cursor-pointer">
          <div className="relative w-9 h-9 rounded-lg bg-[#00E5FF]/10 border border-[#00E5FF]/40 flex items-center justify-center shadow-[0_0_15px_rgba(0,229,255,0.3)]">
            <Cpu className="w-5 h-5 text-[#00E5FF] animate-pulse" />
            <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-[#00E5FF] rounded-full animate-ping" />
          </div>
          <div className="font-orbitron text-lg font-bold tracking-widest text-white flex items-center gap-2">
            JARVIS <span className="text-xs px-1.5 py-0.5 rounded bg-[#00E5FF]/20 text-[#00E5FF] border border-[#00E5FF]/40">v2.0.0</span>
          </div>
        </motion.div>

        <div className="hidden md:flex items-center space-x-3 text-xs border-l border-slate-700/60 pl-6">
          <span className="flex items-center text-[#22C55E] gap-1.5 font-mono">
            <span className="w-2 h-2 rounded-full bg-[#22C55E] animate-ping" />
            CORE ACTIVE
          </span>
          <span className="text-slate-500">•</span>
          <span className="text-slate-400 font-mono">LATENCY: <span className="text-[#00E5FF]">12ms</span></span>
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <div className="hidden lg:flex items-center space-x-2 px-3 py-1 rounded bg-[#030712]/60 border border-slate-800 font-mono text-xs">
          <Activity className="w-3.5 h-3.5 text-[#00E5FF] animate-bounce" />
          <span className="text-slate-400">{formattedDate}</span>
          <span className="text-[#00E5FF] font-bold text-sm tracking-wider">{formattedTime}</span>
        </div>

        <div className="relative hidden sm:block w-64">
          <Search className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />
          <input
            type="text"
            placeholder="Execute command..."
            className="w-full pl-9 pr-8 py-1.5 text-xs bg-[#030712]/80 border border-slate-700/80 rounded-md text-slate-200 placeholder-slate-500 focus:outline-none focus:border-[#00E5FF] font-mono"
          />
          <kbd className="absolute right-2 top-2 text-[10px] bg-slate-800 text-slate-400 px-1.5 py-0.5 rounded border border-slate-700 font-mono">⌘K</kbd>
        </div>

        <div className="flex items-center space-x-2">
          <button className="relative p-2 rounded-lg bg-slate-900/80 border border-slate-700 text-slate-300 hover:text-[#00E5FF]">
            <Bell className="w-4 h-4" />
            <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-[#EF4444]" />
          </button>
          <button className="p-2 rounded-lg bg-slate-900/80 border border-slate-700 text-slate-300 hover:text-[#00E5FF]">
            <Settings className="w-4 h-4" />
          </button>
          <div className="flex items-center space-x-2 pl-2 border-l border-slate-800">
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#7C3AED] to-[#00E5FF] p-[1px]">
              <div className="w-full h-full bg-slate-950 rounded-full flex items-center justify-center">
                <User className="w-4 h-4 text-[#00E5FF]" />
              </div>
            </div>
            <div className="hidden xl:block text-left">
              <div className="text-xs font-bold text-slate-200">ADITYA</div>
              <div className="text-[10px] text-[#00E5FF] font-mono">System Admin</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};