```typescript
// File: /Users/przemek/dev/rm-catalog/src/router.tsx

# Router

## Purpose
This file defines the routing configuration for the React application using React Router. It specifies the routes and their corresponding components to render based on the URL.

## Structure
- **import Statements:** Import necessary components and functions from other files.
- **router Constant:** Defines the routing configuration using createHashRouter from 'react-router-dom'.
  - **Routes:** Specifies the paths, loader functions, and components to render for each route.
    - `/`: Renders the App component with Children components.
      - `index: true`: Loads characters using fetchCharacters and renders Characters component.
      - `path: 'list/:page'`: Loads characters using fetchCharacters and renders Characters component.
      - `path: 'character/:id'`: Loads a character using fetchCharacter and renders CharacterDetails component.

## Main Functions
1. `fetchCharacters`: Function to fetch a list of characters.
2. `fetchCharacter`: Function to fetch a specific character.
3. `createHashRouter`: Function to create a HashRouter configuration.

---
<FILE_CONTENT>
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
</FILE_CONTENT>
```
