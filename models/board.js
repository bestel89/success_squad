const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const boardSchema = new Schema({
  boardName: {
    type: String,
    required: true,
  },
  boardDesc: {
    type: String,
  },
  boardObjs: [{
    type: Schema.Types.ObjectId,
  }],
  boardOwnerID: {
    type: Schema.Types.ObjectId,
  },
  boardOwnerName: {
    type: String,
  },
  boardEditors: [{ //NOT IN USE UNTIL FURTHER FUNCTIONALITY IMPLEMENTED
    type: Schema.Types.ObjectId,
  }],
  boardViewers: [{ //NOT IN USE UNTIL FURTHER FUNCTIONALITY IMPLEMENTED
    type: Schema.Types.ObjectId,
  }],
}, {
  timestamps: true
});

module.exports = mongoose.model('Board', boardSchema);