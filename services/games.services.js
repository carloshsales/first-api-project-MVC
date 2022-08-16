const GameEntity = require('../class/game.entity');
const Game = require('../database/models/gameSchema');


async function getAllGames() {
    return await Game.find();
}

async function getGamesId(id) {
    const gamefinded = await Game.findById(id);
    return gamefinded;

    // games.map((game) => {
    //     if (game.id === id) {
    //         gamefinded = game;
    //     }
    // });
    // return gamefinded;
}

async function createGame(game) {
    const newGame = new GameEntity(game);
    newGame.validate();

    /* Creating a new game and pushing it to the database. */
    const gameCreated = await Game.create(newGame);

    return gameCreated;
    // games.push(newGame);

    // return newGame;
}

async function updateGame(game) {
    const gameUpdated = new GameEntity(game);
    gameUpdated.validate();

    // games.map((item, index) => {
    //     if (item.id === gameUpdated.id) {
    //         games.splice(index, 1, gameUpdated);
    //     }
    // });

    const gameUpdatedInDatabase = await Game.findOneAndUpdate(
        { id: game.id },
        gameUpdated,
        { new: true },
    );

    return gameUpdatedInDatabase;
}

async function deleteGame(id) {
    const gameDeleted = await Game.findOneAndDelete({ id: id });

    return gameDeleted;
}

module.exports = {
    getAllGames,
    getGamesId,
    createGame,
    updateGame,
    deleteGame,
};
