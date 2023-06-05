const express = require('express');
const router = express.Router();
const krsCtrl = require('../controllers/krs')
const ensureLoggedIn = require('../config/ensureLoggedIn')

// ALL ROUTES STARTS WITH /krs

// POST update KRs
router.post('/:id', ensureLoggedIn, krsCtrl.update)

// POST DELETE KR
router.delete('/:id', ensureLoggedIn, krsCtrl.delete)

module.exports = router