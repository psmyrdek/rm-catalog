import { Link, useLoaderData } from 'react-router-dom';
import { CharacterListResponse } from '../../lib/rick-and-morty-api-client';
import CharactersPagination from './CharactersPagination';
import { useFlag } from '@featurevisor/react';
import { Suspense, lazy } from 'react';
import { loadRemote } from '@module-federation/enhanced/runtime';

const Characters = () => {
  const { info, results: characters } = useLoaderData() as CharacterListResponse;

  const isPaginationEnabled = useFlag('pagination', {
    country: new URLSearchParams(window.location.search).get('country'),
  });

  const EpisodeRecommendations = lazy(
    async () => await loadRemote('episodeRecommendations/EpisodeRecommendations'),
  );

  return (
    <div data-testid="characters-list">
      <p className="font-bold my-4">Recommended episodes:</p>
      <Suspense fallback={<p>Loading recommendations...</p>}>
        <EpisodeRecommendations />
      </Suspense>
      <p className="font-bold my-4">Choose your character:</p>
      <ul className="bg-white rounded-lg shadow-sm p-4">
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
