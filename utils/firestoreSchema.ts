import { GroupType } from '../types';

export const ROOT_COLLECTION = 'shift_scheduler';

/**
 * Month key in YYYY-MM format (year is 4 digits, month is 1-12 zero-padded).
 * Use this as the stable identifier for per-month documents.
 */
export const monthKey = (year: number, month0: number): string => {
  const y = String(year).padStart(4, '0');
  const m = String(month0 + 1).padStart(2, '0');
  return `${y}-${m}`;
};

/** Document id for settings of a specific month/group. */
export const settingsDocId = (key: string, group: GroupType): string =>
  `settings_${key}_${group}`;

/** Composite id for the leave-entries container document (one per month+group). */
export const leavesMonthGroupId = (key: string, group: GroupType): string =>
  `${key}_${group}`;

/** Deterministic id for a single leave entry (one per member+date/order). */
export const leaveEntryId = (memberName: string, date: string, order: number): string =>
  `${memberName}_${date}_${order}`;

/** Returns the monthKey of the previous calendar month. */
export const previousMonthKey = (key: string): string => {
  const [y, m] = key.split('-').map(Number);
  const d = new Date(y, (m || 1) - 1, 1);
  d.setMonth(d.getMonth() - 1);
  return monthKey(d.getFullYear(), d.getMonth());
};
