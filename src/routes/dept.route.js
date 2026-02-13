const express = require("express");
const { getDept, createDept } = require("@controllers/departmentController");
const auth = require("@middlewares/Auth")
const roleMiddleware = require("@middlewares/role.middleware")

const router = express.Router();



router.get("/", getDept);
router.post("/register", auth, roleMiddleware("ADMIN"), createDept);
//router.post("/register", roleMiddleware("ADMIN"), createDept);


module.exports = router;


