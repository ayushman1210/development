const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  Name: {
    type: String,
    maxlength: 20,
  },
  StudentNO: {
    type: String,
    maxlength: 10,
  },
  Gender: {
    type: String,
  },
  Branch: {
    type: String,
  },
  Year: {
    type: String,
  },
  contact: {
    type: Number,
  },
  Email: {
    type: String,
    unique: true,
    sparse: true,
  },
  payment: {
    type: Boolean,
    default: false,
  },
}, { timestamps: true });

const Student = mongoose.model("student", studentSchema);
module.exports = Student;


