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
  Overnight = '外宿'
}

export type GroupType = 'A' | 'B';

export interface AppSettings {
  year: number;
  month: number; // 0-11 for Jan-Dec
  
  // Group A Settings
  firstWorkDayA: string; // ISO Date string YYYY-MM-DD
  membersA: string[];
  dailyQuotasA: Record<string, number>; 

  // Group B Settings
  firstWorkDayB: string;
  membersB: string[];
  dailyQuotasB: Record<string, number>;
  
  // Legacy fields for migration support (optional)
  firstWorkDay?: string;
  members?: string[];
  dailyQuotas?: Record<string, number>;
}

export interface LeaveEntry {
  id: string;
  date: string;
  memberName: string;
  type: LeaveType;
  timestamp?: number;
}

export interface AppState {
  settings: AppSettings;
  leaves: LeaveEntry[];
}

export type PageView = 'settings' | 'filling';