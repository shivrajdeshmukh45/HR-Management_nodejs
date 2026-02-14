const express = require("express");
const helmet = require("helmet");

const userRouter = require("@routes/user.route");
const deptRoute = require("@routes/dept.route");
const teamRoute = require("@routes/team.route");
const projectRoute = require("@routes/project.route");
const attendanceRoute = require("@routes/attendance.routes");
const payroll = require("@routes/payrollRoute");

const errorMiddleware = require("@middlewares/error.middleware");

const app = express();


app.use(helmet());


app.use(express.json());


app.use("/api/users", userRouter);
app.use("/api/departments", deptRoute);
app.use("/api/teams", teamRoute);
app.use("/api/projects", projectRoute);
app.use("/api/attendance", attendanceRoute);
app.use("/api/payroll", payroll);


app.use(errorMiddleware);

module.exports = app;
