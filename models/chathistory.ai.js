const mongoose = require('mongoose');

const aiSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true, 
  },
  message: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  timestamp: {
    type: Date, 
    default: Date.now, 
  },
});

const Ai = mongoose.model('Ai', aiSchema);


module.exports = Ai;
