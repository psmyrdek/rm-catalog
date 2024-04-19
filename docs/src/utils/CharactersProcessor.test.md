# File: CharactersProcessor.test.ts

## Purpose:
The file CharactersProcessor.test.ts contains unit tests for the `getTopCharacters` function of the CharactersProcessor module. It ensures that the function returns the correct top characters based on the specified criteria.

## Structure:
The file includes imports for testing libraries and the CharactersProcessor module. It also defines an array of `Character` objects and test cases for the `getTopCharacters` function.

## Main Functions:
1. `getTopCharacters(characters: Character[], count: number): Character[]`:
   - Description: Returns an array of top characters based on the specified count.
   - Parameters:
     - `characters`: Array of `Character` objects.
     - `count`: Number of top characters to return.
   - Returns: An array of top characters.

2. Test Cases:
   - **should return empty array**:
     - Description: Ensures that the function returns an empty array when provided with an empty input.
   
   - **should return two characters**:
     - Description: Tests the function with a sample array of characters and checks if the correct top characters are returned.