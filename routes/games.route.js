const router = require('express').Router();

const controller = require('../controllers/games.controller');

router.get('/', controller.findAllGames);
router.get('/:id', controller.findGamesId);
router.post('/create', controller.createGame);
router.put('/:id/update', controller.updateGame);
router.delete('/:id/delete', controller.deleteGame);

module.exports = router;
