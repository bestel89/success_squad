const express = require('express');
const router = express.Router();
const objectivesCtrl = require('../controllers/objectives')
const krsCtrl = require('../controllers/krs')
const ensureLoggedIn = require('../config/ensureLoggedIn')

// ALL ROUTES STARTS WITH /boards/:id

// GET /objectives/:id/krs/new	
router.get('/objectives/:id/krs/edit', ensureLoggedIn, krsCtrl.edit)

// POST boards
router.post('/boards/:id/objectives', ensureLoggedIn, objectivesCtrl.create)

// POST create KRs 
router.post('/objectives/:id/krs', ensureLoggedIn, krsCtrl.create)

// POST boards
router.post('/objectives/:id', ensureLoggedIn, objectivesCtrl.update)

// POST boards
router.delete('/objectives/:id', ensureLoggedIn, objectivesCtrl.delete)

module.exports = router