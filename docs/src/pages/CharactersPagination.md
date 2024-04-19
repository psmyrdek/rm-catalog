# CharactersPagination.tsx

## Purpose
The CharactersPagination.tsx file is responsible for rendering pagination controls for navigating through a list of characters. It utilizes the react-router-dom library to generate previous and next links based on the pagination information provided.

## Structure
The file contains a functional component called CharactersPagination that takes in CharacterListResponseInfo as a parameter. The component renders a div with two Link components inside, one for the previous page and one for the next page.

## Main Functions
- **CharactersPagination**: This functional component renders the pagination controls for navigating through a list of characters. It checks if there is a previous or next page in the paginationInfo object and renders the appropriate Link component with the corresponding pageResolver value.