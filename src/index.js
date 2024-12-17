const express = require('express');

// Instance of the express for configuration
const app = express();

// Define a default PORT Number
const PORT = 3000;

// Our URL: localhost:PORTNUMBER/url_name
app.get("/", (req, res)=> {
    // Function logic executed
    // res.send("<h1>Hello from Express Backend!</h1>");
    // res.sendStatus(201);
    res.status(500).send("<h1>Hello from Express Backend!</h1>");
});

app.get("/users", (req, res)=> {
    // Function logic executed
    res.json({
        message: "JSON response sent!"
    });
});

app.get("/", (req, res)=> {
    // Function logic executed
    res.send("<h1>Hello from Express Backend!</h1>");
});

app.listen(PORT, ()=> {
    console.log(`Server is running on port: ${PORT}`);
})