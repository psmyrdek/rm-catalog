## Characters.tsx

### Purpose
The `Characters.tsx` file is a React component that displays a list of characters from the Rick and Morty series. It allows users to select a character and view their details. 

### Structure
- Import statements for necessary dependencies and components.
- Definition of the `Characters` functional component.
- Retrieves data using `useLoaderData` and `useFlag`.
- Renders a list of characters with their image, name, and species.
- Displays pagination if enabled.

### Main Functions
- Fetch character data using `useLoaderData`.
- Enable pagination based on user settings using `useFlag`.
- Render a list of characters with clickable links to view individual character details.
- Display pagination component if enabled.