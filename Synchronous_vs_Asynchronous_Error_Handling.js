const express = require('express');
const someAsyncFunction = require('./someAsyncFunction');
const app = express()
const port = 5000


// Asynchronous Errors:
// For asynchronous errors (e.g., database calls), you'll need to pass errors to next() inside the promise's .catch() block or use async/await with a try-catch block.

// Synchronous Errors:
// Errors in synchronous routes are automatically caught by the error-handling middleware when passed via next().

// Example with Promises

app.get('/async-error', (req, res, next) => {
    someAsyncFunction()
        .then(result => res.send(result))
        .catch(error => next(error));
});

// Example with async/await

app.get('/async-error-await', async (req, res, next) => {
    try {
        const result = await someAsyncFunction();
        res.send(result);
    } catch (error) {
        next(error);
    }
});


app.listen(port, () => console.log(`Example app listening on port ${port}!`))