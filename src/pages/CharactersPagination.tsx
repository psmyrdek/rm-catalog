import React from 'react';
import { Link } from 'react-router-dom';
import { CharacterListResponseInfo } from '../../lib/rick-and-morty-api-client';
import { pageResolver } from '../utils/pageResolver';

const CharactersPagination = (paginationInfo: CharacterListResponseInfo) => {
  return (
    <div className="flex flex-row justify-between">
      <div>
        {paginationInfo.prev && (
          <Link
            to={pageResolver(paginationInfo.prev)}
            className="bg-blue-500 rounded-md px-4 py-2 text-white hover:bg-blue-400"
          >
            Previous
          </Link>
        )}
      </div>
      <div>
        {paginationInfo.next && (
          <Link
            to={pageResolver(paginationInfo.next)}
            className="bg-blue-500 rounded-md px-4 py-2 text-white hover:bg-blue-400"
          >
            Next
          </Link>
        )}
      </div>
    </div>
  );
};

export default CharactersPagination;
