const express = require('express');
const router = express.Router();
const objectivesCtrl = require('../controllers/objectives')
const ensureLoggedIn = require('../config/ensureLoggedIn')

// ALL ROUTES STARTS WITH /boards/:id

// // GET All objectives for a board
// router.get('/objectives', ensureLoggedIn, objectivesCtrl.index)

// // GET boards/new
// router.get('/new', ensureLoggedIn, objectivesCtrl.new)

// // GET boards/show
// router.get('/:id', ensureLoggedIn, boardsCtrl.show)

// POST boards
router.post('/objectives', ensureLoggedIn, objectivesCtrl.create)

// // POST boards
// router.delete('/:id', ensureLoggedIn, boardsCtrl.delete)

module.exports = router;