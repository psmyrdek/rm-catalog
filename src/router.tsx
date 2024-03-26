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
