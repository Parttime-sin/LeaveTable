import { describe, it, expect } from 'vitest';
import {
  format,
  parseISO,
  differenceInCalendarDays,
  eachDayOfInterval,
  startOfMonth,
  endOfMonth,
  addDays,
  addMonths,
} from './dateHelpers';

describe('dateHelpers', () => {
  it('format yyyy-MM-dd zero-pads single digits', () => {
    expect(format(new Date(2025, 0, 5), 'yyyy-MM-dd')).toBe('2025-01-05');
  });

  it('format "d" returns unpadded day-of-month', () => {
    expect(format(new Date(2025, 3, 9), 'd')).toBe('9');
  });

  it('parseISO round-trips with format', () => {
    const d = parseISO('2025-04-15');
    expect(format(d, 'yyyy-MM-dd')).toBe('2025-04-15');
  });

  it('differenceInCalendarDays ignores local time drift', () => {
    expect(
      differenceInCalendarDays(parseISO('2025-04-05'), parseISO('2025-04-01'))
    ).toBe(4);
  });

  it('eachDayOfInterval is inclusive of both endpoints', () => {
    const days = eachDayOfInterval({
      start: parseISO('2025-04-01'),
      end: parseISO('2025-04-03'),
    });
    expect(days).toHaveLength(3);
    expect(format(days[0], 'yyyy-MM-dd')).toBe('2025-04-01');
    expect(format(days[2], 'yyyy-MM-dd')).toBe('2025-04-03');
  });

  it('startOfMonth / endOfMonth bound a calendar month', () => {
    const anchor = new Date(2025, 3, 15);
    expect(format(startOfMonth(anchor), 'yyyy-MM-dd')).toBe('2025-04-01');
    expect(format(endOfMonth(anchor), 'yyyy-MM-dd')).toBe('2025-04-30');
  });

  it('addDays and addMonths do not mutate the input', () => {
    const d = new Date(2025, 3, 1);
    addDays(d, 10);
    addMonths(d, 2);
    expect(format(d, 'yyyy-MM-dd')).toBe('2025-04-01');
  });
});
