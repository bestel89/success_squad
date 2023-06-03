const express = require('express');
const router = express.Router();
const krsCtrl = require('../controllers/krs')
const ensureLoggedIn = require('../config/ensureLoggedIn')

// ALL ROUTES STARTS WITH /krs

// // GET All objectives for a board
// router.get('/objectives', ensureLoggedIn, objectivesCtrl.index)

// GET /posts/:id/comments/new	
// router.get('/objectives/:id/krs/new', ensureLoggedIn, krsCtrl.new)

// // GET boards/show
// router.get('/:id', ensureLoggedIn, boardsCtrl.show)

// POST boards
// router.post('/boards/:id/objectives', ensureLoggedIn, objectivesCtrl.create)

// POST update KRs
router.post('/:id', ensureLoggedIn, krsCtrl.update)

// POST DELETE KR
router.delete('/:id', ensureLoggedIn, krsCtrl.delete)

module.exports = router