const express = require('express')
const app = express()
const port = 5000

app.use((err, req, res, next) => {
    if (process.env.NODE_ENV === 'development') {
        // Detailed error response in development
        res.status(err.status || 500).json({
            status: 'error',
            message: err.message,
            stack: err.stack
        });
    } else {
        // Simplified error response in production
        res.status(err.status || 500).json({
            status: 'error',
            message: 'Something went wrong!'
        });
    }
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))