const express = require("express")
const { login, register, getusers, updateUser,getUserById } = require("@controllers/userController");

const auth = require("@middlewares/Auth");


const router = express.Router()

// router.get("/{/:id}", getusers);
router.get("/", getusers);
router.get("/:id", getUserById);
router.post("/register", register);
router.post("/login", login);
router.put("/:id", auth, updateUser);



module.exports = router;


