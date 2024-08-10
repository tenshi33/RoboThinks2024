// config/dbConfig.js
import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const result = await mongoose.connect(process.env.MONGO_URI);
    //console.log(result)
    console.log('MongoDB connected...');
  } catch (error) {
    console.error('MongoDB connection error:', error.message);
  }
};

export default connectDB;
