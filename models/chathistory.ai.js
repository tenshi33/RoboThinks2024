const mongoose = require('mongoose');
const autoIncrement = require('mongoose-sequence')(mongoose);

const querySchema = new mongoose.Schema({
  query_count: {
    type: Number,
    unique: true, 
  },
  question: {
    type: String,
    required: true,
    trim: true,
  },
  answer: {
    type: String,
    required: true,
    trim: true,
  },
  timestamp: {
    type: Date, 
    default: Date.now, 
  },
});


querySchema.plugin(autoIncrement, { inc_field: 'query_count' });
const Query = mongoose.model('Query', querySchema);


module.exports = Query;
