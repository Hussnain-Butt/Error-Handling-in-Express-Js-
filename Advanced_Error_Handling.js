const express = require('express')
const app = express()
const port = 5000

// For more structured error handling, you can create custom error classes that contain specific status codes and messages. This can help differentiate between types of errors (e.g., validation errors, authentication errors).   

class HttpError extends Error {
    constructor(message,statusCode) {
        super(message);
        this.statusCode = statusCode;
    }
}

// Example usage in route
app.get('/custom-error',(req , res, next)=>{

    try {
        throw new HttpError('Custom error occurred', 400)
    } catch (error) {
        next(error)
    }
})

// Error handler middleware
app.use((err, req, res, next) => {
    res.status(err.statusCode || 500).json({
        status: 'error',
        message: err.message,
    });
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`))