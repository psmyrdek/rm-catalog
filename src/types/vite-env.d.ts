/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_AWS_MONITORING_API: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
