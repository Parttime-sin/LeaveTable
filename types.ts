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

export interface AppSettings {
  year: number;
  month: number; // 0-11 for Jan-Dec
  firstWorkDay: string; // ISO Date string YYYY-MM-DD
  members: string[];
  // Map of date string (YYYY-MM-DD) to quota number (e.g., 2 or 0.5)
  dailyQuotas: Record<string, number>; 
}

export interface LeaveEntry {
  id: string;
  date: string;
  memberName: string;
  type: LeaveType;
}

export interface AppState {
  settings: AppSettings;
  leaves: LeaveEntry[];
}

export type PageView = 'settings' | 'filling';