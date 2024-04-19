## Sentry File Documentation

**Purpose:**
The `sentry.ts` file contains a function `initSentry` that initializes the Sentry error tracking service. It checks if the environment is set to production and initializes Sentry with the provided DSN if it is.

**Structure:**
The file consists of an import statement for the Sentry library and a single function `initSentry` that sets up Sentry for error tracking.

**Main Functions:**
1. `initSentry()`: Initializes Sentry with the provided DSN if the environment is set to production. Otherwise, it returns without initializing Sentry.

```typescript
import * as Sentry from '@sentry/react';
// import { customErrorProcessor } from './custom-error';

export function initSentry() {
  if (import.meta.env.VITE_ENV_NAME !== 'production') {
    // customErrorProcessor();
    return;
  }
  Sentry.init({
    dsn: import.meta.env.VITE_SENTRY_DSN,
    integrations: [],
  });
}
```