export enum LeaveType {
  Special1 = '特1',
  Special2 = '特2',
  Special3 = '特3',
  Comp1 = '補1',
  Comp2 = '補2',
  Comp3 = '補3',
  Comp4 = '補4',
  Rest1 = '休1',
  Rest2 = '休2',
  Rest3 = '休3',
  Rest4 = '休4',
  Personal1 = '身1',
  Personal2 = '身2',
  Overnight = '外宿'
}

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

/** A single leave record. Document id = `${memberName}_${date}`. */
export interface MonthlyLeaveEntry {
  date: string;                // "YYYY-MM-DD"
  memberName: string;
  type: LeaveType;
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
