const express = require('express');
const app = express();

const arr = require('./mock/service');

app.get('/', (req, res) => {
    res.send();
});

app.listen(3000, () => {
    console.log('listening on: http://localhost:3000');
});
