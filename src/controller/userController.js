const mongoose = require("mongoose");
const User = require("@models/user.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Department = require("@models/department.model");



const getusers = async (req, res, next) => {

    try {
          const { id } = req.params;
        if (id) {
            const user = await User.findById(id);
            return res.status(200).json({
                message: "User  fetched...!",
                user: user
            })
        } else {
            const users = await User.find();
            return res.status(200).json({
                message: "Users are Fetched..",
                data: users
            })
        }

    } catch (err) {
        next(err)
    }
}



const getUserById = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(user);
  } catch (err) {
    next(err);
  }
};


const register = async (req, res) => {


    const { name,
        email,
        password,
        role,
        department,
        designation,
        joiningDate,
        salary,
        managerId,
        isActive } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    await User.create({
        name,
        email,
        password: hashedPassword,
        role,
        department,
        designation,
        joiningDate,
        salary,
        managerId,
        isActive,
    });

    res.status(201).json({
        message: "User registered successfully"
    });
};




const login = async (req, res) => {

    const { email, password } = req.body;

    const user = await User.findOne({ email });


    if (!user) {
        res.status(401).json({
            message: "Invalid Credentials  ...!"
        })
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {

        res.status(401).json({
            message: "Invalid Credentials  ...!"
        })

    }

    const token = jwt.sign(
        { userId: user._id },
        process.env.JWT_SECRET,
        { expiresIn: process.env.JWT_EXPIRES_IN }

    );

    res.json({
        message: "login Successful...!",
        token
    })

}




const updateUser = async (req, res) => {

    try {
        const id = req.params.id;

        await User.findByIdAndUpdate(id, req.body);

        res.status(200).json({
            message: "User updated ...!"
        })

    } catch (err) {

    }

}



module.exports = { login, register, getusers, updateUser,getUserById }

