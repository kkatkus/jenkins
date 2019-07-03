const createServer = require('http').createServer;
const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('hello world');
});

createServer(app).listen(3000, () => {
    console.log(`Server listening on http://localhost:3000`);
});
