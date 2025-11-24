import { LeaveType } from './types';

export const FULL_DAY_LEAVES = [
  LeaveType.Special1,
  LeaveType.Special2,
  LeaveType.Special3,
  LeaveType.Comp1,
  LeaveType.Comp2,
  LeaveType.Comp3,
  LeaveType.Comp4,
  LeaveType.Rest1,
  LeaveType.Rest2,
  LeaveType.Rest3,
  LeaveType.Rest4,
];

export const HALF_DAY_LEAVES = [
  LeaveType.Overnight
];

export const ALL_LEAVES = [...FULL_DAY_LEAVES, ...HALF_DAY_LEAVES];

export const WEEKDAYS = ['日', '一', '二', '三', '四', '五', '六'];

export const STORAGE_KEY = 'shift_scheduler_v1';