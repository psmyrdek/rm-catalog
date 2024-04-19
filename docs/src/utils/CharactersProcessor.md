# CharactersProcessor.ts

This file contains a utility function for processing characters from the Rick and Morty API.

## Purpose

The purpose of this file is to provide a function `getTopCharacters` that takes an array of `Character` objects and returns the top `n` characters based on a given number.

## Structure

- File Path: /Users/przemek/dev/rm-catalog/src/utils/CharactersProcessor.ts
- Dependencies: '../../lib/rick-and-morty-api-client'
- Exported Function: `getTopCharacters(characters: Character[], top: number): Character[]`

## Main Functions

### getTopCharacters

```typescript
/**
 * Returns the top 'n' characters from the given array.
 * @param characters - An array of Character objects.
 * @param top - The number of top characters to return.
 * @returns An array of Character objects representing the top characters.
 */
export function getTopCharacters(characters: Character[], top: number): Character[] {
  return characters.slice(0, top);
}
```
This function takes an array of `Character` objects and returns the top `n` characters based on the given number. It uses the `slice` method to extract the top characters from the array.