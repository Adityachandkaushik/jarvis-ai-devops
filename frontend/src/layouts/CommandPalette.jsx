import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Terminal, Box, Layers, GitBranch, Cpu, ShieldCheck, X } from 'lucide-react';

export const CommandPalette = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');

  const commands = [
    { id: 1, title: 'Check Docker Status', category: 'Infrastructure', icon: Box, key: 'D' },
    { id: 2, title: 'Show Kubernetes Pods', category: 'Orchestration', icon: Layers, key: 'K' },
    { id: 3, title: 'Run Jenkins Pipeline Build', category: 'CI/CD', icon: GitBranch, key: 'J' },
    { id: 4, title: 'Open System Terminal', category: 'Console', icon: Terminal, key: 'T' },
    { id: 5, title: 'Inspect Prometheus Metrics', category: 'Observability', icon: ShieldCheck, key: 'P' },
    { id: 6, title: 'Check System Core Health', category: 'Diagnostics', icon: Cpu, key: 'S' },
  ];

  const filteredCommands = commands.filter(cmd => 
    cmd.title.toLowerCase().includes(query.toLowerCase()) || 
    cmd.category.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-start justify-center pt-24 bg-black/60 backdrop-blur-md p-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -20 }}
          transition={{ duration: 0.2 }}
          className="w-full max-w-2xl glass-panel rounded-2xl border border-[#00E5FF]/30 overflow-hidden shadow-2xl"
        >
          {/* Header */}
          <div className="flex items-center px-4 py-3 border-b border-slate-800 bg-[#0B1220]/80">
            <Search className="w-5 h-5 text-[#00E5FF] mr-3" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Type a command or ask JARVIS..."
              className="w-full bg-transparent text-sm text-slate-100 placeholder-slate-500 focus:outline-none font-mono"
              autoFocus
            />
            <button onClick={onClose} className="p-1 text-slate-400 hover:text-slate-200">
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Command List */}
          <div className="p-2 max-h-80 overflow-y-auto space-y-1 font-mono">
            {filteredCommands.length > 0 ? (
              filteredCommands.map((cmd) => {
                const Icon = cmd.icon;
                return (
                  <motion.button
                    key={cmd.id}
                    whileHover={{ x: 3, backgroundColor: 'rgba(0, 229, 255, 0.08)' }}
                    onClick={onClose}
                    className="w-full flex items-center justify-between p-3 rounded-xl text-xs text-left transition-all"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-[#00E5FF]">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-slate-200 font-bold">{cmd.title}</div>
                        <div className="text-[10px] text-slate-500">{cmd.category}</div>
                      </div>
                    </div>
                    <kbd className="px-2 py-1 text-[10px] bg-slate-900 text-slate-400 border border-slate-800 rounded">
                      ⌘{cmd.key}
                    </kbd>
                  </motion.button>
                );
              })
            ) : (
              <div className="p-6 text-center text-xs text-slate-500">
                No matching system directives found.
              </div>
            )}
          </div>

          {/* Footer Metadata */}
          <div className="px-4 py-2 bg-slate-950/80 border-t border-slate-800 flex justify-between items-center text-[10px] font-mono text-slate-500">
            <span>Navigation: <kbd className="text-slate-400">↑</kbd> <kbd className="text-slate-400">↓</kbd></span>
            <span>Select: <kbd className="text-slate-400">↵</kbd></span>
            <span>Close: <kbd className="text-slate-400">ESC</kbd></span>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};