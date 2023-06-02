const Objective = require('../models/objective')

module.exports = {
    edit,
    create,
}

async function edit(req, res) {
    const objective = await Objective.findById(req.params.id)
    const krs = await objective.objKeyResults
    console.log(krs)
    await res.render('boards/editKRs', { 
      title: `Key Results for: ${objective.objTitle}`,
      objective,
      krs,
      });
}

async function create(req, res) {
    // Remove empty properties so that defaults will be applied
    for (let key in req.body) {
        if (req.body[key] === '') delete req.body[key];
    }
    try {
        const objective = await Objective.findById(req.params.id)
        const krToAdd = req.body
        objective.objKeyResults.push(krToAdd)
        objective.save()
        console.log(objective._id)
        res.redirect(`/objectives/${objective._id}/krs/edit`);
    } catch (err) {
    //   Typically some sort of validation error
      console.log(err);
    //   res.render(`/boards/${objective._id}`, { errorMsg: err.message });
    }
}