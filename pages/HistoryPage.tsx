import React, { useEffect, useMemo, useState } from 'react';
import { ChevronDown, ChevronRight, History as HistoryIcon, RefreshCw } from 'lucide-react';
import { AuditLogEntry, AuditAction, GroupType } from '../types';
import { subscribeAuditLogs } from '../utils/auditLog';

const ACTION_LABELS: Record<AuditAction, string> = {
  ADD_LEAVE: '新增假單',
  REMOVE_LEAVE: '刪除假單',
  UPDATE_QUOTA: '更新配額',
  UPDATE_MEMBERS: '更新人員',
  UPDATE_FIRST_WORK_DAY: '更新首日上班日',
  UPDATE_SHIFT_EXCEPTION: '更新例外排班',
  IMPORT_MEMBERS: '匯入人員',
};

const ACTION_COLORS: Record<AuditAction, string> = {
  ADD_LEAVE: 'bg-green-50 text-green-700 border-green-200',
  REMOVE_LEAVE: 'bg-red-50 text-red-700 border-red-200',
  UPDATE_QUOTA: 'bg-blue-50 text-blue-700 border-blue-200',
  UPDATE_MEMBERS: 'bg-purple-50 text-purple-700 border-purple-200',
  UPDATE_FIRST_WORK_DAY: 'bg-amber-50 text-amber-700 border-amber-200',
  UPDATE_SHIFT_EXCEPTION: 'bg-orange-50 text-orange-700 border-orange-200',
  IMPORT_MEMBERS: 'bg-teal-50 text-teal-700 border-teal-200',
};

const formatTimestamp = (ts: number): string => {
  const d = new Date(ts);
  const y = d.getFullYear();
  const mo = String(d.getMonth() + 1).padStart(2, '0');
  const da = String(d.getDate()).padStart(2, '0');
  const h = String(d.getHours()).padStart(2, '0');
  const mi = String(d.getMinutes()).padStart(2, '0');
  return `${y}-${mo}-${da} ${h}:${mi}`;
};

const HistoryPage: React.FC = () => {
  const [logs, setLogs] = useState<AuditLogEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Filters
  const [groupFilter, setGroupFilter] = useState<GroupType | 'ALL'>('ALL');
  const [actionFilter, setActionFilter] = useState<AuditAction | 'ALL'>('ALL');
  const [monthFilter, setMonthFilter] = useState<string>('ALL');
  const [userFilter, setUserFilter] = useState<string>('ALL');

  // Expanded rows
  const [expandedIds, setExpandedIds] = useState<Set<string>>(new Set());

  useEffect(() => {
    setLoading(true);
    const unsub = subscribeAuditLogs(
      100,
      (list) => {
        setLogs(list);
        setLoading(false);
      },
      (err) => {
        setError(err.message);
        setLoading(false);
      }
    );
    return () => unsub();
  }, []);

  const { monthOptions, userOptions } = useMemo(() => {
    const months = new Set<string>();
    const users = new Set<string>();
    logs.forEach((l) => {
      months.add(l.monthKey);
      users.add(l.userDisplayName);
    });
    return {
      monthOptions: Array.from(months).sort().reverse(),
      userOptions: Array.from(users).sort(),
    };
  }, [logs]);

  const filtered = logs.filter((l) => {
    if (groupFilter !== 'ALL' && l.group !== groupFilter) return false;
    if (actionFilter !== 'ALL' && l.action !== actionFilter) return false;
    if (monthFilter !== 'ALL' && l.monthKey !== monthFilter) return false;
    if (userFilter !== 'ALL' && l.userDisplayName !== userFilter) return false;
    return true;
  });

  const toggleExpand = (id: string) => {
    setExpandedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const resetFilters = () => {
    setGroupFilter('ALL');
    setActionFilter('ALL');
    setMonthFilter('ALL');
    setUserFilter('ALL');
  };

  return (
    <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-900 flex items-center">
          <HistoryIcon className="w-6 h-6 mr-2 text-primary" />
          變更歷史紀錄
        </h1>
        <span className="text-sm text-gray-500">
          最近 100 筆，保留 60 天
        </span>
      </div>

      {/* Filters */}
      <div className="bg-white shadow rounded-lg p-4 mb-4 grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div>
          <label className="block text-xs font-medium text-gray-500 mb-1">班別</label>
          <select
            value={groupFilter}
            onChange={(e) => setGroupFilter(e.target.value as GroupType | 'ALL')}
            className="block w-full text-sm rounded border-gray-300 p-2 border"
          >
            <option value="ALL">全部</option>
            <option value="A">A 班</option>
            <option value="B">B 班</option>
          </select>
        </div>
        <div>
          <label className="block text-xs font-medium text-gray-500 mb-1">動作類型</label>
          <select
            value={actionFilter}
            onChange={(e) => setActionFilter(e.target.value as AuditAction | 'ALL')}
            className="block w-full text-sm rounded border-gray-300 p-2 border"
          >
            <option value="ALL">全部</option>
            {Object.entries(ACTION_LABELS).map(([k, label]) => (
              <option key={k} value={k}>{label}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-xs font-medium text-gray-500 mb-1">月份</label>
          <select
            value={monthFilter}
            onChange={(e) => setMonthFilter(e.target.value)}
            className="block w-full text-sm rounded border-gray-300 p-2 border"
          >
            <option value="ALL">全部</option>
            {monthOptions.map((m) => (
              <option key={m} value={m}>{m}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-xs font-medium text-gray-500 mb-1">操作者</label>
          <select
            value={userFilter}
            onChange={(e) => setUserFilter(e.target.value)}
            className="block w-full text-sm rounded border-gray-300 p-2 border"
          >
            <option value="ALL">全部</option>
            {userOptions.map((u) => (
              <option key={u} value={u}>{u}</option>
            ))}
          </select>
        </div>
        <div className="col-span-2 sm:col-span-4 flex justify-end">
          <button
            onClick={resetFilters}
            className="inline-flex items-center px-3 py-1.5 border border-gray-300 rounded text-sm text-gray-600 hover:bg-gray-50"
          >
            <RefreshCw className="w-3 h-3 mr-1" />
            清除篩選
          </button>
        </div>
      </div>

      {/* List */}
      {loading ? (
        <div className="flex justify-center py-10">
          <div className="animate-spin h-8 w-8 border-b-2 border-primary rounded-full"></div>
        </div>
      ) : error ? (
        <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded">
          載入失敗：{error}
        </div>
      ) : filtered.length === 0 ? (
        <div className="bg-white shadow rounded-lg p-8 text-center text-gray-500">
          {logs.length === 0 ? '目前還沒有任何紀錄' : '沒有符合篩選條件的紀錄'}
        </div>
      ) : (
        <div className="bg-white shadow rounded-lg overflow-hidden">
          <ul className="divide-y divide-gray-100">
            {filtered.map((log) => {
              const id = log.id ?? `${log.timestamp}_${log.userEmail}`;
              const expanded = expandedIds.has(id);
              return (
                <li key={id}>
                  <button
                    onClick={() => toggleExpand(id)}
                    className="w-full text-left p-4 hover:bg-slate-50 transition-colors flex items-start gap-3"
                  >
                    <div className="mt-1">
                      {expanded ? (
                        <ChevronDown className="w-4 h-4 text-gray-400" />
                      ) : (
                        <ChevronRight className="w-4 h-4 text-gray-400" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <span className={`text-xs font-medium px-2 py-0.5 rounded border ${ACTION_COLORS[log.action]}`}>
                          {ACTION_LABELS[log.action]}
                        </span>
                        <span className={`text-xs font-bold px-2 py-0.5 rounded ${log.group === 'A' ? 'bg-indigo-100 text-indigo-700' : 'bg-teal-100 text-teal-700'}`}>
                          {log.group} 班
                        </span>
                        <span className="text-xs text-gray-500">{log.monthKey}</span>
                        <span className="text-xs text-gray-400 ml-auto">
                          {formatTimestamp(log.timestamp)}
                        </span>
                      </div>
                      <p className="text-sm text-gray-800 break-words">{log.summary}</p>
                      <p className="text-xs text-gray-500 mt-0.5">
                        by <span className="font-medium">{log.userDisplayName}</span> ({log.userEmail})
                      </p>
                    </div>
                  </button>
                  {expanded && (
                    <div className="px-4 pb-4 pt-0 bg-slate-50 border-t border-slate-100">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
                        <div>
                          <p className="text-xs font-bold text-gray-500 mb-1">變更前 (before)</p>
                          <pre className="text-xs bg-white border border-gray-200 rounded p-2 overflow-auto max-h-60">
{JSON.stringify(log.before, null, 2)}
                          </pre>
                        </div>
                        <div>
                          <p className="text-xs font-bold text-gray-500 mb-1">變更後 (after)</p>
                          <pre className="text-xs bg-white border border-gray-200 rounded p-2 overflow-auto max-h-60">
{JSON.stringify(log.after, null, 2)}
                          </pre>
                        </div>
                      </div>
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default HistoryPage;
