const User = require('../models/user.model');
const StudentClass = require('../models/student.model')
const Class = require('../models/class.model')

const secret = process.env.SECRET_KEY;
const jwt = require('jsonwebtoken');
// Will need this for login functionality
const bcrypt = require('bcrypt');

module.exports = {
    // register a new user

    register: async (req, res) => {
        try {
            const potentialUser = await User.findOne({ email: req.body.email });
            if (potentialUser) {
                return res.status(400).json({
                    message: "Email already exists"
                });
            }
            const newUser = await User.create(req.body);
            const userToken = jwt.sign({ _id: newUser._id, email: newUser.email }, secret, { expiresIn: "2h" });
            res.cookie("usertoken", userToken, { httpOnly: true }).json({
                message: "Success!",
                user: newUser
            });
        } catch (err) {
            console.log(err);
            return res.status(400).json(err);
        }
    }
    ,
    // login an existing user
    login: async (req, res) => {
        try {
            const user = await User.findOne({ email: req.body.email });
            if (user) {
                const passwordMatch = await bcrypt.compare(req.body.password, user.password);
                if (passwordMatch) {
                    const userToken = jwt.sign({ _id: user._id, email: user.email }, secret, { expiresIn: "2h" });
                    res.cookie("usertoken", userToken, secret, { httpOnly: true }).json({
                        message: "Success!",
                        user: user
                    });
                }
                else {
                    res.status(400).json({
                        message: "Invalid login attempt"
                    });
                }
            } else {
                res.status(400).json({
                    message: "Invalid login attempt"
                });
            }
        }
        catch (err) {
            return res.json(err);
        }
    },
    // logout an existing user
    logout: (req, res) => {
        res.clearCookie('usertoken');
        res.sendStatus(200);
    },
    getOneStudent: (req, res) => {
        User.findById(req.params.id)
            .then(oneStudent => res.json(oneStudent))
            .catch(err => res.json(err))
    },

    //list of all stores
    getAllStudents: (req, res) => {
        User.find()
            .then(allStudents => res.json(allStudents))
            .catch(err => res.json(err));

    },
    getOneClass: (req, res) => {
        User.findById(req.params.id)
            .then(oneClass => res.json(oneClass))
            .catch(err => res.json(err))
    },

    //list of all stores
    getAllClasses: (req, res) => {
        User.find()
            .then(allClasses => res.json(allClasses))
            .catch(err => res.json(err));

    },
    getAllStudentClasses: (req, res) => {
        User.findById(req.params.id)
            .then(allStudentClasses => res.json(allStudentClasses))
            .catch(err => res.json(err))
    }
}