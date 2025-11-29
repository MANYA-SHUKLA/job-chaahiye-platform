const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    userType: {
        type: String,
        enum: ['employee', 'employer'],
        required: true
    },
    // Common fields
    name: { type: String },
    email: { type: String, unique: true, sparse: true }, // Employer uses email
    phone: { type: String, unique: true, sparse: true }, // Employee uses phone
    password: { type: String }, // Employer uses password

    // Employee specific
    profile: {
        skills: [String],
        experience: String,
        education: String,
        resume: String,
        location: String,
        company: String, // Current Company
        position: String // Current Position
    },

    // Employer specific
    company: {
        name: String,
        description: String,
        website: String,
        logo: String,
        location: String
    },

    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('User', userSchema);
