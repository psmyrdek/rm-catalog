### Characters.tsx

---

#### Purpose:
The `Characters.tsx` file is a React functional component that displays a list of characters from the Rick and Morty TV show. It fetches character data using `useLoaderData` hook and renders a list of clickable character cards. It also includes pagination functionality based on the flag `pagination`.

---

#### Structure:
The file consists of the following elements:

- Imports various libraries and components needed for the functionality.
- Defines the `Characters` functional component.
- Uses `useLoaderData` hook to fetch character data and renders a list of character cards.
- Checks if pagination is enabled based on the flag `pagination`.
- Displays pagination component `CharactersPagination` if pagination is enabled.

---

#### Main Functions:
- **Characters**: This functional component fetches character data using `useLoaderData` and renders a list of character cards with details like name, species, and profile image. It also handles linking to individual character pages and displays pagination if enabled.

---

#### File Content:
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

--- 

This file is located at `/Users/przemek/dev/rm-catalog/src/pages/Characters.tsx`.