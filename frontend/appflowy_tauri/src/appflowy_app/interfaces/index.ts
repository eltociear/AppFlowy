import { ThemeModePB as ThemeMode } from '@/services/backend';

export { ThemeMode };
export interface Document {}

export interface UserSetting {
  theme?: Theme;
  themeMode?: ThemeMode;
}

export enum Theme {
  Default = 'default',
  Dandelion = 'dandelion',
  Lavender = 'lavender',
}
