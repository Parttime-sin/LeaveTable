import React, { useEffect, useState } from 'react';
import { X, RefreshCw, Trash2, Bug } from 'lucide-react';
import { getLogs, clearLogs, LogEntry } from '../logger';

interface DebugConsoleProps {
  isVisible: boolean;
  onClose: () => void;
}

const DebugConsole: React.FC<DebugConsoleProps> = ({ isVisible, onClose }) => {
  const [logs, setLogs] = useState<LogEntry[]>([]);

  const refreshLogs = () => {
    setLogs(getLogs());
  };

  useEffect(() => {
    if (isVisible) {
      refreshLogs();
      const interval = setInterval(refreshLogs, 1000); // Auto refresh every second when open
      return () => clearInterval(interval);
    }
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 h-[50vh] bg-black/90 text-green-400 z-[10000] flex flex-col font-mono text-xs border-t-2 border-green-600 shadow-2xl">
      <div className="flex justify-between items-center p-2 bg-gray-900 border-b border-gray-700">
        <div className="flex items-center gap-2">
          <Bug className="w-4 h-4" />
          <span className="font-bold">System Logs</span>
        </div>
        <div className="flex gap-2">
          <button onClick={refreshLogs} className="p-1 hover:bg-gray-700 rounded text-blue-400">
            <RefreshCw className="w-4 h-4" />
          </button>
          <button onClick={() => { clearLogs(); refreshLogs(); }} className="p-1 hover:bg-gray-700 rounded text-red-400">
            <Trash2 className="w-4 h-4" />
          </button>
          <button onClick={onClose} className="p-1 hover:bg-gray-700 rounded text-gray-400">
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
      <div className="flex-1 overflow-y-auto p-2 space-y-1">
        {logs.length === 0 && <div className="text-gray-500 italic">No logs recorded.</div>}
        {logs.map((log, index) => (
          <div key={index} className="border-b border-gray-800 pb-1 break-words">
            <span className="text-gray-500 mr-2">[{log.timestamp}]</span>
            <span className={
              log.type === 'error' ? 'text-red-400 font-bold' :
              log.type === 'success' ? 'text-green-300 font-bold' :
              log.type === 'warn' ? 'text-yellow-400' : 'text-gray-300'
            }>
              {log.message}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DebugConsole;