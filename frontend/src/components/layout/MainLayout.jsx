import React from 'react';
import { CinematicBackground } from '../background/CinematicBackground';
import { TopBar } from './TopBar';
import { Sidebar } from './Sidebar';

export const MainLayout = ({ children }) => {
  return (
    <div className="relative min-h-screen bg-[#030712] text-slate-100 overflow-hidden flex flex-col">
      {/* Animated Background Layer */}
      <CinematicBackground />

      {/* Top Header Bar */}
      <TopBar />

      {/* Main Content Area */}
      <div className="flex flex-1 relative z-10">
        <Sidebar />
        
        <main className="flex-1 p-6 overflow-y-auto max-h-[calc(100vh-4rem)]">
          {children}
        </main>
      </div>
    </div>
  );
};