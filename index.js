console.clear();

const express = require('express');
const cors = require('cors');

const connectMongoDb = require('./database/mongoDB/mongo');
const gamesRoutes = require('./routes/games.route');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.use('/games', gamesRoutes);

connectMongoDb();

app.listen(port, () => {
    console.log('Rodando em: http://localhost:' + port);
});
