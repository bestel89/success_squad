const Board = require('../models/board')
const Objective = require('../models/objective')
const moment = require('moment')

module.exports = {
    create,
    update,
    delete: deleteObj,
}

async function deleteObj(req, res) {
    const id = req.params.id
    const objective = await Objective.findById(id)
    relatedBoardID = objective.objBoardID
    await Objective.deleteOne(objective)
    await res.redirect(`/boards/${relatedBoardID}`)
}

async function update(req, res, next) {
    const { id } = req.params
    const boardID = req.body.objBoardID
    for (let key in req.body) {
        if (req.body[key] === '') delete req.body[key];
    }
    try {
        const objective = await Objective.findById(id)
        objective.objTitle = req.body.objTitle
        objective.objDesc = req.body.objDesc
        objective.objCalcDue = req.body.objCalcDue
        await objective.save()
    } catch (err) {
        console.log(err)
    }
    res.redirect(`/boards/${boardID}`)
}
  
async function create(req, res) {
    // Remove empty properties so that defaults will be applied
    for (let key in req.body) {
        if (req.body[key] === '') delete req.body[key];
    }
    try {
        req.body.objAuthorName = req.user.name
        const objective = await Objective.create(req.body);
        const id = req.body.objBoardID
        res.redirect(`/boards/${id}`);
    } catch (err) {
      // Typically some sort of validation error
      console.log(err);
      res.render(`/boards/${id}/objectives`, { errorMsg: err.message });
    }
}