import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Search, Bell, Settings, Cpu, Sun, Moon, User, Wifi } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';

export const TopBar = ({ onOpenCommand }) => {
  const [time, setTime] = useState(new Date());
  const { theme, toggleTheme } = useTheme();

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
      {/* Brand Identification */}
      <div className="flex items-center space-x-6">
        <motion.div whileHover={{ scale: 1.02 }} className="flex items-center space-x-3 cursor-pointer">
          <div className="relative w-9 h-9 rounded-lg bg-[#00E5FF]/10 border border-[#00E5FF]/40 flex items-center justify-center shadow-[0_0_15px_rgba(0,229,255,0.25)]">
            <Cpu className="w-5 h-5 text-[#00E5FF] animate-pulse" />
            <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-[#00E5FF] rounded-full animate-ping" />
          </div>
          <div>
            <div className="font-orbitron text-base font-extrabold tracking-widest text-slate-100 flex items-center gap-2">
              JARVIS <span className="text-[10px] px-1.5 py-0.5 rounded bg-[#00E5FF]/20 text-[#00E5FF] border border-[#00E5FF]/40 font-mono">v2.0.0</span>
            </div>
            <div className="text-[9px] font-mono text-slate-400 tracking-wider">AUTONOMOUS DEVOPS OS</div>
          </div>
        </motion.div>

        {/* Live Telemetry */}
        <div className="hidden lg:flex items-center space-x-4 text-xs border-l border-slate-800 pl-6 font-mono">
          <span className="flex items-center text-[#22C55E] gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#22C55E] animate-ping" />
            CORE ACTIVE
          </span>
          <span className="text-slate-600">•</span>
          <span className="text-slate-400">LATENCY: <span className="text-[#00E5FF]">11.4ms</span></span>
        </div>
      </div>

      {/* Center Search / Command Trigger */}
      <div className="flex items-center space-x-4">
        <button
          onClick={onOpenCommand}
          className="relative hidden sm:flex items-center w-72 px-3 py-1.5 text-xs bg-[#0B1220]/90 border border-slate-800 rounded-lg text-slate-400 hover:border-[#00E5FF]/50 transition-all font-mono justify-between cursor-pointer"
        >
          <div className="flex items-center space-x-2">
            <Search className="w-3.5 h-3.5 text-slate-400" />
            <span>Search directives...</span>
          </div>
          <kbd className="text-[9px] bg-slate-900 text-slate-400 px-1.5 py-0.5 rounded border border-slate-800 font-mono">⌘K</kbd>
        </button>

        {/* Clock */}
        <div className="hidden xl:flex items-center space-x-2 px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800 font-mono text-xs">
          <span className="text-slate-400">{formattedDate}</span>
          <span className="text-[#00E5FF] font-bold">{formattedTime}</span>
        </div>

        {/* Action Controls */}
        <div className="flex items-center space-x-2">
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-[#00E5FF] transition-all"
            title="Toggle Light/Dark Theme"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-indigo-400" />}
          </button>

          <button className="relative p-2 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-[#00E5FF] transition-all">
            <Bell className="w-4 h-4" />
            <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-[#EF4444]" />
          </button>

          <div className="flex items-center space-x-2 pl-3 border-l border-slate-800">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#8B5CF6] to-[#00E5FF] p-[1px]">
              <div className="w-full h-full bg-slate-950 rounded-lg flex items-center justify-center">
                <User className="w-4 h-4 text-[#00E5FF]" />
              </div>
            </div>
            <div className="hidden xl:block text-left font-mono">
              <div className="text-xs font-bold text-slate-200 leading-tight">ADITYA</div>
              <div className="text-[9px] text-[#00E5FF] leading-tight">SYS ADMIN</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};