1. File path: /Users/przemek/dev/rm-catalog/src/pages/Characters.tsx
2. Type: CODE
3. Purpose: To render a list of characters fetched from an API with pagination option based on a feature flag.
4. Content: 
   - Imports React hooks and components.
   - Uses `useLoaderData` for fetching character list data.
   - Applies feature flag `pagination` to enable or disable pagination.
   - Displays characters in a styled list where each character is linked to its detailed page.
   - Optionally includes a pagination component if the feature flag is enabled.
5. Tech stack (if applicable): React, TypeScript, React Router Dom, @featurevisor/react