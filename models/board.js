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
    ref: 'Viewer'
  }],
  boardOwnerID: {
    type: Schema.Types.ObjectId,
    ref: 'Owner',
  },
  boardOwnerName: {
    type: String,
  },
  boardEditors: [{
    type: Schema.Types.ObjectId,
    ref: 'Editor'
  }],
  boardViewers: [{
    type: Schema.Types.ObjectId,
    ref: 'Viewer'
  }],
}, {
  timestamps: true
});

module.exports = mongoose.model('Board', boardSchema);