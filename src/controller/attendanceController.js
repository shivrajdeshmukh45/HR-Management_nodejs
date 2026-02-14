const Attendance = require("@models/attendance.model");




const getAttendanceEmployee = async (req, res) => {
    try {

        if (req.params.id) {
            const attendance = await Attendance.findById(req.params.id);
            res.status(201).json(attendance);
        } else {

            const attendances = await Attendance.find();
            res.status(201).json(attendances);
        }

    } catch (err) {
        next(err);
    }
}


const createAttendance = async (req, res) => {

    try {
        const { employeeId, date, checkIn, checkOut, status } = req.body;

        await Attendance.create({
            employeeId,
            date,
            checkIn,
            checkOut,
            status

        })
        res.status(201).json({
            message: "Attendance Added.....!"
        })


    } catch (err) {
        next(err);
    }

}





const getAttendanceByEmployee = async (req, res, next) => {


    try {
        const id = req.params.employeeId;

        const attendance = await Attendance.find({ employeeId: id });
        res.status(200).json({
            message: "Attendance fetched for employee",
            data: attendance
        })

    } catch (err) {
        next(err);

    }

}

module.exports = { getAttendanceEmployee, createAttendance, getAttendanceByEmployee }
