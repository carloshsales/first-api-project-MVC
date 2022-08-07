const gameService = require('../services/games.services');

function findAllGames(req, res) {
    const allGames = gameService.getAllGames();
    res.send(allGames);
}

function findGamesId(req, res) {
    const id = req.params.id;
    const uniqueGame = gameService.getGamesId(id);
    res.send(uniqueGame);
}

function createGame(req, res) {
    const game = req.body;
    const gameCreated = gameService.createGame(game);

    res.send(gameCreated);
}

function updateGame(req, res) {
    const game = req.body;
    const gameUpdated = gameService.updateGame(game);

    res.send(gameUpdated);
}

function deleteGame(req, res) {
    const id = req.params.id;
    const gameDeleted = gameService.deleteGame(id);

    res.send(gameDeleted);
}

module.exports = {
    findAllGames,
    findGamesId,
    createGame,
    updateGame,
    deleteGame,
};
