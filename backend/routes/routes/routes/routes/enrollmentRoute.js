const express = require('express');
const { enrollStudent, getEnrollmentsByStudent } = require('../controllers/enrollmentController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/', enrollStudent);
router.get('/:student_id', getEnrollmentsByStudent);

module.exports = router;