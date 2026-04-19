/** Base leave categories — order suffix is computed dynamically, not stored in enum. */
export type LeaveCategory =
  | '特' | '補' | '休' | '消' | '身' | '事' | '陪' | '公' | '病'  // full-day (1.0)
  | '宿';                                                            // half-day (0.5)

export const FULL_DAY_CATEGORIES: LeaveCategory[] = ['特', '補', '休', '消', '身', '事', '陪', '公', '病'];
export const HALF_DAY_CATEGORIES: LeaveCategory[] = ['宿'];
export const ALL_CATEGORIES: LeaveCategory[] = [...FULL_DAY_CATEGORIES, ...HALF_DAY_CATEGORIES];

export const CATEGORY_WEIGHT: Record<LeaveCategory, number> = {
  '特': 1, '補': 1, '休': 1, '消': 1, '身': 1, '事': 1, '陪': 1, '公': 1, '病': 1,
  '宿': 0.5,
};

export type GroupType = 'A' | 'B';

/** Per-month, per-group settings document in Firestore. */
export interface MonthlySettings {
  monthKey: string;            // "YYYY-MM"
  group: GroupType;
  firstWorkDay: string;        // ISO "YYYY-MM-DD" (empty allowed for uninitialized)
  members: string[];
  dailyQuotas: Record<string, number>;
  shiftExceptions: Record<string, boolean>;
  schemaVersion: 2;
  updatedAt?: number;
  updatedBy?: string;
}

/** A single leave record. Document id = `${memberName}_${date}_${order}`. */
export interface MonthlyLeaveEntry {
  date: string;                // "YYYY-MM-DD"
  memberName: string;
  category: LeaveCategory;     // base type e.g. '特', '補', '宿'
  order: number;               // 1-based, per member per month
  group: GroupType;
  monthKey: string;
  updatedAt?: number;
  updatedBy?: string;
}

/** What App.tsx keeps in state for the currently viewed month+group. */
export interface MonthData {
  settings: MonthlySettings;
  entries: MonthlyLeaveEntry[];
}

export type PageView = 'settings' | 'filling' | 'history';

export type AuditAction =
  | 'ADD_LEAVE'
  | 'REMOVE_LEAVE'
  | 'UPDATE_QUOTA'
  | 'UPDATE_MEMBERS'
  | 'UPDATE_FIRST_WORK_DAY'
  | 'UPDATE_SHIFT_EXCEPTION'
  | 'IMPORT_MEMBERS';

/**
 * `expireAt` must be a Firestore Timestamp (not a number) for TTL policy to work.
 * We treat it opaquely here — the writer passes Timestamp.fromMillis(...) from firebase/firestore.
 */
export interface AuditLogEntry {
  id?: string;                 // Firestore doc id (set after fetch)
  timestamp: number;           // client wall clock; also order key
  expireAt: unknown;           // Firestore Timestamp — required by TTL policy
  userEmail: string;
  userDisplayName: string;
  group: GroupType;
  monthKey: string;
  action: AuditAction;
  target: {
    date?: string;
    memberName?: string;
  };
  before: unknown;
  after: unknown;
  summary: string;
}

export const createEmptyMonthlySettings = (
  monthKey: string,
  group: GroupType
): MonthlySettings => ({
  monthKey,
  group,
  firstWorkDay: '',
  members: [],
  dailyQuotas: {},
  shiftExceptions: {},
  schemaVersion: 2,
});
