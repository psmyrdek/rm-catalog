import { init } from '@module-federation/enhanced/runtime';
import React from 'react';
import ReactDOM from 'react-dom';

init({
  name: 'recommendations',
  remotes: [
    {
      name: 'episodeRecommendations',
      entry: 'https://d2mv4g2jxahmy1.cloudfront.net/mf/mf-manifest.json',
    },
  ],
  shared: {
    react: {
      version: '18.2.0',
      lib: () => React,
      scope: 'default',
      shareConfig: {
        singleton: true,
        requiredVersion: '^18.2.0',
      },
    },
    'react-dom': {
      version: '18.2.0',
      lib: () => ReactDOM,
      scope: 'default',
      shareConfig: {
        singleton: true,
        requiredVersion: '^18.2.0',
      },
    },
  },
});
