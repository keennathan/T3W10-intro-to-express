const express = require("express");

const router = require("../routes/users");

const { timing } = require("./middlewares/timing"); 

// Instance of the express for configuration
const app = express();

// How to use a middleware
// instace.verb(routePath, middleware, middleware, middleware, middleware,....., finalMiddleware)


// One way to use the middleware: This middleware gets implemented for all the routes that are created with app instance
// app.use(logger);


app.use(timing);

// Our URL: localhost:PORTNUMBER/url_name
// Second way to use the middleware
// app.get("/", 
//     (req, res, next) => {
//     console.log(`Request Info: ${req.method} ${req.url}`);
//     // Pass the control to the next middleware
//     next();
// }, 
// (req, res, next) => {
//     req.startTime = Date.now();
//     next();
// }, 
//     (req, res)=> {
//     // Function logic executed
//     // res.send("<h1>Hello from Express Backend!</h1>");
//     // res.sendStatus(201);
//     // res.download('./src/index.js'); 

//     const responseTime = Date.now() - req.startTime;
//     res.status(201).send(`<h1>Hello from Express Backend!</h1><p>Response Time: ${responseTime}ms</p>`);
// });

// Third way:
// app.get("/", logger, 
//     timing, 
//     (req, res)=> {

app.get("/", (req, res)=> {
    // Function logic executed
    // res.send("<h1>Hello from Express Backend!</h1>");
    // res.sendStatus(201);
    // res.download('./src/index.js'); 

    const responseTime = Date.now() - req.startTime;
    res.status(201).send(`<h1>Hello from Express Backend!</h1><p>Response Time: ${responseTime}ms</p>`);
});

app.post("/", timing, (req, res)=> {
    // Function logic executed
    res.json({
        message: "POST Request made!"
    });
});

app.use('/users', logger, router);

module.exports = { app }