import React from 'react';
import { motion } from 'framer-motion';
import { Mic, Bot, Sparkles, Send } from 'lucide-react';

export const AIAssistantPanel = () => {
  return (
    <div className="glass-panel rounded-xl p-5 border border-[#00E5FF]/20 h-full flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between pb-3 border-b border-slate-800">
          <div className="flex items-center space-x-2">
            <Bot className="w-5 h-5 text-[#00E5FF]" />
            <h3 className="font-orbitron text-sm font-bold text-white">JARVIS AI ASSISTANT</h3>
          </div>
          <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#22C55E]/20 text-[#22C55E] border border-[#22C55E]/40">ONLINE</span>
        </div>

        <div className="my-6 p-4 rounded-xl bg-[#030712]/80 border border-slate-800 flex flex-col items-center justify-center space-y-3">
          <div className="flex items-center space-x-1 h-12">
            {[40, 70, 30, 90, 60, 100, 50, 80, 45].map((height, i) => (
              <motion.div
                key={i}
                animate={{ height: [`${height}%`, `${(height * 0.4)}%`, `${height}%`] }}
                transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.1 }}
                className="w-1 bg-gradient-to-t from-[#7C3AED] to-[#00E5FF] rounded-full"
              />
            ))}
          </div>
          <p className="text-xs font-mono text-slate-400">How can I help you, Aditya?</p>
        </div>

        <div className="space-y-2">
          <p className="text-[10px] font-mono text-slate-500 uppercase">Quick Directives</p>
          {['Deploy latest Docker image', 'Analyze pod performance', 'Restart Jenkins pipeline'].map((cmd, idx) => (
            <button key={idx} className="w-full text-left p-2 rounded-lg bg-slate-900/60 border border-slate-800 text-xs text-slate-300 font-mono flex items-center justify-between">
              <span>{cmd}</span>
              <Sparkles className="w-3.5 h-3.5 text-[#00E5FF]" />
            </button>
          ))}
        </div>
      </div>

      <div className="mt-4 pt-3 border-t border-slate-800 space-y-2">
        <div className="relative flex items-center">
          <input type="text" placeholder="Ask JARVIS..." className="w-full pl-3 pr-8 py-2 bg-[#030712] border border-slate-700 rounded-lg text-xs font-mono text-slate-200 focus:outline-none focus:border-[#00E5FF]" />
          <button className="absolute right-2 text-[#00E5FF]"><Send className="w-4 h-4" /></button>
        </div>
        <button className="w-full py-2 rounded-lg bg-gradient-to-r from-[#00E5FF]/20 to-[#7C3AED]/20 border border-[#00E5FF]/50 text-[#00E5FF] font-orbitron text-xs font-bold flex items-center justify-center space-x-2">
          <Mic className="w-4 h-4 animate-pulse" />
          <span>Tap to Speak</span>
        </button>
      </div>
    </div>
  );
};