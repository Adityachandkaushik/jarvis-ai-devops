import React, { useState } from 'react';
import { Terminal as TerminalIcon, Trash2 } from 'lucide-react';

export const FuturisticTerminal = () => {
  const [logs, setLogs] = useState([
    { id: 1, type: 'system', text: 'Welcome to JARVIS OS Terminal v2.0' },
    { id: 2, type: 'success', text: 'Authenticated as root@jarvis-core' },
    { id: 3, type: 'command', text: '$ docker ps' },
    { id: 4, type: 'output', text: 'CONTAINER ID   IMAGE          STATUS' },
    { id: 5, type: 'output', text: 'a1b2c3d4e5f6   nginx:latest   Up 2 hours' },
  ]);
  const [inputVal, setInputVal] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputVal.trim()) return;
    setLogs([...logs, { id: Date.now(), type: 'command', text: `$ ${inputVal}` }, { id: Date.now() + 1, type: 'success', text: 'Executed.' }]);
    setInputVal('');
  };

  return (
    <div className="glass-panel rounded-xl border border-[#00E5FF]/20 flex flex-col h-full overflow-hidden">
      <div className="px-4 py-2 bg-slate-950/80 border-b border-slate-800 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <TerminalIcon className="w-4 h-4 text-[#00E5FF]" />
          <span className="text-xs font-mono font-bold text-slate-300">TERMINAL</span>
        </div>
        <button onClick={() => setLogs([])} className="text-slate-400 hover:text-[#EF4444]"><Trash2 className="w-3.5 h-3.5" /></button>
      </div>
      <div className="p-4 flex-1 bg-[#030712]/90 font-mono text-xs overflow-y-auto space-y-1.5 min-h-[180px]">
        {logs.map((log) => (
          <div key={log.id}>
            <span className={log.type === 'command' ? 'text-[#00E5FF]' : log.type === 'success' ? 'text-[#22C55E]' : 'text-slate-300'}>{log.text}</span>
          </div>
        ))}
        <form onSubmit={handleSubmit} className="flex items-center space-x-2 pt-2">
          <span className="text-[#00E5FF]">jarvis@devops:~$</span>
          <input type="text" value={inputVal} onChange={(e) => setInputVal(e.target.value)} className="flex-1 bg-transparent text-slate-100 focus:outline-none" />
        </form>
      </div>
    </div>
  );
};