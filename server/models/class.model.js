const mongoose = require('mongoose');

const ClassSchema = new mongoose.Schema({

    classes: {
        type: String,
        required: [true, 'Class is required'],
        minlength: [3, 'Class must be at least 8 characters long']
    },
}, { timestamps: true });

module.exports = mongoose.model('Class', ClassSchema);
