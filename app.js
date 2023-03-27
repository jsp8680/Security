const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World');
    });

    app.listen('localhost', (req, res) => {
    console.log('Server started on port 3000');
    });