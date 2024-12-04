const Course = require('../models/Course');

exports.createCourse = async (req, res) => {
    const course = new Course(req.body);
    await course.save();
    res.status(201).json(course);
};

exports.getCourses = async (req, res) => {
    const courses = await Course.find();
    res.json(courses);
};

exports.updateCourse = async (req, res) => {
    const course = await Course.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(course);
};

exports.deleteCourse = async (req, res) => {
    await Course.findByIdAndDelete(req.params.id);
    res.status(204).send();
};