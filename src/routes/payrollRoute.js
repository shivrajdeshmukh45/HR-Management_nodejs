const express = require("express");

const router = express.Router();
const { getPayroll, createPayroll, payrollUpdate } = require("@controllers/payrollController")
const auth = require("@middlewares/Auth");
const role = require("@middlewares/role.middleware.js")


router.get("/", auth, role("HR", "ADMIN"), getPayroll);
router.post("/add", auth, role("HR", "ADMIN"), createPayroll);
router.put("/update", auth, role("HR", "ADMIN"), payrollUpdate);



module.exports = router;