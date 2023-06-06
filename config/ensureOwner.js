const Board = require('../models/board')

//NB - This function works, but is not complete - it would be refactored following SHARING functionality being added

module.exports = async function(req, res, next) {
    try {
        // compare the boardOwnerId with the authenticated user
        // return if they are the same
        // next() if they are not the same and redirect to error page

        const requestorID = await req.user._id
        console.log(`requestor id is: ${requestorID}`)

        const boardToEdit = await Board.findById(req.params.id)
        const boardOwnerID = await boardToEdit.boardOwnerID
        console.log(`board owner id is: ${boardOwnerID}`)

        if (requestorID.equals(boardOwnerID)) {
            return next()
        } else {
            res.send('YOU ARE NOT THE OWNER')
        }
    } catch (error) {
        console.log(error)
    }
}