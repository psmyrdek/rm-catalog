## File: custom-error.ts

### Purpose:
The `custom-error.ts` file contains a function called `customErrorProcessor` which overrides the `window.onerror` function to capture and handle errors in the browser. It logs the error message, source URL, line number, column number, and error stack trace to the console.

### Structure:
The file defines a single function `customErrorProcessor` that replaces the global `window.onerror` function with a custom error handler. It captures error data and logs it to the console.

### Main Functions:
- **customErrorProcessor()**: 
  - Captures error data when an error occurs in the browser.
  - Logs the error message, source URL, line number, column number, and error stack trace to the console.
  - Invokes the original `window.onerror` function if it exists.

### Location:
The file is located at `/Users/przemek/dev/rm-catalog/src/custom-error.ts`.