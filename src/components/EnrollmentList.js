import React, { useEffect, useState } from 'react';
import axios from 'axios';

const EnrollmentList = () => {
    const [enrollments, setEnrollments] = useState([]);

    useEffect(() => {
        const fetchEnrollments = async () => {
            const studentId = 'YOUR_STUDENT_ID'; // Replace with the actual student ID or retrieve from context
            const response = await axios.get(`/api/enrollments/${studentId}`);
            setEnrollments(response.data);
        };
        fetchEnrollments();
    }, []);

    return (
        <div className="p-6">
            <h2 className="text-xl mb-4">My Enrollments</h2>
            <ul>
                {enrollments.map(enrollment => (
                    <li key={enrollment._id} className="mb-2 p-4 border">{enrollment.course_id.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default EnrollmentList;