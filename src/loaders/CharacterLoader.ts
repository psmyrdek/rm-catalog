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
