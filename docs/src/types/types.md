## File: types.ts

---

### Purpose:
The `types.ts` file contains type definitions used within the application for configuration settings and route parameters related to characters.

### Structure:
- **Config**:
  - Interface with a single property `appVersion` of type `string`.

- **CharactersListRouteParams**:
  - Type definition for route parameters of the characters list page, with an optional `page` parameter.

- **CharacterRouteParams**:
  - Type definition for route parameters of an individual character page, with an optional `id` parameter.

### Main Functions:
- **Config**:
  - Provides a structure for storing application configuration settings.

- **CharactersListRouteParams** and **CharacterRouteParams**:
  - Define the structure of route parameters for the characters list and individual character pages.

---

```typescript
export interface Config {
  appVersion: string;
}

export type CharactersListRouteParams = { params: { page?: string } };
export type CharacterRouteParams = { params: { id?: string } };
```