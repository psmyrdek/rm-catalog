import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { sentryVitePlugin } from '@sentry/vite-plugin';

export default defineConfig({
  build: {
    target: 'esnext',
    sourcemap: true,
  },
  server: {
    port: 3000,
  },
  plugins: [
    react(),
    process.env.VITE_ENV_NAME === 'production' &&
      sentryVitePlugin({
        org: 'przeprogramowani-34',
        project: 'rm-catalog',
        authToken: process.env.SENTRY_AUTH_TOKEN,
      }),
  ],
});
