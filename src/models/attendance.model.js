const mongoose = require("mongoose");


const attendanceSchema = new mongoose.Schema({


  employeeId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },


  date: {
    // type: Date,
    type: String,
    required: true
  },


  // checkIn: Date,
  checkIn: {
    type: String,
 //   required: true
  },

  //checkOut: Date,
  checkOut: {
    type: String,
//    required: true
  },

  status: {
    type: String,
    enum: ["PRESENT", "ABSENT", "LEAVE"],
    default: "PRESENT"

  }

});




module.exports = mongoose.model("Attendance", attendanceSchema);

