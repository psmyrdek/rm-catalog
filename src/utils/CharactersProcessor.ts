import { Character } from '../../lib/rick-and-morty-api-client';

/**
 * Retrieves the top 'n' characters from a list of Character objects.
 *
 * @param characters - An array of Character objects to sort.
 * @param top - The number of top characters to return.
 * @returns An array containing the top 'n' Character objects.
 *
 * @description
 * This function accepts an array of Character objects and an integer 'top', and returns the first 'top' elements of the array.
 *
 * @example
 * Here's how you might use `getTopCharacters`:
 * ```typescript
 * const allCharacters = [
 *   { name: 'Character A', ... },
 *   { name: 'Character B', ... }
 * ];
 * const topCharacters = getTopCharacters(allCharacters, 1);
 * console.log(topCharacters); // Output might show the 'Character A' details if it's the most relevant based on sorting.
 * ```
 */
export function getTopCharacters(characters: Character[], top: number): Character[] {
  return characters.slice(0, top);
}
