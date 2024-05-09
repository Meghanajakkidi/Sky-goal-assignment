const express = require("express");
const jwt = require("jsonwebtoken");
const Authmodel = require("../models/Auth");
const router = express.Router();
const mongoose = require("mongoose");
router.post("/signup", async function (req, res) {
    const { fullname, email, password } = req.body
    let isUserExist = await Authmodel.Authmodel.findOne({ email: email })
    if (isUserExist) {
        res.send({ message: "user alredy exist", success: false })
    }
    const newUser = new Authmodel.Authmodel({ ...req.body, active: true })
    const createdUser = await newUser.save();
    res.send({ message: "User signup successfully", success: true })
})

router.post("/login", async function (req, res) {
    const { fullName, email, password } = req.body
    let isUserExist = await Authmodel.Authmodel.findOne({ email: email })
    if (isUserExist) {
        if (password === isUserExist.password) {
           
            if (isUserExist.active === false) {
                return res.send({ message: "Your account has been Deactivated", success: false })
            } else {
                let token = jwt.sign({ email: isUserExist.email, _id: isUserExist._id }, "testkey")
                return res.send({ message: "User Logged in Successfully", success: true, token: token, email: isUserExist.email, userId: isUserExist._id,  })
            }

        } else {
            return res.send({ message: "Invalid credentials", success: false })
        }

    } else {
        return res.send({ message: "User Not Exist", success: false })
    }
})

module.exports=router