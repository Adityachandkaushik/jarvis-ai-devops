import React, { useState } from 'react';
import { Terminal as TerminalIcon, Trash2, Shield, Play } from 'lucide-react';

export const FuturisticTerminal = () => {
  const [logs, setLogs] = useState([
    { id: 1, type: 'system', text: 'JARVIS OS Neural Terminal v2.0 - Active' },
    { id: 2, type: 'success', text: 'Authenticated root@jarvis-core' },
    { id: 3, type: 'command', text: '$ kubectl get pods -n devops' },
    { id: 4, type: 'output', text: 'NAME                      READY   STATUS    RESTARTS   AGE' },
    { id: 5, type: 'output', text: 'api-gateway-784f9b-x82z   1/1     Running   0          4h20m' },
    { id: 6, type: 'output', text: 'auth-service-5f6b8c-99zx   1/1     Running   0          4h20m' },
    { id: 7, type: 'success', text: 'All 24 pod replicas healthy.' }
  ]);
  const [inputVal, setInputVal] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputVal.trim()) return;

    setLogs(prev => [
      ...prev,
      { id: Date.now(), type: 'command', text: `$ ${inputVal}` },
      { id: Date.now() + 1, type: 'info', text: `Executing directive: ${inputVal}...` },
      { id: Date.now() + 2, type: 'success', text: `Directive executed successfully.` }
    ]);
    setInputVal('');
  };

  return (
    <div className="glass-panel rounded-xl border border-[#00E5FF]/20 flex flex-col h-full overflow-hidden font-mono">
      {/* Top Header */}
      <div className="px-4 py-2 bg-[#02050e]/90 border-b border-slate-800 flex items-center justify-between text-xs">
        <div className="flex items-center space-x-2">
          <TerminalIcon className="w-3.5 h-3.5 text-[#00E5FF]" />
          <span className="font-bold text-slate-300">COMMAND CONSOLE</span>
        </div>
        <div className="flex items-center space-x-3">
          <button onClick={() => setLogs([])} className="text-slate-400 hover:text-[#EF4444]">
            <Trash2 className="w-3.5 h-3.5" />
          </button>
          <div className="w-2 h-2 rounded-full bg-[#10B981]" />
        </div>
      </div>

      {/* Terminal Screen */}
      <div className="p-4 flex-1 bg-[#02050e]/95 text-xs overflow-y-auto space-y-1 min-h-[190px]">
        {logs.map((log) => (
          <div key={log.id}>
            {log.type === 'command' && <span className="text-[#00E5FF] font-bold">{log.text}</span>}
            {log.type === 'system' && <span className="text-[#8B5CF6] font-semibold">{log.text}</span>}
            {log.type === 'info' && <span className="text-slate-400">{log.text}</span>}
            {log.type === 'success' && <span className="text-[#10B981]">{log.text}</span>}
            {log.type === 'output' && <span className="text-slate-300">{log.text}</span>}
          </div>
        ))}

        <form onSubmit={handleSubmit} className="flex items-center space-x-2 pt-2">
          <span className="text-[#00E5FF] font-bold">jarvis@devops:~$</span>
          <input
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            className="flex-1 bg-transparent text-slate-100 focus:outline-none font-mono text-xs"
            placeholder="Type directive..."
          />
          <span className="w-2 h-4 bg-[#00E5FF] animate-pulse inline-block" />
        </form>
      </div>
    </div>
  );
};