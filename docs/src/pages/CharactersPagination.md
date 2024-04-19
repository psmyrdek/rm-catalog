```markdown
1. File path: /Users/przemek/dev/rm-catalog/src/pages/CharactersPagination.tsx
2. Type: CODE
3. Purpose: This component is designed to render pagination controls for navigating through character lists within the Rick and Morty character catalog application. It allows the user to move to the previous or next page of character listings based on the presence of pagination information.
4. Content: The component `CharactersPagination` takes pagination information (`CharacterListResponseInfo`), extracted from the Rick and Morty API client, as a prop. It displays a set of links ("Previous" and "Next") which are conditionally rendered based on whether the properties `prev` and `next` exist in the passed pagination information. These links use the `pageResolver` function to determine the correct path for the router links and are styled with Tailwind CSS classes.
5. Tech stack: TypeScript, React, Tailwind CSS, react-router-dom
```