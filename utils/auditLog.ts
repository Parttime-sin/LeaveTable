import {
  addDoc,
  collection,
  onSnapshot,
  query,
  orderBy,
  limit,
  Timestamp,
  Unsubscribe,
} from 'firebase/firestore';
import { db, isFirebaseEnabled } from '../firebase';
import { AuditLogEntry, AuditAction, GroupType, MonthlySettings } from '../types';
import { ROOT_COLLECTION } from './firestoreSchema';

// Fixed holder document — audit logs live under it per existing firestore.rules.
const AUDIT_HOLDER_DOC = 'audit_logs_root';
const AUDIT_SUBCOLLECTION = 'audit_logs';
const TTL_MS = 60 * 24 * 60 * 60 * 1000; // 60 days

/** Build a human-readable summary for display in the history page. */
export const formatSummary = (
  action: AuditAction,
  target: { date?: string; memberName?: string },
  group: GroupType,
  monthKey: string,
  extra?: string
): string => {
  const where = `${group}班 ${monthKey}`;
  switch (action) {
    case 'ADD_LEAVE':
      return `${where} 新增假單 ${target.memberName ?? ''} ${target.date ?? ''}${extra ? ' ' + extra : ''}`;
    case 'REMOVE_LEAVE':
      return `${where} 刪除假單 ${target.memberName ?? ''} ${target.date ?? ''}`;
    case 'UPDATE_QUOTA':
      return `${where} 更新配額${target.date ? ` (${target.date})` : '（批量）'}`;
    case 'UPDATE_MEMBERS':
      return `${where} 更新人員名單${extra ? ` — ${extra}` : ''}`;
    case 'UPDATE_FIRST_WORK_DAY':
      return `${where} 更新首日上班日${extra ? ` → ${extra}` : ''}`;
    case 'UPDATE_SHIFT_EXCEPTION':
      return `${where} 更新例外排班`;
    case 'IMPORT_MEMBERS':
      return `${where} 從上月匯入人員${extra ? ` (${extra} 位)` : ''}`;
    default:
      return `${where} 未知動作`;
  }
};

interface WriteAuditOptions {
  user: { email: string | null; displayName: string | null } | null;
  group: GroupType;
  monthKey: string;
  action: AuditAction;
  target?: { date?: string; memberName?: string };
  before?: unknown;
  after?: unknown;
  extra?: string;
}

/**
 * Write an audit log entry. Never throws into the caller — failures are logged only.
 * A missing user (local mode) skips the write silently.
 */
export const writeAuditLog = async (opts: WriteAuditOptions): Promise<void> => {
  if (!isFirebaseEnabled() || !db || !opts.user?.email) return;

  const now = Date.now();
  const entry: AuditLogEntry = {
    timestamp: now,
    expireAt: Timestamp.fromMillis(now + TTL_MS),
    userEmail: opts.user.email,
    userDisplayName: opts.user.displayName ?? opts.user.email,
    group: opts.group,
    monthKey: opts.monthKey,
    action: opts.action,
    target: opts.target ?? {},
    before: opts.before ?? null,
    after: opts.after ?? null,
    summary: formatSummary(opts.action, opts.target ?? {}, opts.group, opts.monthKey, opts.extra),
  };

  try {
    const ref = collection(db, ROOT_COLLECTION, AUDIT_HOLDER_DOC, AUDIT_SUBCOLLECTION);
    await addDoc(ref, entry);
  } catch (e) {
    console.error('writeAuditLog failed:', e);
  }
};

/**
 * Shallow record compare — counts members of a,b that differ.
 */
const recordChanged = <T>(a: Record<string, T>, b: Record<string, T>): boolean => {
  const ka = Object.keys(a);
  const kb = Object.keys(b);
  if (ka.length !== kb.length) return true;
  for (const k of ka) if (a[k] !== b[k]) return true;
  return false;
};

/**
 * Compares before/after MonthlySettings and returns the list of audit writes
 * that should happen (usually 0 or 1, occasionally 2+ when multiple sections changed).
 */
export const diffSettingsAudits = (
  before: MonthlySettings,
  after: MonthlySettings
): Array<{ action: AuditAction; extra?: string; before?: unknown; after?: unknown }> => {
  const out: Array<{ action: AuditAction; extra?: string; before?: unknown; after?: unknown }> = [];

  if (before.firstWorkDay !== after.firstWorkDay) {
    out.push({
      action: 'UPDATE_FIRST_WORK_DAY',
      extra: after.firstWorkDay || '(清除)',
      before: before.firstWorkDay,
      after: after.firstWorkDay,
    });
  }

  const ma = before.members.join(',');
  const mb = after.members.join(',');
  if (ma !== mb) {
    out.push({
      action: 'UPDATE_MEMBERS',
      extra: `${before.members.length} → ${after.members.length} 人`,
      before: before.members,
      after: after.members,
    });
  }

  if (recordChanged(before.dailyQuotas, after.dailyQuotas)) {
    out.push({ action: 'UPDATE_QUOTA', before: before.dailyQuotas, after: after.dailyQuotas });
  }

  if (recordChanged(before.shiftExceptions, after.shiftExceptions)) {
    out.push({
      action: 'UPDATE_SHIFT_EXCEPTION',
      before: before.shiftExceptions,
      after: after.shiftExceptions,
    });
  }

  return out;
};

/**
 * Subscribe to the latest audit logs (newest first).
 * @param max  number of entries to keep in view
 */
export const subscribeAuditLogs = (
  max: number,
  onData: (logs: AuditLogEntry[]) => void,
  onError: (err: Error) => void
): Unsubscribe => {
  if (!isFirebaseEnabled() || !db) return () => {};
  const ref = collection(db, ROOT_COLLECTION, AUDIT_HOLDER_DOC, AUDIT_SUBCOLLECTION);
  const q = query(ref, orderBy('timestamp', 'desc'), limit(max));
  return onSnapshot(
    q,
    (snap) => {
      const list: AuditLogEntry[] = [];
      snap.forEach((d) => list.push({ id: d.id, ...(d.data() as AuditLogEntry) }));
      onData(list);
    },
    (err) => {
      console.error('subscribeAuditLogs error:', err);
      onError(err);
    }
  );
};
