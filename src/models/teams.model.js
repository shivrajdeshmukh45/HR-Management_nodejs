const mongoose = require("mongoose");

const teamSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
        trim: true
    },
    manager: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"

    },

    members: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }],


    department: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Department",
        required: true
    },

    teamLeadOne: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },

    teamLeadTwo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },

    // description: {
    //     type: String
    // },

    project: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Project"
    },

    location: {
        type: String
    },

    // createdBy: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "User"
    // },

    isActive: {
        type: Boolean,
        default: true
    }

}, { timestamps: true });


module.exports = mongoose.model("Team", teamSchema);
