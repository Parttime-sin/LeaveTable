import { parseISO, differenceInCalendarDays } from './dateHelpers';

/**
 * Determines whether a given date is a work day for a shift rotation.
 * Exceptions override the rotating pattern.
 *
 * @param dateStr        Date in 'yyyy-MM-dd' format.
 * @param firstWorkDay   First work day anchor in 'yyyy-MM-dd' (may be empty).
 * @param exceptions     Map of date -> true(work)/false(rest); highest priority.
 */
export const isWorkDay = (
  dateStr: string,
  firstWorkDay: string,
  exceptions: Record<string, boolean> = {}
): boolean => {
  if (exceptions[dateStr] !== undefined) return exceptions[dateStr];
  if (!firstWorkDay) return false;
  const diff = differenceInCalendarDays(parseISO(dateStr), parseISO(firstWorkDay));
  return diff % 2 === 0;
};

/**
 * Returns true when the current leave count exceeds the configured quota.
 * Quota of 0 (or missing) means no leave allowed, but does not count as over quota.
 */
export const isOverQuota = (leavesCount: number, quota: number): boolean => {
  return quota > 0 && leavesCount > quota;
};
