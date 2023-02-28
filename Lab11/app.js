const express = require('express');
const app = express();

app.use((req, res, next) => {
    console.log('Middleware 1'); // Log to the console
    next(); // Call the next middleware in the stack
    });

app.use((req, res, next) => {
    console.log('Middleware 2'); // Log to the console
    next(); // Call the next middleware in the stack
    });

app.listen(3000, () => console.log('Server ready'));



