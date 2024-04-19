# Characters.tsx
File path: /Users/przemek/dev/rm-catalog/src/pages/Characters.tsx

## Type
CODE

## Purpose
This file exports a React functional component called `Characters`. The component is responsible for rendering a list of characters from the Rick and Morty API. It displays each character's name, species, and profile image. The component also includes a pagination feature that can be enabled or disabled using a feature flag provided by the `@featurevisor/react` library.

## File content
```jsx
import { Link, useLoaderData } from 'react-router-dom';
import { CharacterListResponse } from '../../lib/rick-and-morty-api-client';
import CharactersPagination from './CharactersPagination';
import { useFlag } from '@featurevisor/react';

const Characters = () => {
  const { info, results: characters } = useLoaderData() as CharacterListResponse;

  const isPaginationEnabled = useFlag('pagination', {
    country: new URLSearchParams(window.location.search).get('country'),
  });

  return (
    <div className="bg-white rounded-lg shadow-sm p-4" data-testid="characters-list">
      <p className="font-bold mb-4">Select a character:</p>
      <ul>
        {characters!.map((character) => (
          <li key={character.id} className="mb-4">
            <Link to={`/character/${character.id}`} data-testid={`character-link-${character.id}`}>
              <div className="flex flex-row items-center space-x-2 border border-gray-100 rounded-md hover:border-blue-200 hover:bg-blue-100/50 p-4">
                <img
                  src={character.image}
                  alt={`${character.name} - Profile Image`}
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <p>{character.name}</p>
                  <p className="text-sm text-gray-500">{character.species}</p>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
      {isPaginationEnabled && <CharactersPagination {...info} />}
    </div>
  );
};

export default Characters;
```

## Tech stack (if applicable)
- React
- React Router
- Tailwind CSS
- `@featurevisor/react` (for feature flagging)