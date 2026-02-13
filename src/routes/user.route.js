const express = require("express")
const { login, register, getusers, updateUser } = require("@controllers/userController");

const auth = require("@middlewares/Auth");


const router = express.Router()

router.get("/:id", getusers);
router.post("/register", register);
router.post("/login", login);
router.put("/:id", auth, updateUser);
//router.put("/:id",  updateUser);


module.exports = router;


