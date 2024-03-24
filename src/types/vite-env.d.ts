/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_ENV_NAME: string;
  readonly VITE_SENTRY_DSN: string;
  readonly VITE_AWS_MONITORING_API: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
