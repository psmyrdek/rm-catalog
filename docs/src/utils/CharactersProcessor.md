# CharactersProcessor.ts

## Purpose
This file contains a utility function for processing character data from the Rick and Morty API.

## Structure
- **getTopCharacters**: This function takes an array of character objects and a number representing the top N characters to return. It slices the array based on the specified number and returns the top characters.

```typescript
import { Character } from '../../lib/rick-and-morty-api-client';

export function getTopCharacters(characters: Character[], top: number): Character[] {
  return characters.slice(0, top);
}
```