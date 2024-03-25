import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createHashRouter } from 'react-router-dom';
import App from './App';
import Characters from './pages/Characters';
import CharacterDetails from './pages/CharacterDetails';
import { fetchCharacter, fetchCharacters } from './loaders/CharacterLoader';
import { CharacterRouteParams } from './types/types';
import { initSentry } from './sentry';
import { createInstance } from '@featurevisor/sdk';
import { FeaturevisorProvider } from '@featurevisor/react';

initSentry();

const envName = import.meta.env.VITE_ENV_NAME || 'preview';
const featurevisor = createInstance({
  datafileUrl: `https://d1bveal7jmyjgh.cloudfront.net/datafiles/${envName}/datafile-tag-all.json`,
});

const router = createHashRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        loader: fetchCharacters,
        element: <Characters />,
      },
      {
        path: 'list/:page',
        loader: fetchCharacters,
        element: <Characters />,
      },
      {
        path: 'character/:id',
        loader: fetchCharacter,
        element: <CharacterDetails />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('app') as HTMLElement).render(
  <React.StrictMode>
    <FeaturevisorProvider instance={featurevisor}>
      <RouterProvider router={router} />
    </FeaturevisorProvider>
  </React.StrictMode>,
);
