# pageResolver.ts
File path: /Users/przemek/dev/rm-catalog/src/utils/pageResolver.ts

## Type
CODE

## Purpose
This function takes a URL string as input and returns a formatted string representing the path to a specific page based on the query parameter 'page' in the URL. If the 'page' parameter is not present, it defaults to 1.

## File content
```typescript
export function pageResolver(url: string): string {
  const urlObj = new URL(url);
  const page = urlObj.searchParams.get('page');

  return `/list/${page || 1}`;
}
```

## Tech stack (if applicable)
- TypeScript

This function uses the built-in `URL` constructor in JavaScript to parse the input URL string and extract the value of the 'page' query parameter. If the 'page' parameter is present, its value is used in the returned path string. If it's not present, the default value of '1' is used.

The function can be useful in scenarios where you need to generate a consistent URL path based on the current URL and a specific parameter, such as pagination or filtering.