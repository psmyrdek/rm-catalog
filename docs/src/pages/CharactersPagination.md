# CharactersPagination.tsx
File path: /Users/przemek/dev/rm-catalog/src/pages/CharactersPagination.tsx

## Type
CODE

## Purpose
The purpose of this file is to create a React component called `CharactersPagination` that renders pagination buttons (Previous and Next) for navigating through a list of characters from the Rick and Morty API.

## File content
```jsx
import { Link } from 'react-router-dom';
import { CharacterListResponseInfo } from '../../lib/rick-and-morty-api-client';
import { pageResolver } from '../utils/pageResolver';

const CharactersPagination = (paginationInfo: CharacterListResponseInfo) => {
  return (
    <div className="flex flex-row justify-between">
      <div>
        {paginationInfo.prev && (
          <Link to={pageResolver(paginationInfo.prev)} className="bg-gray-400 hover:underline">
            Previous
          </Link>
        )}
      </div>
      <div>
        {paginationInfo.next && (
          <Link to={pageResolver(paginationInfo.next)} className="bg-gray-400 hover:underline">
            Next
          </Link>
        )}
      </div>
    </div>
  );
};

export default CharactersPagination;
```

## Tech stack (if applicable)
- React
- React Router
- Tailwind CSS