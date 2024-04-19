# File: CharacterDetails.tsx

## Purpose:
This file defines the `CharacterDetails` component, which displays detailed information about a character. It includes the character's image, name, status, species, and location. Users can also add the character to their favorites list.

## Structure:
The file consists of the following parts:
1. **Imports**: Imports necessary modules and components.
2. **CharacterDetails Component**: Defines the `CharacterDetails` component.
    - Uses `useLoaderData` to retrieve character data.
    - Displays character details, including image, name, status, species, and location.
    - Provides a button to add the character to favorites.
    - Includes a link to go back to the characters list page.

## Main Functions:
1. **addToFavorites()**:
    - Purpose: Not implemented yet.
    - Throws an error when invoked.

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