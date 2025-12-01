const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "user name is required"],
    trim: true,
    minLength: 2,
  },
  email: {
    type: String,
    required: [true, "email is required"], 
    trim: true,
    minLength: 2,
    unique: true,
    lowercase: true, // ✅ fixed typo
  },
  password: {
    type: String,
    required: [true, "password is required"],
    minLength: 8,
  }
}, { timestamps: true });

const User = mongoose.model('user', userSchema);

module.exports = User;
