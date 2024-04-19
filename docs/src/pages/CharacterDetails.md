# CharacterDetails.tsx
File path: /Users/przemek/dev/rm-catalog/src/pages/CharacterDetails.tsx

## Type
CODE

## Purpose
This file exports a React functional component called `CharacterDetails` that displays detailed information about a character from the Rick and Morty API. The component receives the character data through the `useLoaderData` hook from React Router. It renders the character's image, name, status, species, and location. Additionally, it includes a button to add the character to favorites (not implemented) and a link to navigate back to the character list.

## File content
```jsx
import { Link, useLoaderData } from 'react-router-dom';
import { Character } from '../../lib/rick-and-morty-api-client';

const CharacterDetails = () => {
  const character = useLoaderData() as Character;

  function addToFavorites() {
    throw new Error('Not implemented');
  }

  return (
    <>
      <div className="bg-white rounded-lg shadow-sm p-4 mb-4">
        <div className="flex flex-row space-x-4" data-testid="character-details">
          <div>
            <img
              src={character.image}
              alt={`${character.name} - Profile Image`}
              className="rounded-md"
            />
          </div>
          <div className="flex-grow">
            <p className="font-bold text-3xl border-b border-gray-300 pb-4 mb-4">
              {character.name}
            </p>
            <p>Status: {character.status}</p>
            <p>Type: {character.species}</p>
            <p>Location: {character.location?.name}</p>
            <button
              className="bg-orange-500 rounded-md px-4 py-2 text-white hover:bg-orange-400 mt-2"
              onClick={addToFavorites}
            >
              Add to favorites
            </button>
          </div>
        </div>
      </div>
      <Link
        to={`/`}
        className="bg-blue-500 rounded-md px-4 py-2 text-white hover:bg-blue-400"
        data-testid="characters-list-link"
      >
        Back to list
      </Link>
    </>
  );
};

export default CharacterDetails;
```

## Tech stack (if applicable)
- React
- React Router
- Tailwind CSS