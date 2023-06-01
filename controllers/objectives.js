const Board = require('../models/board')
const Objective = require('../models/objective')

module.exports = {
    create,
}

// async function index(req, res) {
//     const objectives = await Objective.find(req.params.id)
//     const id = req.params.id
//     res.render(`boards/${id}`, { 
//         objectives,
//     })
// }
  
async function create(req, res) {
    // Remove empty properties so that defaults will be applied
    for (let key in req.body) {
        if (req.body[key] === '') delete req.body[key];
    }
    try {
        console.log(req.body)
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