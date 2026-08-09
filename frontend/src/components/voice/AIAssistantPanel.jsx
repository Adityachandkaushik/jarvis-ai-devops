import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mic, Bot, Sparkles, Send, Volume2 } from 'lucide-react';

export const AIAssistantPanel = () => {
  const [isListening, setIsListening] = useState(false);

  return (
    <div className="glass-panel rounded-xl p-5 border border-[#00E5FF]/20 h-full flex flex-col justify-between">
      <div>
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-slate-800 font-mono">
          <div className="flex items-center space-x-2">
            <Bot className="w-5 h-5 text-[#00E5FF]" />
            <h3 className="font-orbitron text-xs font-bold text-white tracking-wider">JARVIS ASSISTANT</h3>
          </div>
          <span className="px-2 py-0.5 rounded text-[9px] bg-[#10B981]/20 text-[#10B981] border border-[#10B981]/40">
            ONLINE
          </span>
        </div>

        {/* Dynamic Voice Waveform Equalizer */}
        <div className="my-5 p-4 rounded-xl bg-[#02050e]/80 border border-slate-800 flex flex-col items-center justify-center space-y-3">
          <div className="flex items-center justify-center space-x-1.5 h-12">
            {[40, 75, 35, 95, 60, 100, 50, 85, 40, 70].map((height, i) => (
              <motion.div
                key={i}
                animate={{ height: isListening ? [`${height}%`, `${(height * 0.3)}%`, `${height}%`] : '20%' }}
                transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.08 }}
                className="w-1 bg-gradient-to-t from-[#8B5CF6] via-[#3B82F6] to-[#00E5FF] rounded-full"
              />
            ))}
          </div>
          <p className="text-xs font-mono text-slate-300 text-center">
            "How can I assist you, Aditya?"
          </p>
        </div>

        {/* Suggested Directives */}
        <div className="space-y-2">
          <p className="text-[9px] font-mono text-slate-500 uppercase tracking-widest">Suggested Commands</p>
          {[
            'Check Docker container health',
            'Show failed Jenkins pipeline builds',
            'Restart Kubernetes worker node',
            'Execute cluster memory cleanup'
          ].map((suggestion, idx) => (
            <motion.button
              key={idx}
              whileHover={{ x: 3 }}
              className="w-full text-left p-2 rounded-lg bg-slate-900/60 border border-slate-800 hover:border-[#00E5FF]/40 text-xs text-slate-300 font-mono flex items-center justify-between group transition-all"
            >
              <span className="truncate">{suggestion}</span>
              <Sparkles className="w-3.5 h-3.5 text-[#00E5FF] opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.button>
          ))}
        </div>
      </div>

      {/* Input & Voice Controls */}
      <div className="mt-4 pt-3 border-t border-slate-800 space-y-2">
        <div className="relative flex items-center">
          <input
            type="text"
            placeholder="Ask JARVIS AI..."
            className="w-full pl-3 pr-8 py-2 bg-[#02050e] border border-slate-800 rounded-lg text-xs font-mono text-slate-200 focus:outline-none focus:border-[#00E5FF]"
          />
          <button className="absolute right-2 text-[#00E5FF]">
            <Send className="w-3.5 h-3.5" />
          </button>
        </div>

        <motion.button
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => setIsListening(!isListening)}
          className={`w-full py-2.5 rounded-lg border font-orbitron text-xs font-bold flex items-center justify-center space-x-2 transition-all ${
            isListening 
              ? 'bg-[#10B981]/20 border-[#10B981] text-[#10B981] shadow-[0_0_15px_rgba(16,185,129,0.3)]'
              : 'bg-gradient-to-r from-[#00E5FF]/20 to-[#8B5CF6]/20 border-[#00E5FF]/50 text-[#00E5FF]'
          }`}
        >
          <Mic className={`w-4 h-4 ${isListening ? 'animate-ping' : ''}`} />
          <span>{isListening ? 'LISTENING (TAP TO STOP)' : 'TAP TO SPEAK'}</span>
        </motion.button>
      </div>
    </div>
  );
};