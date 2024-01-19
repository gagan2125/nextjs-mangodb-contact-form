import mongoose, { Schema } from "mongoose";

const ContactSchema = new Schema({
  fullname: {
    type: String,
    required: [true, "Name is required"],
    trim: true,
    minLength: [2, "Name must be greater than 2 characters"],
    maxLength: [50, "Name must be lesser than 50 characters"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
  },
  message: {
    type: String,
    required: [true, "Message is required"],
  },
  date: {
    type: String,
    default: Date.now,
  },
});

const Contact =
  mongoose.models.Contact || mongoose.model("Contact", ContactSchema);

export default Contact;
