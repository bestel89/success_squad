const Board = require('../models/board')

module.exports = {
    index,
    new: newBoard,
    create,
    show,
    delete: deleteBoard,
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
  console.log(board)
  res.render('boards/show', { 
    title: board.boardName, 
    board, 
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
    // console.log(req.params.id)
    // const board = await Board.findById(req.params.id);
    // console.log(board)
    // // Rogue user!
    // if (!board) return res.redirect('/boards');
    // board.remove();
    // // Save
    // await board.save();
    // Redirect back to the movie's show view
    // res.redirect(`/boards`);
}