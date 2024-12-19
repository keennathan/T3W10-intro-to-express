const { app } = require('./server.js');

// Define a default PORT number
const PORT = process.env.PORT ?? 3300;

app.listen(PORT, ()=> {
    console.log(`Server is running on port: ${PORT}`);
})