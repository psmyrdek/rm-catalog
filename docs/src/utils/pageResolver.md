## pageResolver.ts

### Purpose:
The `pageResolver.ts` file contains a function `pageResolver` that takes a URL string as input and resolves the page number from the URL parameters. It then returns a formatted URL for a list page with the resolved page number.

### Structure:
- The file contains a single function `pageResolver(url: string): string` that takes a URL string as input.
- The function creates a `URL` object from the input URL and extracts the value of the 'page' parameter from the URL parameters.
- It then returns a formatted URL string for a list page with the resolved page number appended to it.

### Main Functions:
#### `pageResolver(url: string): string`
- Takes a URL string as input.
- Parses the URL to extract the value of the 'page' parameter.
- Returns a formatted URL string for a list page with the resolved page number or defaults to 1 if no page parameter is found.