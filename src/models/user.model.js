const mongoose = require("mongoose");
const Department = require("@models/department.model");


const userSchema = new mongoose.Schema({

  name: {
    type: String,
    required: true
  },

  email: {
    type: String,
    unique: true,
    required: true
  },

  password: {
    type: String,
    required: true
  },

  role: {
    type: String,
    enum: ["ADMIN", "HR", "EMPLOYEE", "MANAGER"],
    default: "EMPLOYEE"
  },

  

  department: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Department"
  },


  designation: String,

  joiningDate: Date,


  managerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },

  isActive: {
    type: Boolean,
    default: true
  }

}, { timestamps: true });

module.exports = mongoose.model("User", userSchema);
