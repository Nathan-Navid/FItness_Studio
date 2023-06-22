const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { isEmail } = require('validator');
const { Schema } = mongoose;

const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, 'First name is required'],
        minlength: [2, 'First name must be at least 2 characters long']
    },
    lastName: {
        type: String,
        required: [true, 'Last name is required'],
        minlength: [2, 'Last name must be at least 2 characters long']
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: [true, 'Email already exists'],
        validate: [isEmail, "Please enter a valid email"]
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
        minlength: [3, 'Password must be at least 3 characters long']
    },
    birthday: {
        type: Date,
        required: [true, 'Birthday is required'],
    },
    // bmi:{
    //     type:Number,
    //     required: [true, 'BMI is required'],
    // },
    role: {
        type: String,
        enum: ['Admin', 'Student', 'PT'],
        require: true
    },
    class: [{ type: Schema.Types.ObjectId, ref: 'Class' }],

}, { timestamps: true });

// Middleware to create virtual field confirm password
UserSchema.virtual('confirmPassword')
    .get(() => this._confirmPassword)
    .set((value) => this._confirmPassword = value);

// Middle ware to validate the password and confirm password match
UserSchema.pre('validate', function (next) {
    if (this.password !== this.confirmPassword) {
        this.invalidate('confirmPassword', 'Password must match confirm password');
    }
    next();
});

// Middleware to hash the password
UserSchema.pre('save', function (next) {
    bcrypt.hash(this.password, 10)
        .then(hash => {
            this.password = hash;
            next();
        });
}
);

module.exports = mongoose.model('User', UserSchema);


