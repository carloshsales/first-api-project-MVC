console.clear();

const express = require('express');
const cors = require('cors');
const gamesRoutes = require('./routes/games.route');

const connectMongoDb = require('./database/mongoDB/mongo');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/games', gamesRoutes);

connectMongoDb();

const port = 3000;
app.listen(port, () => {
    console.log('Rodando em: http://localhost:' + port);
});
