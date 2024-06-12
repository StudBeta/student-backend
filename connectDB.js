import mongoose from "mongoose";

const connectDB = async (DATABASE_URL) => {
  try {
    await mongoose.connect(DATABASE_URL);
    console.log("Database connection established");
  } catch (err) {
    console.error(err);
  }
};

export default connectDB;
