```markdown
1. File path
   /Users/przemek/dev/rm-catalog/src/router.tsx
2. Type:
   CODE
3. Purpose:
   Defines the routing configuration for the application, handling different URLs and their corresponding views and data loaders.
4. Content:
   - Imports `App`, `Characters`, and `CharacterDetails` components, along with data fetching functions `fetchCharacter` and `fetchCharacters`.
   - Creates a hash-based router using `react-router-dom`, setting up routes for:
     - The root path `/` rendering the `App` component.
     - The default child route rendering `Characters` component, using `fetchCharacters` to load data.
     - A paginated list route under `/list/:page` that dynamically shows `Characters` based on page number, utilizing `fetchCharacters`.
     - A detailed view route under `/character/:id` for individual character details, using `fetchCharacter` for data loading.
   - Exports the configured router for use across the application.
5. Tech stack:
   - React (for building user interfaces)
   - react-router-dom (for managing routing)
```
This Markdown formatted documentation covers the essentials of the file, presenting a clear overview for developers or maintainers.