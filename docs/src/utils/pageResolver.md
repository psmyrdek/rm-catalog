### Page Resolver

**File Path:** `/Users/przemek/dev/rm-catalog/src/utils/pageResolver.ts`

#### Purpose
This file contains a function `pageResolver` that takes a URL as input and returns a string representing the resolved page based on the URL parameters. It extracts the `page` parameter value from the URL and constructs a new URL string `/list/${page}` where `page` defaults to 1 if not present.

#### Structure
```typescript
export function pageResolver(url: string): string {
  const urlObj = new URL(url);
  const page = urlObj.searchParams.get('page');

  return `/list/${page || 1}`;
}
```

#### Main Functions
- `pageResolver(url: string): string`: This function takes a URL string as input, extracts the `page` parameter value from the URL, and returns a string representing the resolved page URL. If the `page` parameter is not found in the URL, it defaults to 1.

This file serves the purpose of resolving page URLs based on the `page` parameter in the input URL.