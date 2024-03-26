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
