const express = require('express');
const { createCourse, getCourses, updateCourse, deleteCourse } = require('../controllers/courseController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/', authMiddleware, createCourse); // Admin only
router.get('/', getCourses);
router.put('/:id', authMiddleware, updateCourse); // Admin only
router.delete('/:id', authMiddleware, deleteCourse); // Admin only

module.exports = router;