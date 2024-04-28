import { init } from '@module-federation/enhanced/runtime';
import React from 'react';
import ReactDOM from 'react-dom';
import pkg from '../../package.json';

init({
  name: 'recommendations',
  remotes: [
    {
      name: 'episodeRecommendations',
      entry: 'https://d2mv4g2jxahmy1.cloudfront.net/mf/client/mf-manifest.json',
    },
  ],
  shared: {
    react: {
      version: pkg.dependencies['react'],
      lib: () => React,
      scope: 'default',
      shareConfig: {
        singleton: true,
        requiredVersion: pkg.dependencies['react'],
      },
    },
    'react-dom': {
      version: pkg.dependencies['react-dom'],
      lib: () => ReactDOM,
      scope: 'default',
      shareConfig: {
        singleton: true,
        requiredVersion: pkg.dependencies['react-dom'],
      },
    },
  },
});
