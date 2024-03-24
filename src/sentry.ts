import * as Sentry from '@sentry/react';
import { customErrorProcessor } from './custom-error';

export function initSentry() {
  if (import.meta.env.VITE_ENV_NAME !== 'production') {
    customErrorProcessor();
    return;
  }
  Sentry.init({
    dsn: import.meta.env.VITE_SENTRY_DSN,
    integrations: [],
  });
}
