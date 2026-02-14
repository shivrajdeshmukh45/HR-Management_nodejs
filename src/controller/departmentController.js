const mongoose = require("mongoose")
const Department = require("@models/department.model")


const createDept = async (req, res, next) => {

    try {
        const { name, description } = req.body;

        await Department.create({
            name,
            description
        })

        res.status(201).json({
            message: "Department created..!"
        })


    } catch (error) {
        next(error);
    }
}


const getDept = async (req, res, next) => {
    try {
        const dept = await Department.find();
        res.status(200).json({
            message: "Dept Fetch ....!",
            data: dept
        })


    } catch (error) {
        next(error)
    }
}

module.exports = { createDept, getDept }