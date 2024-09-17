const express = require('express')
const app = express()
const port = 5000

// To handle routes that don't exist, you can add a middleware function at the end of your routes that handles 404 errors.

app.use((req, res, next) => {
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))