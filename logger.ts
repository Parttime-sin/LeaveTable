export interface LogEntry {
  timestamp: string;
  message: string;
  type: 'info' | 'error' | 'success' | 'warn';
}

const LOG_KEY = 'app_debug_logs';

export const addLog = (message: string, type: 'info' | 'error' | 'success' | 'warn' = 'info') => {
  try {
    const now = new Date();
    const timeString = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}:${now.getSeconds().toString().padStart(2, '0')}.${now.getMilliseconds().toString().padStart(3, '0')}`;
    
    const newEntry: LogEntry = {
      timestamp: timeString,
      message,
      type
    };

    const existingLogsStr = localStorage.getItem(LOG_KEY);
    const existingLogs: LogEntry[] = existingLogsStr ? JSON.parse(existingLogsStr) : [];
    
    // Keep last 50 logs to prevent overflow
    const updatedLogs = [newEntry, ...existingLogs].slice(0, 50);
    
    localStorage.setItem(LOG_KEY, JSON.stringify(updatedLogs));
    
    // Also output to console for development
    console.log(`[${timeString}] ${message}`);
  } catch (e) {
    console.error("Logger error", e);
  }
};

export const getLogs = (): LogEntry[] => {
  try {
    const logs = localStorage.getItem(LOG_KEY);
    return logs ? JSON.parse(logs) : [];
  } catch (e) {
    return [];
  }
};

export const clearLogs = () => {
  localStorage.removeItem(LOG_KEY);
};