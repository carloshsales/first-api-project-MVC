console.clear();

const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());
const port = 3000;

const controller = require('./controllers/games.controller');
const { json } = require('express');

app.get('/', controller.findAllGames);
app.get('/games/:id', controller.findGamesId);
app.post('/games/create', controller.createGame);
app.put('/games/:id/update', controller.updateGame);
app.delete('/games/:id/delete', controller.deleteGame);

app.listen(port, () => {
    console.log('Rodando');
});
