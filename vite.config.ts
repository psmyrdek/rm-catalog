import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { sentryVitePlugin } from '@sentry/vite-plugin';
import federation from '@originjs/vite-plugin-federation';

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
    federation({
      name: 'host-app',
      remotes: {
        remote_app: 'https://d2mv4g2jxahmy1.cloudfront.net/assets/recommendations.js',
      },
      shared: ['react', 'react-dom'],
    }),
    process.env.VITE_ENV_NAME === 'production' &&
      sentryVitePlugin({
        org: 'przeprogramowani-34',
        project: 'rm-catalog',
        authToken: process.env.SENTRY_AUTH_TOKEN,
      }),
  ],
});
