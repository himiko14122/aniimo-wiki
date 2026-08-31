import { getRequestConfig } from 'next-intl/server';
import { hasLocale } from 'next-intl';
import { routing } from './routing';

import en from '@/locales/en.json';
import ja from '@/locales/ja.json';
import ko from '@/locales/ko.json';
import de from '@/locales/de.json';

const messages = { en, ja, ko, de } as const;

type Messages = typeof en;

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested) ? requested : routing.defaultLocale;

  return {
    locale,
    messages: messages[locale] as Messages,
    getMessageFallback({ key }) {
      return `${key}`;
    },
    onError(error) {
      // Suppress MISSING_MESSAGE errors during build - graceful fallback
      if (error.code === 'MISSING_MESSAGE') return;
      console.error(error);
    },
  };
});
