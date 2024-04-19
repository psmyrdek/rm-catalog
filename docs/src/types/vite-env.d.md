# vite-env.d.ts
File path: /Users/przemek/dev/rm-catalog/src/types/vite-env.d.ts

## Type
CODE

## Purpose
This file defines two TypeScript interfaces: `ImportMetaEnv` and `ImportMeta`. These interfaces are used to provide type information for environment variables defined in the Vite configuration and accessed through the `import.meta.env` object in the Vite development server.

## File content
```typescript
/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_ENV_NAME: string;
  readonly VITE_SENTRY_DSN: string;
  readonly VITE_AWS_MONITORING_API: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
```

## Tech stack (if applicable)
- TypeScript
- Vite (a build tool for modern web applications)

This file is specific to the Vite development environment and is used to provide type safety when accessing environment variables during the development and build process.