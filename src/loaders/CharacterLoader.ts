import { getTopCharacters } from '../utils/CharactersProcessor';
import { CharacterRouteParams } from '../types/types';
import { DefaultApi } from '../../lib/rick-and-morty-api-client';

export async function fetchCharacters() {
  const api = new DefaultApi();

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      api
        .fetchAllCharacters()
        .then((response) => {
          resolve({ characters: getTopCharacters(response.results!, 5) });
        })
        .catch((err) => {
          reject(err);
        });
    }, 2500);
  });
}

export async function fetchCharacter({ params }: CharacterRouteParams) {
  const api = new DefaultApi();
  return await api.fetchSingleCharacter({ id: parseInt(params.id) });
}
