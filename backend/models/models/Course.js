const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    instructor: { type: String, required: true },
    materials: [{ type: String }], // Array of file links
}, { timestamps: true });

module.exports = mongoose.model('Course', courseSchema);