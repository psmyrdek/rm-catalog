```markdown
1. File path: /Users/przemek/dev/rm-catalog/src/custom-error.ts
2. Type: CODE
3. Purpose: To customize global error handling by modifying the default window.onerror handler to include enhanced error logging details.
4. Content: The `customErrorProcessor` function, once called, sets up a new global error handler that intercepts errors. This handler enhances the error data by including the message, URL where the error occurred, line number, column number, and error stack trace. It logs this information to the console more descriptively. If an existing `onerror` handler is present, it ensures that the original handler is also invoked, maintaining backward compatibility.
5. Tech stack: JavaScript (ES6+)
```