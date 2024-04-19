## App.tsx

**Purpose:**
This file defines the main component of the application - App. It uses the useStatus hook from '@featurevisor/react' and the Outlet component from 'react-router-dom' to render the main content of the application.

**Structure:**
- Import:
  - useStatus from '@featurevisor/react'
  - Outlet from 'react-router-dom'

- Component:
  - App: A functional component that retrieves the isReady status from the useStatus hook and renders the main content of the application.

**Main Functions:**
- App: 
  - Renders a styled header with the text "🚀 Rick and Morty!"
  - Renders the Outlet component only if the isReady status is true.

**Path:** /Users/przemek/dev/rm-catalog/src/App.tsx