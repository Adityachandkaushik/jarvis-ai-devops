import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Cpu, Zap, Activity, Volume2, Play, AlertTriangle } from 'lucide-react';

export const AICoreReactor = () => {
  const [aiState, setAiState] = useState('IDLE'); // IDLE, LISTENING, THINKING, SPEAKING, PROCESSING, ERROR

  const stateColors = {
    IDLE: { primary: '#00E5FF', secondary: '#8B5CF6', text: 'IDLE (MONITORING)' },
    LISTENING: { primary: '#10B981', secondary: '#00E5FF', text: 'LISTENING...' },
    THINKING: { primary: '#F59E0B', secondary: '#8B5CF6', text: 'THINKING (NEURAL PROCESSING)' },
    SPEAKING: { primary: '#3B82F6', secondary: '#00E5FF', text: 'SPEAKING...' },
    PROCESSING: { primary: '#8B5CF6', secondary: '#3B82F6', text: 'EXECUTION IN PROGRESS' },
    ERROR: { primary: '#EF4444', secondary: '#F59E0B', text: 'SYSTEM WARNING / ERROR' }
  };

  const currentState = stateColors[aiState] || stateColors.IDLE;

  return (
    <div className="relative w-full h-[360px] flex flex-col items-center justify-center overflow-hidden">
      {/* Outer Glow Halo */}
      <div 
        className="absolute w-80 h-80 rounded-full blur-3xl opacity-20 transition-all duration-700 pointer-events-none"
        style={{ backgroundColor: currentState.primary }}
      />
      
      {/* Ring 1 - Outer Segmented Clockwise Rotating Ring */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: aiState === 'THINKING' ? 8 : 28, repeat: Infinity, ease: 'linear' }}
        className="absolute w-72 h-72 rounded-full border border-dashed"
        style={{ borderColor: `${currentState.primary}40` }}
      />

      {/* Ring 2 - Inner Counter Clockwise Bi-Color Orbit */}
      <motion.div 
        animate={{ rotate: -360 }}
        transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
        className="absolute w-60 h-60 rounded-full border-2 border-t-transparent border-b-transparent opacity-75"
        style={{ borderLeftColor: currentState.primary, borderRightColor: currentState.secondary }}
      />

      {/* Ring 3 - Pulsing Dynamic Inner HUD Ring */}
      <motion.div 
        animate={{ rotate: 360, scale: aiState === 'SPEAKING' ? [0.98, 1.04, 0.98] : [0.99, 1.01, 0.99] }}
        transition={{ rotate: { duration: 12, repeat: Infinity, ease: 'linear' }, scale: { duration: 1.5, repeat: Infinity, ease: 'easeInOut' } }}
        className="absolute w-44 h-44 rounded-full border"
        style={{ borderColor: currentState.primary, boxShadow: `0 0 25px ${currentState.primary}40` }}
      />

      {/* Hexagonal HUD Geometry Overlay */}
      <svg className="absolute w-52 h-52 opacity-40 pointer-events-none" viewBox="0 0 100 100">
        <polygon 
          points="50,5 90,25 90,75 50,95 10,75 10,25" 
          fill="none" 
          stroke={currentState.primary} 
          strokeWidth="0.6" 
          strokeDasharray="4 2"
        />
      </svg>

      {/* Central Core Head / Neural Hub */}
      <div 
        className="relative z-10 w-32 h-32 rounded-full bg-[#02050e]/90 border-2 shadow-2xl flex flex-col items-center justify-center transition-all duration-500"
        style={{ borderColor: currentState.primary, boxShadow: `0 0 35px ${currentState.primary}50` }}
      >
        <div className="relative w-12 h-12 flex items-center justify-center">
          <Cpu className="w-10 h-10 animate-pulse" style={{ color: currentState.primary }} />
        </div>

        <span className="text-[10px] font-orbitron font-extrabold tracking-widest mt-1 text-white">
          JARVIS AI
        </span>
        <span className="text-[8px] font-mono tracking-wider font-bold animate-pulse mt-0.5" style={{ color: currentState.primary }}>
          {aiState}
        </span>
      </div>

      {/* State Directives Control Bar */}
      <div className="absolute bottom-3 z-20 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#02050e]/90 border border-slate-800 font-mono text-[9px]">
        <span className="text-slate-500 mr-1">STATE:</span>
        {Object.keys(stateColors).map((st) => (
          <button
            key={st}
            onClick={() => setAiState(st)}
            className={`px-2 py-0.5 rounded transition-all ${
              aiState === st 
                ? 'bg-[#00E5FF]/20 text-[#00E5FF] border border-[#00E5FF]/40 font-bold' 
                : 'text-slate-500 hover:text-slate-300'
            }`}
          >
            {st}
          </button>
        ))}
      </div>
    </div>
  );
};