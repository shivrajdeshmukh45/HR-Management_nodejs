const Payroll = require("@models/payroll.model");


const getPayroll = async (req, res) => {

    try {
        if (req.params.id) {
            const payroll = await Payroll.findById(req.params.id);
            res.status(200).json(payroll);
        } else {
            const payrolls = await Payroll.find();
            res.status(200).json(payrolls);
        }
    } catch (error) {
        next(error);
    }
}


const createPayroll = async (req, res) => {

    try {
        const { employeeId, month, basicSalary, deductions, netSalary, paidOn } = req.body;

        await Payroll.create({
            employeeId,
            month,
            basicSalary,
            deductions,
            netSalary,
            paidOn
        })
        res.status(201).json({
            message: "PayRoll Added ...!"
        })
    } catch (error) {
        next(error);
    }

}




const payrollUpdate = async (req, res) => {

    try {
        const id = req.params.id;

        await Payroll.findByIdAndUpdate(id, req.body);

        res.status(200).json({
            message: "Payroll  updated ...!"
        })

    } catch (error) {
        next(error);
    }
}

module.exports = { getPayroll, createPayroll, payrollUpdate };