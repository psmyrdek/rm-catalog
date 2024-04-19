# sentry.ts
File path: /Users/przemek/dev/rm-catalog/src/sentry.ts

## Type
CODE

## Purpose
This file is responsible for initializing and configuring the Sentry error tracking service for the application. Sentry is a popular error monitoring tool that helps developers identify and resolve issues in their applications by capturing and reporting errors and exceptions.

## File content
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

## Tech stack (if applicable)
- Sentry: A popular error monitoring and performance tracking service for web applications.
- React: A JavaScript library for building user interfaces.
- Vite: A modern build tool and development server for web applications.

The file imports the `Sentry` library from the `@sentry/react` package. It also has a commented-out import for a `customErrorProcessor` function, which is likely used for custom error handling or processing.

The `initSentry` function checks if the current environment is not production (using the `import.meta.env.VITE_ENV_NAME` variable). If it's not production, it returns without initializing Sentry. If it's a production environment, it initializes Sentry with the data source name (DSN) provided through the `VITE_SENTRY_DSN` environment variable and an empty array for integrations.

The commented-out line `customErrorProcessor();` suggests that there might be a custom error processing function that could be executed before initializing Sentry, but it's currently not being used.