const gameService = require('../services/games.services');

function findAllGames(req, res) {
    try {
        const allGames = gameService.getAllGames();
        res.send(allGames);
    } catch (err) {
        console.log(err);
        res.status(500);
    }
}

function findGamesId(req, res) {
    const id = req.params.id;
    const uniqueGame = gameService.getGamesId(id);
    if (uniqueGame) {
        res.status(200).send(uniqueGame);
    } else {
        res.status(500).send({ message: 'não existe nem um game com esse id' });
    }
}

function createGame(req, res) {
    try {
        const game = req.body;
        const gameCreated = gameService.createGame(game);

        res.send(gameCreated);
    } catch (err) {
        console.log(err);
        res.status(400).send({ message: err.message });
    }
}

function updateGame(req, res) {
    try {
        const game = req.body;
        const gameUpdated = gameService.updateGame(game);

        res.send(gameUpdated);
    } catch (err) {
        console.log(err);
        res.status(400).send({ message: err.message });
    }
}

function deleteGame(req, res) {
    const id = req.params.id;
    const gameDeleted = gameService.deleteGame(id);

    if (gameDeleted) {
        res.send(gameDeleted);
    } else {
        res.status(400).send({ message: 'Não existe game com esse id' });
    }
}

module.exports = {
    findAllGames,
    findGamesId,
    createGame,
    updateGame,
    deleteGame,
};
