import mongoose from "mongoose";

const connectDB = async () => {
  try {
    if (mongoose.connection.readyState === 0) {
      await mongoose.connect(process.env.MANGODB_URL);
      console.log("DB Connected");
    }
  } catch (error) {
    console.log(error);
  }
};
export default connectDB;
