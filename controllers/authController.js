const User = require("../models/userModel");

const bcrypt = require("bcryptjs");

exports.signUp = async (req, res) => {
    const {username, password} = req.body;
    const hashPassword = await bcrypt.hash(password, 12);

    try {
        const newUser = await User.create({
            username: username,
            password: hashPassword
        });
        req.session.user = newUser;
        res.status(201).json({
            status: "success",
            data: {
                user: newUser
            }
        })
    } catch(e) {
        console.log(e);
        res.status(400).json({
            status: "failed"
        })
    }
}

exports.login = async (req, res) => {
    const {username, password} = req.body;

    try {
        const user = await User.findOne({username});
        if(!user) {
            res.status(400).json({
                status: "failed",
                message: "User Not Found"
            })
        }
        const isValid = await bcrypt.compare(password, user.password);
        if(isValid) {
            req.session.user = user;
            res.status(201).json({status: "success"});
        } else {
            res.status(400).json({status: "falied", message: "Incorrect username or password"});
        }
    } catch(e) {
        console.log(e);
        res.status(400).json({
            status: "failed"
        })
    }
}