const Board = require('../models/board')

module.exports = {
    index,
    new: newBoard,
    create,
}

async function index(req, res) {
    const boards = await Board.find({})
    res.render('boards/index', { 
        title: 'Boards', 
        boards, 
    })
}

// async function show(req, res) {
//   // Populate the cast array with performer docs instead of ObjectIds
//   const movie = await Movie.findById(req.params.id).populate('cast');
//   // Mongoose query builder approach to retrieve performers not the movie:
//     // Performer.find({}).where('_id').nin(movie.cast)
//   // The native MongoDB approach uses a query object to find 
//   // performer docs whose _ids are not in the movie.cast array like this:
//   const performers = await Performer.find({ _id: { $nin: movie.cast } }).sort('name');
//   res.render('movies/show', { title: 'Movie Detail', movie, performers });
// }

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
    console.log(req.body)
    const board = await Board.create(req.body);
    res.redirect(`/boards`);
  } catch (err) {
    // Typically some sort of validation error
    console.log(err);
    res.render('boards/new', { errorMsg: err.message });
  }
}