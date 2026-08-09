import React from 'react';
import { AICoreReactor } from '../components/dashboard/AICoreReactor';
import { DevOpsCards } from '../components/dashboard/DevOpsCards';
import { AIAssistantPanel } from '../components/voice/AIAssistantPanel';
import { FuturisticTerminal } from '../components/terminal/FuturisticTerminal';
import { LiveMonitoringChart } from '../components/charts/LiveMonitoringChart';

export const DashboardPage = () => {
  return (
    <div className="space-y-5">
      {/* DevOps Metrics Panels */}
      <DevOpsCards />

      {/* Main Core Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <div className="lg:col-span-2 glass-panel rounded-xl p-5 border border-[#00E5FF]/20 flex flex-col justify-between">
          <div className="flex justify-between items-center mb-1 font-mono">
            <div>
              <h2 className="font-orbitron text-base font-bold text-white tracking-widest">AUTONOMOUS CORE</h2>
              <p className="text-[10px] text-slate-400">AI Decision Engine & Subsystem Controller</p>
            </div>
            <span className="px-2.5 py-1 rounded bg-[#00E5FF]/10 text-[#00E5FF] text-[10px] border border-[#00E5FF]/30">
              STATUS: NOMINAL
            </span>
          </div>

          <AICoreReactor />
        </div>

        <div className="lg:col-span-1">
          <AIAssistantPanel />
        </div>
      </div>

      {/* Terminal & Telemetry Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <LiveMonitoringChart />
        <FuturisticTerminal />
      </div>
    </div>
  );
};