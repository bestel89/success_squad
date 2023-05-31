const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const objSchema = new Schema({
  objTitle: {
    type: String,
    required: true,
  },
  objDesc: {
    type: String,
  },
  objOrigDue: {
    type: Date,
  },
  objCalcDue: {
    type: Date,
  },
  objCalcStatus: {
    type: String,
  },
  objCalcProgress: {
    type: String,
  },
  objAuthor: {
    type: Schema.Types.ObjectId,
    ref: 'ObjAuthor'
  },
  objKeyResults: {
    type: [krSchema]
  },
  objComments: {
    type: Schema.Types.ObjectId,
    ref: 'ObjComment'
  }
}, {
  timestamps: true
});

const krSchema = new Schema({
    krTitle: {
        type: String,
        required: true,
    },
    krStatus: {
        type: String,
    },
    krProgress: {
        type: String,
    },
    krDueDate: {
        type: Date,
    },
    krAuthor: {
        type: Schema.Types.ObjectId,
        ref: 'krAuthor'
    },
  }, {
    timestamps: true
  });


module.exports = mongoose.model('Objective', objSchema);