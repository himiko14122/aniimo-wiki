import { routing, type Locale } from '@/i18n/routing';

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://aniimo-wiki.wiki';
export const SITE_NAME = 'Aniimo Wiki';
export const HERO_IMAGE = '/images/hero.webp';
export const LOGO_IMAGE = '/logo.svg';
export const TWITTER_HANDLE = '';
export const GA_TRACKING_ID = 'G-F2TEQ00V4Q';
export const SLUG_PREFIX = 'Aniimo-';

export const EXTERNAL_LINKS = {
  store: 'https://store.steampowered.com/app/4126040/Aniimo/',
  discord: 'https://discord.com/invite/aniimo',
  youtube: 'https://www.youtube.com/@Aniimo_EN',
  website: 'https://www.aniimo.com/',
  twitter: '',
} as const;

export function absoluteUrl(path = '/') {
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `${SITE_URL}${normalized}`;
}

export function localizedPath(locale: Locale | string, path = '/') {
  const normalized = path === '' ? '/' : path.startsWith('/') ? path : `/${path}`;
  if (locale === routing.defaultLocale) {
    return normalized === '/' ? '/' : normalized;
  }
  return normalized === '/' ? `/${locale}` : `/${locale}${normalized}`;
}
