import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { initSentry } from './sentry';
import { createInstance } from '@featurevisor/sdk';
import { FeaturevisorProvider } from '@featurevisor/react';
import router from './router';

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
