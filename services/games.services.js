const games = require('../mock/games');
const GameEntity = require('../class/game.entity');

function getAllGames() {
    return games;
}

function getGamesId(id) {
    let gamefinded;

    games.map((game) => {
        if (game.id === id) {
            gamefinded = game;
        }
    });
    return gamefinded;
}

function createGame(game) {
    const newGame = new GameEntity(game);

    newGame.validate();

    games.push(newGame);

    return newGame;
}

function updateGame(game) {
    const gameUpdated = new GameEntity(game);
    gameUpdated.validate();

    games.map((item, index) => {
        if (item.id === gameUpdated.id) {
            games.splice(index, 1, gameUpdated);
        }
    });

    return gameUpdated;
}

function deleteGame(id) {
    let gameDeleted;
    games.map((item, index) => {
        if (item.id === id) {
            gameDeleted = item;
            games.splice(index, 1);
        }
    });

    return gameDeleted;
}

module.exports = {
    getAllGames,
    getGamesId,
    createGame,
    updateGame,
    deleteGame,
};
