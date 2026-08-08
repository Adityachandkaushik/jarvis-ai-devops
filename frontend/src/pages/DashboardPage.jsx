import React from 'react';
import { AICoreReactor } from '../components/dashboard/AICoreReactor';
import { DevOpsCards } from '../components/dashboard/DevOpsCards';
import { AIAssistantPanel } from '../components/voice/AIAssistantPanel';
import { FuturisticTerminal } from '../components/terminal/FuturisticTerminal';
import { LiveMonitoringChart } from '../components/charts/LiveMonitoringChart';

export const DashboardPage = () => {
  return (
    <div className="space-y-6">
      <DevOpsCards />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 glass-panel rounded-xl p-6 border border-[#00E5FF]/20 flex flex-col justify-between">
          <div className="flex justify-between items-center mb-2">
            <div>
              <h2 className="font-orbitron text-lg font-bold text-white">SYSTEM CORE</h2>
              <p className="text-xs font-mono text-slate-400">Autonomous Unit</p>
            </div>
            <span className="px-2.5 py-1 rounded bg-[#00E5FF]/10 text-[#00E5FF] text-xs font-mono">STATUS: NOMINAL</span>
          </div>
          <AICoreReactor />
        </div>
        <div className="lg:col-span-1">
          <AIAssistantPanel />
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <LiveMonitoringChart />
        <FuturisticTerminal />
      </div>
    </div>
  );
};