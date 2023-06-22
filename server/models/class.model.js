const mongoose = require('mongoose');

const ClassSchema = new mongoose.Schema({

    name: {
        type: String,
        required: [true, 'Name is required'],
        minlength: [3, 'Name must be at least 3 characters long']
    },
    location: {
        type: String,
        required: [true, 'Location is required'],
        minlength: [3, 'Location must be at least 3 characters long']
    },
    weekdays: [{
        type: String,
        enum: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        require: true
    }],
    dateTime: {
        type: Date
    },
    attendance: {
        type: Number
    },
    capacity: {
        type: Number
    }


}, { timestamps: true });

module.exports = mongoose.model('Class', ClassSchema);
