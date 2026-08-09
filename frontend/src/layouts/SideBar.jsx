import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  LayoutDashboard, Bot, Box, Layers, HardDrive, Network, 
  Boxes, GitBranch, ShieldCheck, AreaChart, Terminal, 
  FileText, Settings, ChevronLeft, ChevronRight, Cpu
} from 'lucide-react';

const navSections = [
  {
    title: 'OVERVIEW',
    items: [
      { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
      { id: 'ai-assistant', label: 'AI Assistant', icon: Bot, badge: 'ACTIVE' },
    ]
  },
  {
    title: 'INFRASTRUCTURE',
    items: [
      { id: 'docker', label: 'Docker', icon: Box },
      { id: 'containers', label: 'Containers', icon: Layers },
      { id: 'images', label: 'Images', icon: Boxes },
      { id: 'volumes', label: 'Volumes', icon: HardDrive },
      { id: 'networks', label: 'Networks', icon: Network },
    ]
  },
  {
    title: 'ORCHESTRATION',
    items: [
      { id: 'kubernetes', label: 'Kubernetes', icon: Boxes },
      { id: 'jenkins', label: 'Jenkins', icon: GitBranch },
    ]
  },
  {
    title: 'OBSERVABILITY',
    items: [
      { id: 'prometheus', label: 'Prometheus', icon: ShieldCheck },
      { id: 'grafana', label: 'Grafana', icon: AreaChart },
      { id: 'logs', label: 'Logs', icon: FileText },
    ]
  },
  {
    title: 'TOOLS',
    items: [
      { id: 'terminal', label: 'Terminal', icon: Terminal },
      { id: 'settings', label: 'Settings', icon: Settings },
    ]
  }
];

export const Sidebar = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <aside 
      className={`relative z-20 h-[calc(100vh-4rem)] glass-panel border-r border-[#00E5FF]/20 flex flex-col justify-between py-3 px-2 transition-all duration-300 ${
        isCollapsed ? 'w-16' : 'w-60'
      }`}
    >
      {/* Navigation Sections */}
      <div className="space-y-4 overflow-y-auto">
        {navSections.map((section, idx) => (
          <div key={idx} className="space-y-1">
            {!isCollapsed && (
              <div className="px-3 py-1 text-[9px] font-mono tracking-widest text-slate-500 uppercase">
                {section.title}
              </div>
            )}
            {section.items.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;

              return (
                <motion.button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  whileHover={{ x: isCollapsed ? 0 : 3 }}
                  title={isCollapsed ? item.label : undefined}
                  className={`w-full flex items-center ${isCollapsed ? 'justify-center' : 'justify-between'} px-3 py-2 rounded-lg text-xs font-medium transition-all relative ${
                    isActive 
                      ? 'bg-gradient-to-r from-[#00E5FF]/20 to-[#8B5CF6]/10 text-slate-100 border border-[#00E5FF]/40 shadow-[0_0_12px_rgba(0,229,255,0.15)]' 
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <Icon className={`w-4 h-4 ${isActive ? 'text-[#00E5FF]' : 'text-slate-400'}`} />
                    {!isCollapsed && <span className="font-mono text-[11px]">{item.label}</span>}
                  </div>

                  {!isCollapsed && item.badge && (
                    <span className="px-1.5 py-0.5 text-[8px] font-mono rounded bg-[#8B5CF6]/30 text-[#00E5FF] border border-[#8B5CF6]/50">
                      {item.badge}
                    </span>
                  )}

                  {isActive && (
                    <motion.div 
                      layoutId="sidebarActiveIndicator"
                      className="absolute right-0 w-1 h-5 bg-[#00E5FF] rounded-l-full shadow-[0_0_8px_#00E5FF]" 
                    />
                  )}
                </motion.button>
              );
            })}
          </div>
        ))}
      </div>

      {/* Collapse Toggle & Diagnostic Footer */}
      <div className="pt-2 border-t border-slate-800/80 space-y-2">
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="w-full flex items-center justify-center p-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-[#00E5FF] transition-all"
        >
          {isCollapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
        </button>

        {!isCollapsed && (
          <div className="p-2.5 rounded-xl bg-[#0B1220] border border-slate-800 font-mono text-[10px] space-y-1.5">
            <div className="flex justify-between items-center text-slate-400">
              <span className="flex items-center gap-1"><Cpu className="w-3 h-3 text-[#00E5FF]" /> CORE TEMP</span>
              <span className="text-[#00E5FF]">41.2°C</span>
            </div>
            <div className="w-full bg-slate-900 h-1 rounded-full overflow-hidden">
              <div className="bg-gradient-to-r from-[#00E5FF] to-[#8B5CF6] h-full w-[41%]" />
            </div>
          </div>
        )}
      </div>
    </aside>
  );
};