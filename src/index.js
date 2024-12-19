const express = require("express");

const userRouter = require("../routes/users");

// Instance of the express for configuration
const app = express();

// Define a default PORT number
const PORT = 3300;

// Our URL: localhost:PORTNUMBER/url_name
app.get("/", (req, res)=> {
    // Function logic executed
    // res.send("<h1>Hello from Express Backend!</h1>");
    // res.sendStatus(201);
    // res.download('./src/index.js');
    res.status(201).send("<h1>Hello from Express Backend!</h1>");
});

app.get("/users", (req, res)=> {
    // Function logic executed
    res.json({
        message: "JSON response sent!"
    });
});

app.post("/", (req, res)=> {
    // Function logic executed
    res.json({
        message: "POST Request made!"
    });
});

app.get("/users/new", (req, res)=> {
    // Function logic executed
    res.json({
        message: "JSON response sent!"
    });
});

app.get("/users/:id", (req, res)=> {
    // Function logic executed
    res.json({
        message: "JSON response sent!"
    });
});

app.patch("/users/:id", (req, res)=> {
    // Function logic executed
    res.json({
        message: "JSON response sent!"
    });
});

app.use("/users", userRouter);

app.listen(PORT, ()=> {
    console.log(`Server is running on port: ${PORT}`);
})