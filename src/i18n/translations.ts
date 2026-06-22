import { en } from './locales/en';
import { th } from './locales/th';
import { ja } from './locales/ja';
import { zh } from './locales/zh';

export type Locale = 'en' | 'th' | 'ja' | 'zh';

export const LANGUAGES: Record<Locale, { name: string; flag: string }> = {
  en: { name: 'English', flag: 'EN' },
  th: { name: 'ไทย', flag: 'TH' },
  ja: { name: '日本語', flag: 'JA' },
  zh: { name: '中文', flag: 'ZH' },
};

export const translations = {
  en,
  th,
  ja,
  zh,
};
