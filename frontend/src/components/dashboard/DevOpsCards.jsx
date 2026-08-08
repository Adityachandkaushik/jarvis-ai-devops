import React from 'react';
import { motion } from 'framer-motion';
import { Box, Layers, GitBranch, Clock, Activity } from 'lucide-react';

const metrics = [
  { title: 'DOCKER CONTAINERS', value: '12', subtext: 'Running: 10 | Stopped: 2', icon: Box, color: '#00E5FF' },
  { title: 'KUBERNETES PODS', value: '24', subtext: 'Running: 20 | Pending: 4', icon: Layers, color: '#3B82F6' },
  { title: 'JENKINS BUILDS', value: '8', subtext: 'Success: 7 | Failed: 1', icon: GitBranch, color: '#7C3AED' },
  { title: 'SYSTEM UPTIME', value: '7d 14h 28m', subtext: 'Up since 31 Jul 2026', icon: Clock, color: '#22C55E' }
];

export const DevOpsCards = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {metrics.map((item, idx) => {
        const Icon = item.icon;
        return (
          <motion.div
            key={idx}
            whileHover={{ y: -4 }}
            className="hud-corner-brackets glass-panel p-4 rounded-xl border border-slate-800 relative overflow-hidden group"
          >
            <div className="absolute top-0 left-0 w-full h-[2px]" style={{ backgroundColor: item.color }} />
            <div className="flex justify-between items-start">
              <div>
                <p className="text-[10px] font-mono text-slate-400 uppercase">{item.title}</p>
                <h3 className="text-2xl font-orbitron font-bold text-white mt-1">{item.value}</h3>
              </div>
              <div className="p-2 rounded-lg bg-slate-900/80 border border-slate-800" style={{ color: item.color }}>
                <Icon className="w-5 h-5" />
              </div>
            </div>
            <div className="mt-3 pt-2 border-t border-slate-800 flex items-center justify-between text-[11px] font-mono text-slate-400">
              <span>{item.subtext}</span>
              <Activity className="w-3.5 h-3.5 text-[#00E5FF]" />
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};