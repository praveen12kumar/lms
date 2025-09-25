import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true,"Username is required"],
    unique: [true, 'Username already exists'],
    trim: true,
    match:[/^[A-Za-z0-9]+$/, 'Username can only contain letters and numbers']
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: [true, 'Email already exists'],
    trim: true
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
  },
  avatar:{
    type: String,
  }
}, {
  timestamps: true,
});

const User = mongoose.model("User", userSchema);

export default User;