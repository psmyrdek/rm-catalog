# CharacterLoader.ts
File path: /Users/przemek/dev/rm-catalog/src/loaders/CharacterLoader.ts

## Type
CODE

## Purpose
This file exports two asynchronous functions, `fetchCharacters` and `fetchCharacter`, which interact with the Rick and Morty API to fetch character data.

## File content
```typescript
import { CharacterRouteParams, CharactersListRouteParams } from '../types/types';
import { DefaultApi } from '../../lib/rick-and-morty-api-client';

let _api: DefaultApi | null = null;

function getAPI() {
  if (!_api) {
    _api = new DefaultApi();
  }

  return _api;
}

export async function fetchCharacters({ params }: CharactersListRouteParams) {
  const page = params.page ? parseInt(params.page) : 0;
  const api = getAPI();

  return api.getCharacters({ page });
}

export async function fetchCharacter({ params }: CharacterRouteParams) {
  if (!params.id) {
    throw new Error('No character ID provided');
  }

  const api = getAPI();
  return api.getSingleCharacter({ id: parseInt(params.id) });
}
```

## Tech stack (if applicable)
- TypeScript