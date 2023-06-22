
const Class = require('../models/class.model')

module.exports = {
    //CRUD
    //create a class
    createClass: async (req, res) => {
        console.log(req.body)
        try {
            const ftClass = await Class.findOne({ name: req.body.name });
            if (!ftClass) {
                Class.create(req.body)
                    .then(newClass => res.status(201).json(newClass))
                    .catch(err => res.status(400).json(err))
            }
            else {
                res.status(400).json({
                    message: "Class already existed"
                });
            }
        }
        catch (err) {
            return res.json(err);
        }
    },
    //display a Class or all classes
    getAllClasses: (req, res) => {
        Class.find()
            .then(allClasses => res.json(allClasses))
            .catch(err => res.json(err));

    },
    getOneClass: (req, res) => {
        Class.findById(req.params.id)
            .then(oneClass => res.json(oneClass))
            .catch(err => res.json(err))
    },
    //update a Class
    updateClass: (req, res) => {
        Class.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
            .then(updatedClass => res.json(updatedClass))
            .catch(err => res.json(err));

    },
    //Delete a Class
    deleteClass: (req, res) => {
        Class.findByIdAndDelete(req.params.id)
            .then(deletedClass => res.json(deletedClass))
            .catch(err => res.json(err));
    },
}