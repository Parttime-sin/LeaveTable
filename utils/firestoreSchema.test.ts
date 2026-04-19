import { describe, it, expect } from 'vitest';
import {
  ROOT_COLLECTION,
  monthKey,
  settingsDocId,
  leavesMonthGroupId,
  leaveEntryId,
  previousMonthKey,
} from './firestoreSchema';

describe('firestoreSchema', () => {
  it('root collection is stable', () => {
    expect(ROOT_COLLECTION).toBe('shift_scheduler');
  });

  it('monthKey pads month to 2 digits (month is 0-indexed internally)', () => {
    expect(monthKey(2025, 0)).toBe('2025-01');
    expect(monthKey(2025, 3)).toBe('2025-04');
    expect(monthKey(2025, 11)).toBe('2025-12');
  });

  it('settingsDocId combines monthKey and group', () => {
    expect(settingsDocId('2025-04', 'A')).toBe('settings_2025-04_A');
    expect(settingsDocId('2025-04', 'B')).toBe('settings_2025-04_B');
  });

  it('leavesMonthGroupId combines monthKey and group', () => {
    expect(leavesMonthGroupId('2025-04', 'A')).toBe('2025-04_A');
  });

  it('leaveEntryId is deterministic for member+date+order', () => {
    expect(leaveEntryId('王小明', '2025-04-15', 1)).toBe('王小明_2025-04-15_1');
    expect(leaveEntryId('王小明', '2025-04-15', 2)).toBe('王小明_2025-04-15_2');
  });

  it('different groups produce different doc ids for same month', () => {
    expect(settingsDocId('2025-04', 'A')).not.toBe(settingsDocId('2025-04', 'B'));
  });

  it('previousMonthKey goes back one month', () => {
    expect(previousMonthKey('2025-05')).toBe('2025-04');
  });

  it('previousMonthKey handles year boundary', () => {
    expect(previousMonthKey('2025-01')).toBe('2024-12');
  });
});
