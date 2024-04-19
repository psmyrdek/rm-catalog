# File: router.tsx

## Purpose:
The `router.tsx` file is responsible for defining the routing logic for the application using react-router-dom. It handles routing paths and components to display based on the URL.

## Structure:
- Import statements for necessary components and functions.
- Definition of a hash router using `createHashRouter`.
- Configuration of routes and associated components.
- Export of the created router.

## Main Functions:
1. Importing components:
   - `App`, `Characters`, and `CharacterDetails` components are imported from their respective files.
   - `fetchCharacter` and `fetchCharacters` functions are imported from the `CharacterLoader` module.

2. Creating the router:
   - `createHashRouter` is used to create the router.
   - Routes are defined with paths, loaders, and components to render.

3. Default export:
   - The `router` object, containing the defined routes, is exported as the default export of the file.

Location: `/Users/przemek/dev/rm-catalog/src/router.tsx`