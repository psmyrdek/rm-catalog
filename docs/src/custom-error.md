# custom-error.ts
File path: /Users/przemek/dev/rm-catalog/src/custom-error.ts

## Type
CODE

## Purpose
The purpose of this file is to provide a custom error handling mechanism for browser-based applications. It overrides the default `window.onerror` event handler to capture and process JavaScript errors in a more controlled and customized manner.

## File content
```javascript
export function customErrorProcessor() {
  const originalOnError = window.onerror;

  window.onerror = function (message, source, lineno, colno, error) {
    const errorData = {
      message: typeof message === 'string' ? message : message.toString(),
      url: source,
      lineNumber: lineno,
      columnNumber: colno,
      errorStack: error && error.stack ? error.stack : 'Stack trace not available',
    };

    console.error(`🚨 Error: ${errorData.message}`, errorData);

    if (originalOnError) {
      return originalOnError.apply(this, [message, source, lineno, colno, error]);
    }

    return true;
  };
}
```

## Tech stack (if applicable)
This code is written in JavaScript and is intended to run in a browser environment.