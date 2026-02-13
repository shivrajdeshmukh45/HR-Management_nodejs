const mongoose = require("mongoose");


const payrollSchema = new mongoose.Schema({
    employeeId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Employee",
        required: true
    },
    month: String,
    basicSalary: Number,
    deductions: Number,
    netSalary: Number,
    paidOn: String
});

module.exports = mongoose.model("Payroll", payrollSchema);
