const express = require("express")
const { getProjects, createProject, updateProject } = require("@controllers/projectController");
const auth = require("@middlewares/Auth")
const roleMiddleware = require("@middlewares/role.middleware");



const router = express.Router();

router.get("/", auth, roleMiddleware("ADMIN"), getProjects);
router.post("/createProject", auth, roleMiddleware("ADMIN", "HR", "MANAGER"), createProject);
router.put("/createProject", auth, roleMiddleware("ADMIN", "HR", "MANAGER"), updateProject);




module.exports = router;