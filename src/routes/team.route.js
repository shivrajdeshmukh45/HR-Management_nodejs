const express = require("express");
const { getTeam, registerTeam, updateTeam } = require("@controllers/teamController")
const auth = require("@middlewares/Auth")
const roleMiddleware = require("@middlewares/role.middleware")


const router = express.Router();

router.get("/", auth, roleMiddleware("ADMIN", "HR"), getTeam);
//router.post("/register",auth,roleMiddleware("ADMIN","MANAGER","HR"),registerTeam);
router.put("/updateTeam", auth, roleMiddleware("ADMIN", "MANAGER", "HR"), updateTeam);
router.post("/register", registerTeam);
//router.put("/updateTeam",updateTeam);


module.exports = router;
