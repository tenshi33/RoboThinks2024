const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
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

const User = mongoose.model('User', userSchema);


module.exports = User;
