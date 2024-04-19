# Sentry File Documentation

## **Purpose:**
The `sentry.ts` file is responsible for initializing the Sentry error monitoring system. It checks if the environment is in production and then initializes Sentry with the provided DSN (Data Source Name) and integrations.

## **Structure:**

The file contains the following structure:
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

- The file imports the Sentry module from `@sentry/react`.
- The `initSentry()` function is defined, which checks if the environment is in production.
- If the environment is not in production, it returns. Otherwise, it initializes Sentry with the provided DSN and an empty array of integrations.

## **Main Functions:**

- **initSentry():** 
  - This function initializes the Sentry error monitoring system.
  - It checks if the environment is in production using `import.meta.env.VITE_ENV_NAME !== 'production'`.
  - If the environment is in production, it initializes Sentry with the provided DSN (`import.meta.env.VITE_SENTRY_DSN`) and an empty array of integrations.

---
File Path: `/Users/przemek/dev/rm-catalog/src/sentry.ts`