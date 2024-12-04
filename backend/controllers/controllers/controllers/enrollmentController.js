const Enrollment = require('../models/Enrollment');

exports.enrollStudent = async (req, res) => {
    const { student_id, course_id } = req.body;
    const enrollment = new Enrollment({ student_id, course_id });
    await enrollment.save();
    res.status(201).json(enrollment);
};

exports.getEnrollmentsByStudent = async (req, res) => {
    const enrollments = await Enrollment.find({ student_id: req.params.student_id }).populate('course_id');
    res.json(enrollments);
};