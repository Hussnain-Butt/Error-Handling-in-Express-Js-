// Express uses middleware functions to handle errors. In Express, errors can be captured using a special type of middleware that has four parameters: err, req, res, and next.

const express = require("express")
const app = express()
const port = 5000

// Simulating a route that throws an error

app.get("/error",(req,res,next)=>{
    const error = new Error('Something went wrong!') 
    error.status = 500
    next(error)
})

// Basic error-handling middleware
app.use((err,req,res,next)=>{
    res.status(err.status || 500)
    res.json({
        error:{
            message : err.message
        }
    })
})



app.listen(
    port, () => {
    console.log(`Server started on port ${port }`);
});