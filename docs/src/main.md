# main.tsx
File path /Users/przemek/dev/rm-catalog/src/main.tsx

## Type
CODE

## Purpose
This file is the entry point of the React application. It sets up the React root component, initializes Sentry for error monitoring, configures the FeatureVisor instance for feature flagging, and renders the application with the React Router provider.

## File content
```jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { initSentry } from './sentry';
import router from './router';
import { createInstance } from '@featurevisor/sdk';
import { FeaturevisorProvider } from '@featurevisor/react';

initSentry();

const envName = import.meta.env.VITE_ENV_NAME || 'preview';
const featurevisor = createInstance({
  datafileUrl: `https://d2vg9ga31syu7p.cloudfront.net/datafiles/${envName}/datafile-tag-all.json`,
});

ReactDOM.createRoot(document.getElementById('app') as HTMLElement).render(
  <React.StrictMode>
    <FeaturevisorProvider instance={featurevisor}>
      <RouterProvider router={router} />
    </FeaturevisorProvider>
  </React.StrictMode>,
);
```

## Tech stack (if applicable)
- React
- React Router
- Sentry
- FeatureVisor