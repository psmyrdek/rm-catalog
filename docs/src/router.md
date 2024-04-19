# router.tsx
File path: /Users/przemek/dev/rm-catalog/src/router.tsx

## Type
CODE

## Purpose
This file sets up the routing configuration for a React application using React Router. It defines the various routes and their corresponding components, as well as data loaders for fetching data required by certain routes.

## File content
```jsx
import App from './App';
import Characters from './pages/Characters';
import CharacterDetails from './pages/CharacterDetails';
import { fetchCharacter, fetchCharacters } from './loaders/CharacterLoader';
import { createHashRouter } from 'react-router-dom';

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

export default router;
```

## Tech stack (if applicable)
- React
- React Router