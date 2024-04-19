# App.tsx
File path: /Users/przemek/dev/rm-catalog/src/App.tsx

## Type
CODE

## Purpose
The purpose of this file is to define the root component of a React application. It imports the `useStatus` hook from the `@featurevisor/react` library and the `Outlet` component from `react-router-dom`. The `App` component renders a heading and displays the content from nested routes using the `Outlet` component, but only if the `isReady` state from the `useStatus` hook is true.

## File content
```jsx
import { useStatus } from '@featurevisor/react';
import { Outlet } from 'react-router-dom';

const App = () => {
  const { isReady } = useStatus();

  return (
    <div>
      <div className="bg-white rounded-lg shadow-sm p-4 mb-4">
        <h1 className="text-xl font-bold text-center">🚀 Rick and Morty!</h1>
      </div>
      {isReady && <Outlet />}
    </div>
  );
};

export default App;
```

## Tech stack (if applicable)
- React
- React Router
- Tailwind CSS (based on the className styles used)