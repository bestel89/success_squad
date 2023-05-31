const mongoose = require('mongoose');

//Connecting to the mongoDB database
mongoose.connect(process.env.DATABASE_URL) 

//This assigns the mongoose connection to a db variable, which can then be used for event listeners
const db = mongoose.connection

//Event listener that prints when its connected
db.on('connected', () => {
	console.log('Database connected')
})