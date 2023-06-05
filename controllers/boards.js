const Board = require('../models/board')
const Objective = require('../models/objective')
const moment = require('moment')

module.exports = {
    index,
    new: newBoard,
    create,
    show,
    delete: deleteBoard,
    edit,
    update,
}

async function update(req, res, next) {
    const { id } = req.params
    for (let key in req.body) {
        if (req.body[key] === '') delete req.body[key];
    }
    try {
        const board = await Board.findById(id)
        board.boardName = req.body.boardName
        board.boardDesc = req.body.boardDesc
        await board.save()
    } catch (err) {
        console.log(err)
    }
    res.redirect(`/boards/${id}`)
}

async function edit(req, res) {
    try {
        const {id} = req.params
        const board = await Board.findById(id)
    res.render(`boards/edit`, {
        title: 'Edit board details',
        board,
    })
    } catch (err) {
        console.log(err)
    }
}

async function index(req, res) {
    let user = req.user.name
    const splitName = user.split(' ');
    const firstName = splitName[0]
    const boards = await Board.find({})
    res.render('boards/index', { 
        title: 'Boards', 
        boards,
        firstName,
    })
}

async function show(req, res) {
  const board = await Board.findById(req.params.id)
  const objectives = await Objective.find({objBoardID: req.params.id})
  res.render('boards/show', { 
    title: board.boardName, 
    board,
    objectives,
    moment: moment,
 });
}

function newBoard(req, res) {
  res.render('boards/new', { 
    title: 'Create Board',
    });
}

async function create(req, res) {
  // Remove empty properties so that defaults will be applied
  for (let key in req.body) {
    if (req.body[key] === '') delete req.body[key];
  }
  try {
    req.body.boardOwnerID = req.user._id
    req.body.boardOwnerName = req.user.name
    const board = await Board.create(req.body);
    res.redirect(`/boards`);
  } catch (err) {
    // Typically some sort of validation error
    console.log(err);
    res.render('boards/new', { errorMsg: err.message });
  }
}

async function deleteBoard(req, res) {
    await Board.findByIdAndDelete(req.params.id)
    await res.redirect('/boards')
}