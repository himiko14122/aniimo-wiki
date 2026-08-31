import {
  BookOpen, PawPrint, BarChart3, TrendingUp, Link2, Egg, Tent, Users, MapPin, Newspaper,
  Home, Info,
  type LucideIcon,
} from 'lucide-react';

export const NAVIGATION_CONFIG = [
  { key: 'home', labelKey: 'nav_home', path: '/', icon: Home, showInHeader: false, showInSidebar: true, showInFooter: false, sitemap: true, priority: 1, changeFrequency: 'daily' },
  { key: 'guides', labelKey: 'nav_guides', path: '/guides', icon: BookOpen, isContentType: true, showInHeader: true, showInSidebar: true, showInFooter: true, sitemap: true, priority: 0.9, changeFrequency: 'weekly' },
  { key: 'creatures', labelKey: 'nav_creatures', path: '/creatures', icon: PawPrint, isContentType: true, showInHeader: true, showInSidebar: true, showInFooter: true, sitemap: true, priority: 0.9, changeFrequency: 'weekly' },
  { key: 'tier-list', labelKey: 'nav_tierList', path: '/tier-list', icon: BarChart3, isContentType: true, showInHeader: true, showInSidebar: true, showInFooter: true, sitemap: true, priority: 0.9, changeFrequency: 'weekly' },
  { key: 'evolution', labelKey: 'nav_evolution', path: '/evolution', icon: TrendingUp, isContentType: true, showInHeader: true, showInSidebar: true, showInFooter: true, sitemap: true, priority: 0.9, changeFrequency: 'weekly' },
  { key: 'twine', labelKey: 'nav_twine', path: '/twine', icon: Link2, isContentType: true, showInHeader: true, showInSidebar: true, showInFooter: true, sitemap: true, priority: 0.9, changeFrequency: 'weekly' },
  { key: 'egg-heist', labelKey: 'nav_eggHeist', path: '/egg-heist', icon: Egg, isContentType: true, showInHeader: true, showInSidebar: true, showInFooter: true, sitemap: true, priority: 0.9, changeFrequency: 'weekly' },
  { key: 'homeland', labelKey: 'nav_homeland', path: '/homeland', icon: Tent, isContentType: true, showInHeader: true, showInSidebar: true, showInFooter: true, sitemap: true, priority: 0.9, changeFrequency: 'weekly' },
  { key: 'multiplayer', labelKey: 'nav_multiplayer', path: '/multiplayer', icon: Users, isContentType: true, showInHeader: true, showInSidebar: true, showInFooter: true, sitemap: true, priority: 0.9, changeFrequency: 'weekly' },
  { key: 'locations', labelKey: 'nav_locations', path: '/locations', icon: MapPin, isContentType: true, showInHeader: true, showInSidebar: true, showInFooter: true, sitemap: true, priority: 0.9, changeFrequency: 'weekly' },
  { key: 'updates', labelKey: 'nav_updates', path: '/updates', icon: Newspaper, isContentType: true, showInHeader: true, showInSidebar: true, showInFooter: true, sitemap: true, priority: 0.9, changeFrequency: 'weekly' },
  { key: 'about', labelKey: 'nav_about', path: '/about', icon: Info, showInHeader: false, showInSidebar: false, showInFooter: true, sitemap: true, priority: 0.7, changeFrequency: 'monthly' },
  { key: 'sitemap', labelKey: 'nav_sitemap', path: '/sitemap', icon: Info, showInHeader: false, showInSidebar: false, showInFooter: true, sitemap: false, priority: 0.5, changeFrequency: 'monthly' },
  { key: 'privacy-policy', labelKey: 'nav_privacyPolicy', path: '/privacy-policy', icon: Info, showInHeader: false, showInSidebar: false, showInFooter: true, sitemap: true, priority: 0.4, changeFrequency: 'yearly' },
  { key: 'terms-of-service', labelKey: 'nav_termsOfService', path: '/terms-of-service', icon: Info, showInHeader: false, showInSidebar: false, showInFooter: true, sitemap: true, priority: 0.4, changeFrequency: 'yearly' },
] as const;

export const CONTENT_TYPES = NAVIGATION_CONFIG.filter((item) => 'isContentType' in item && item.isContentType).map((item) => item.key);

export const CONTENT_TYPES_WITH_DEDICATED_PAGES = new Set(CONTENT_TYPES);

export type NavigationItem = (typeof NAVIGATION_CONFIG)[number];
export type ContentType = (typeof CONTENT_TYPES)[number];

export function isContentType(value: string): value is ContentType {
  return CONTENT_TYPES.includes(value as ContentType);
}

export function getNavigationItem(path: string) {
  const normalized = path === '' ? '/' : path.startsWith('/') ? path : `/${path}`;
  return NAVIGATION_CONFIG.find((item) => item.path === normalized || item.key === path);
}

export const CONTENT_DIR_NAMES: Record<ContentType | string, string> = {
  'guides': 'guides',
  'creatures': 'creatures',
  'tier-list': 'tier-list',
  'evolution': 'evolution',
  'twine': 'twine',
  'egg-heist': 'egg-heist',
  'homeland': 'homeland',
  'multiplayer': 'multiplayer',
  'locations': 'locations',
  'updates': 'updates',
} as Record<ContentType, string>;

export function getContentDir(contentType: ContentType): string {
  return CONTENT_DIR_NAMES[contentType] || contentType;
}

export const GUIDE_CATEGORIES: Record<string, { emoji: string; order: number }> = {
  'guides':       { emoji: '📖', order: 1 },
  'creatures':    { emoji: '🐾', order: 2 },
  'tier-list':    { emoji: '📊', order: 3 },
  'evolution':    { emoji: '📈', order: 4 },
  'twine':        { emoji: '🔗', order: 5 },
  'egg-heist':    { emoji: '🥚', order: 6 },
  'homeland':     { emoji: '⛺', order: 7 },
  'multiplayer':  { emoji: '👥', order: 8 },
  'locations':    { emoji: '🗺️', order: 9 },
  'updates':      { emoji: '📰', order: 10 },
};

export const CATEGORY_ORDER = Object.entries(GUIDE_CATEGORIES)
  .sort(([, a], [, b]) => a.order - b.order)
  .map(([key]) => key);

export const CATEGORY_AFFINITY: Record<string, string[]> = {
  'guides':       ['creatures', 'twine', 'tier-list'],
  'creatures':    ['guides', 'evolution', 'tier-list'],
  'tier-list':    ['creatures', 'evolution', 'multiplayer'],
  'evolution':    ['creatures', 'tier-list', 'locations'],
  'twine':        ['guides', 'creatures', 'egg-heist'],
  'egg-heist':    ['multiplayer', 'locations', 'twine'],
  'homeland':     ['creatures', 'locations', 'guides'],
  'multiplayer':  ['egg-heist', 'twine', 'updates'],
  'locations':    ['creatures', 'homeland', 'multiplayer'],
  'updates':      ['guides', 'multiplayer', 'tier-list'],
};
