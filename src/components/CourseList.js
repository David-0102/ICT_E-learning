import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CourseList = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        const fetchCourses = async () => {
            const response = await axios.get('/api/courses');
            setCourses(response.data);
        };
        fetchCourses();
    }, []);

    return (
        <div className="p-6">
            <h2 className="text-xl mb-4">Courses</h2>
            <ul>
                {courses.map(course => (
                    <li key={course._id} className="mb-2 p-4 border">{course.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default CourseList;