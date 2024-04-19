# File Documentation: types.ts

## Purpose
The `types.ts` file contains various type definitions used in the RM Catalog project. These types help in maintaining consistency and ensuring type safety throughout the project.

## Structure
1. `Config` interface:
   - `appVersion`: A string representing the version of the application.

2. `CharactersListRouteParams` type:
   - `params`: An object with an optional `page` property of type string.

3. `CharacterRouteParams` type:
   - `params`: An object with an optional `id` property of type string.

## Main Functions
The file mainly defines interfaces and types that are used for configuring the application version (`Config`), and defining the route parameters for the characters list and character details pages (`CharactersListRouteParams` and `CharacterRouteParams`). These definitions help in providing type safety and structure to the data used within the project.