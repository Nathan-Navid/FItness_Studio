const User = require('../models/user.model');

module.exports = {
    //CRUD
    //create a User
    // createUser: async (req, res) => {
    //     console.log(req.body)
    //     try {
    //         const firUser = await User.findOne({ name: req.body.name });
    //         if (!firUser) {
    //             User.create(req.body)
    //                 .then(newClass => res.status(201).json(newClass))
    //                 .catch(err => res.status(400).json(err))
    //         }
    //         else {
    //             res.status(400).json({
    //                 message: "User already existed"
    //             });
    //         }
    //     }
    //     catch (err) {
    //         return res.json(err);
    //     }
    // },
    //display a User or all users
    getAllUsers: (req, res) => {
        User.find()
            .then(allUsers => res.json(allUsers))
            .catch(err => res.json(err));

    },
    getOneUser: (req, res) => {
        User.findById(req.params.id)
            .then(oneUser => res.json(oneUser))
            .catch(err => res.json(err))
    },
    //update a User
    updateUser: (req, res) => {
        User.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
            .then(updatedUser => res.json(updatedUser))
            .catch(err => res.json(err));

    },
    //Delete a User
    deleteUser: (req, res) => {
        User.findByIdAndDelete(req.params.id)
            .then(deletedUser => res.json(deletedUser))
            .catch(err => res.json(err));
    },
}
