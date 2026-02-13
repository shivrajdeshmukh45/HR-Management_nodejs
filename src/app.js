
const express = require("express");
const userRouter = require("@routes/user.route");
const deptRoute = require("@routes/dept.route");
const teamRoute = require("@routes/team.route");
const projectRoute = require("@routes/project.route");
const attendanceRoute = require("@routes/attendance.routes")
const payroll = require("@routes/payrollRoute");



const app = express();
app.use(express.json());


app.use("/users", userRouter);
app.use("/department", deptRoute);
app.use("/team", teamRoute);
app.use("/project", projectRoute);
app.use("/attendance", attendanceRoute);
app.use("/payroll", payroll);



module.exports = app