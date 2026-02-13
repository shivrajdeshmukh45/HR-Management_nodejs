const express = require("express");
const { getAttendanceEmployee, createAttendance, getAttendanceByEmployee } = require("@controllers/attendanceController")
const auth = require("@middlewares/Auth");
const role = require("@middlewares/role.middleware");



const router = express.Router()
router.get("/employee/:employeeId",auth,role("ADMIN","HR") ,getAttendanceByEmployee);   //http://localhost:3000/attendance/employee/id
router.get("/",auth,role("ADMIN","HR") ,getAttendanceEmployee);
router.post("/add",auth,createAttendance);



module.exports = router;
