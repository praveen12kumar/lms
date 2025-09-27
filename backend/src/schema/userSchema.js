
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
    trim: true,
    match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Invalid email format']
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


userSchema.pre('save', function saveUser(next){
    const user = this;
    // if(!user.isModified('password')){
    //     return next();
    // }
    // const salt = bcrypt.genSaltSync(10);
    // const hash = bcrypt.hashSync(user.password, salt);
    // user.password = hash;
    user.avatar = `https://robohash.org/${user.username}`;
    next();
});

const User = mongoose.model("User", userSchema);

export default User;