import { describe, it, expect } from 'vitest';
import { isWorkDay, isOverQuota } from './shiftLogic';

describe('isWorkDay', () => {
  it('returns true on the anchor first work day', () => {
    expect(isWorkDay('2025-04-01', '2025-04-01', {})).toBe(true);
  });

  it('alternates — next day after first work day is rest', () => {
    expect(isWorkDay('2025-04-02', '2025-04-01', {})).toBe(false);
  });

  it('two days after first work day is work again', () => {
    expect(isWorkDay('2025-04-03', '2025-04-01', {})).toBe(true);
  });

  it('exception map overrides the rotating pattern (force rest on a work day)', () => {
    expect(isWorkDay('2025-04-01', '2025-04-01', { '2025-04-01': false })).toBe(false);
  });

  it('exception map overrides the rotating pattern (force work on a rest day)', () => {
    expect(isWorkDay('2025-04-02', '2025-04-01', { '2025-04-02': true })).toBe(true);
  });

  it('returns false when firstWorkDay is empty', () => {
    expect(isWorkDay('2025-04-01', '', {})).toBe(false);
  });
});

describe('isOverQuota', () => {
  it('not over when leaves equal quota', () => {
    expect(isOverQuota(2, 2)).toBe(false);
  });

  it('over when leaves exceed quota', () => {
    expect(isOverQuota(3, 2)).toBe(true);
  });

  it('zero quota is never "over" (it is just unavailable)', () => {
    expect(isOverQuota(0, 0)).toBe(false);
    expect(isOverQuota(5, 0)).toBe(false);
  });

  it('fractional quota — half-day usage within limit', () => {
    expect(isOverQuota(1, 0.5)).toBe(true);
    expect(isOverQuota(0, 0.5)).toBe(false);
  });
});
