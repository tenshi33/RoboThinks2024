import mongoose from 'mongoose';
import mongooseSequence from 'mongoose-sequence';
const autoIncrement = mongooseSequence(mongoose);

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

export default Query;
