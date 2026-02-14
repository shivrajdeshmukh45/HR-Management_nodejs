const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({

  name: {
    type: String,
    required: true,
    trim: true
  },

  description: {
    type: String
  },
 

  department: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Department",
    required: true
  },

  team: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Team"
  },

  projectManager: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },

  clientName: {
    type: String
  },

  startDate: {
    //  type: Date,
    type: String,
    required: true
  },

  endDate: {
    // type: Date
    type: String
  },

  status: {
    type: String,
    enum: ["PLANNED", "IN_PROGRESS", "ON_HOLD", "COMPLETED", "CANCELLED"],
    default: "PLANNED"
  },

  priority: {
    type: String,
    enum: ["LOW", "MEDIUM", "HIGH", "CRITICAL"],
    default: "MEDIUM"
  },

  isActive: {
    type: Boolean,
    default: true
  }

  // createdBy: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: "User"
  // }

}, { timestamps: true });


module.exports = mongoose.model("Project", projectSchema);
