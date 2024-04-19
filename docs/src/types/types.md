# types.ts
File path: /Users/przemek/dev/rm-catalog/src/types/types.ts

## Type
CONFIG

## Purpose
This file defines the configuration interface and route parameter types used throughout the application.

## File content
```typescript
export interface Config {
  appVersion: string;
}

export type CharactersListRouteParams = { params: { page?: string } };
export type CharacterRouteParams = { params: { id?: string } };
```

## Tech stack (if applicable)
TypeScript