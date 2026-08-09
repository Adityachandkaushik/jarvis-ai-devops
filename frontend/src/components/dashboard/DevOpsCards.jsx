import React from 'react';
import { motion } from 'framer-motion';
import { Box, Layers, GitBranch, Clock, Activity, ShieldCheck, Database } from 'lucide-react';

const metrics = [
  {
    title: 'DOCKER ENGINE',
    value: '12 CONTAINERS',
    status: 'ONLINE',
    subtext: '98.4% HEALTH | 10 RUNNING',
    icon: Box,
    color: '#00E5FF'
  },
  {
    title: 'KUBERNETES CLUSTER',
    value: '24 PODS ACTIVE',
    status: 'OPTIMAL',
    subtext: '20 RUNNING | 4 PENDING',
    icon: Layers,
    color: '#3B82F6'
  },
  {
    title: 'JENKINS PIPELINE',
    value: 'BUILD #284',
    status: 'SUCCESS',
    subtext: '1m 24s | 98.5% SLA',
    icon: GitBranch,
    color: '#8B5CF6'
  },
  {
    title: 'PROMETHEUS SCRAPER',
    value: '42 TARGETS',
    status: 'SCRAPING',
    subtext: '18ms LATENCY | 0 DROPPED',
    icon: ShieldCheck,
    color: '#10B981'
  }
];

export const DevOpsCards = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {metrics.map((item, idx) => {
        const Icon = item.icon;
        return (
          <motion.div
            key={idx}
            whileHover={{ y: -3 }}
            className="hud-corner-brackets glass-panel p-4 rounded-xl border border-slate-800 relative overflow-hidden group"
          >
            <div 
              className="absolute top-0 left-0 w-full h-[2px] opacity-80" 
              style={{ backgroundColor: item.color, boxShadow: `0 0 10px ${item.color}` }}
            />

            <div className="flex justify-between items-start">
              <div>
                <span className="text-[9px] font-mono text-slate-400 tracking-wider uppercase">{item.title}</span>
                <h3 className="text-base font-orbitron font-bold text-white mt-1 group-hover:text-[#00E5FF] transition-colors">
                  {item.value}
                </h3>
              </div>
              <div 
                className="p-2 rounded-lg bg-[#02050e]/80 border border-slate-800"
                style={{ color: item.color }}
              >
                <Icon className="w-4 h-4" />
              </div>
            </div>

            <div className="mt-3 pt-2 border-t border-slate-800/80 flex items-center justify-between text-[10px] font-mono">
              <span className="text-slate-400">{item.subtext}</span>
              <span className="px-1.5 py-0.5 rounded bg-slate-900 border border-slate-700 text-[#00E5FF]">
                {item.status}
              </span>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};