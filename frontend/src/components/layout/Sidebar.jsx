import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  LayoutDashboard, Bot, Box, Layers, HardDrive, Network, 
  Boxes, GitBranch, ShieldCheck, AreaChart, Terminal, 
  FileText, Settings 
} from 'lucide-react';

const navItems = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { id: 'ai-assistant', label: 'AI Assistant', icon: Bot, badge: 'Active' },
  { id: 'docker', label: 'Docker', icon: Box },
  { id: 'containers', label: 'Containers', icon: Layers },
  { id: 'images', label: 'Images', icon: Boxes },
  { id: 'volumes', label: 'Volumes', icon: HardDrive },
  { id: 'networks', label: 'Networks', icon: Network },
  { id: 'kubernetes', label: 'Kubernetes', icon: Boxes },
  { id: 'jenkins', label: 'Jenkins', icon: GitBranch },
  { id: 'prometheus', label: 'Prometheus', icon: ShieldCheck },
  { id: 'grafana', label: 'Grafana', icon: AreaChart },
  { id: 'terminal', label: 'Terminal', icon: Terminal },
  { id: 'logs', label: 'Logs', icon: FileText },
  { id: 'settings', label: 'Settings', icon: Settings },
];

export const Sidebar = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <aside className="relative z-20 w-64 h-[calc(100vh-4rem)] glass-panel border-r border-[#00E5FF]/20 flex flex-col justify-between py-4 px-3 overflow-y-auto">
      <div className="space-y-1">
        <div className="px-3 py-2 text-[10px] font-mono tracking-widest text-slate-500 uppercase">
          System Control
        </div>
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          return (
            <motion.button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              whileHover={{ x: 4 }}
              className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs font-medium transition-all relative ${
                isActive 
                  ? 'bg-gradient-to-r from-[#00E5FF]/20 to-[#7C3AED]/10 text-white border border-[#00E5FF]/40' 
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
              }`}
            >
              <div className="flex items-center space-x-3">
                <Icon className={`w-4 h-4 ${isActive ? 'text-[#00E5FF]' : 'text-slate-400'}`} />
                <span className="font-mono">{item.label}</span>
              </div>
              {item.badge && (
                <span className="px-1.5 py-0.5 text-[9px] rounded-full bg-[#7C3AED]/30 text-[#00E5FF] border border-[#7C3AED]/50">
                  {item.badge}
                </span>
              )}
            </motion.button>
          );
        })}
      </div>
      <div className="mt-6 p-3 rounded-xl bg-[#030712]/80 border border-slate-800 text-xs font-mono space-y-2">
        <div className="flex justify-between items-center text-slate-400 text-[11px]">
          <span>SYSTEM STATUS</span>
          <span className="text-[#22C55E]">100%</span>
        </div>
        <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
          <div className="bg-gradient-to-r from-[#00E5FF] to-[#7C3AED] h-full w-full animate-pulse" />
        </div>
      </div>
    </aside>
  );
};