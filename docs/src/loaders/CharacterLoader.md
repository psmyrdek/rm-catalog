
### File: CharacterLoader.ts

**Purpose:**
This file serves as a loader for fetching character data from the Rick and Morty API.

**Structure:**
- Import statements for necessary types and the DefaultApi class
- Declaration of the _api variable as null
- Definition of the getAPI function to create a new DefaultApi instance if it doesn't exist
- Exported async functions that interact with the API to fetch characters:
  1. fetchCharacters: Takes CharactersListRouteParams and fetches a list of characters based on the provided page
  2. fetchCharacter: Takes CharacterRouteParams and fetches a single character using the provided ID

**Main Functions:**
1. `fetchCharacters({ params }: CharactersListRouteParams)`: Fetches a list of characters based on the page parameter provided. Returns a promise with the character list.
   
2. `fetchCharacter({ params }: CharacterRouteParams)`: Fetches a single character based on the ID parameter provided. Throws an error if no ID is provided. Returns a promise with the character data.

---

Make sure to handle errors appropriately and include necessary error handling in your application when using these functions.