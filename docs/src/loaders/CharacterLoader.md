```typescript
/**
 * ## Purpose
 * This file serves as a CharacterLoader module that provides functions for fetching character data from the Rick and Morty API.
 * 
 * ## Structure
 * - Import statements for necessary types and the DefaultApi class
 * - Declaration of a variable _api to hold an instance of DefaultApi
 * - Definition of a function getAPI() to initialize and return the _api instance
 * - Exported async functions fetchCharacters() and fetchCharacter() for fetching character data using the API
 * 
 * ## Main Functions
 * - getAPI(): Initializes and returns an instance of DefaultApi if not already initialized.
 * - fetchCharacters({ params }: CharactersListRouteParams): Fetches a list of characters based on the page number provided in the params.
 * - fetchCharacter({ params }: CharacterRouteParams): Fetches a single character's data based on the ID provided in the params.
 */

import { CharacterRouteParams, CharactersListRouteParams } from '../types/types';
import { DefaultApi } from '../../lib/rick-and-morty-api-client';

let _api: DefaultApi | null = null;

/**
 * Fetches the DefaultApi instance, initializes if not already done
 * @returns DefaultApi instance
 */
function getAPI() {
  if (!_api) {
    _api = new DefaultApi();
  }

  return _api;
}

/**
 * Fetches a list of characters based on the page number
 * @param params CharactersListRouteParams object containing page number
 * @returns Promise of character data
 */
export async function fetchCharacters({ params }: CharactersListRouteParams) {
  const page = params.page ? parseInt(params.page) : 0;
  const api = getAPI();

  return api.getCharacters({ page });
}

/**
 * Fetches data of a single character based on the ID
 * @param params CharacterRouteParams object containing character ID
 * @returns Promise of character data
 */
export async function fetchCharacter({ params }: CharacterRouteParams) {
  if (!params.id) {
    throw new Error('No character ID provided');
  }

  const api = getAPI();
  return api.getSingleCharacter({ id: parseInt(params.id) });
}
```