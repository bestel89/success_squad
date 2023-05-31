const express = require('express');
const router = express.Router();
const boardsCtrl = require('../controllers/boards')
const ensureLoggedIn = require('../config/ensureLoggedIn')

// GET Boards home /boards
router.get('/', ensureLoggedIn, boardsCtrl.index)

// GET boards/new
router.get('/new', ensureLoggedIn, boardsCtrl.new)

// GET boards/show
router.get('/:id', ensureLoggedIn, boardsCtrl.show)

// POST boards
router.post('/', ensureLoggedIn, boardsCtrl.create)

// POST boards
router.delete('/:id', ensureLoggedIn, boardsCtrl.delete)

module.exports = router;