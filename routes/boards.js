const express = require('express');
const router = express.Router();
const boardsCtrl = require('../controllers/boards')
const ensureLoggedIn = require('../config/ensureLoggedIn')
const ensureOwner = require('../config/ensureOwner')

// GET Boards home /boards
router.get('/', ensureLoggedIn, boardsCtrl.index)

// GET boards/new
router.get('/new', ensureLoggedIn, boardsCtrl.new)

// GET boards/show
router.get('/:id', ensureLoggedIn, boardsCtrl.show)

// GET boards/:id/edit
router.get('/:id/edit', ensureLoggedIn, ensureOwner, boardsCtrl.edit)

// POST boards
router.post('/', ensureLoggedIn, boardsCtrl.create)

// POST boards
router.post('/:id', ensureLoggedIn, ensureOwner, boardsCtrl.update)

// POST boards
router.delete('/:id', ensureLoggedIn, ensureOwner, boardsCtrl.delete)

module.exports = router