import React, { useState } from 'react';
import './RegistrationForm.css';

const RegistrationForm = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        rollNo: '',
        email: '',
        gender: '',
        course: '',
        agree: false
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Submitted:', formData);
        alert(`Registration Successful for ${formData.fullName}`);
    };

    return (
        <div className="registration-container">
            <form className="registration-form" onSubmit={handleSubmit}>
                <h2>Student Registration</h2>

                <div className="form-group">
                    <label htmlFor="fullName">Full Name</label>
                    <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="rollNo">Roll Number</label>
                    <input
                        type="text"
                        id="rollNo"
                        name="rollNo"
                        value={formData.rollNo}
                        onChange={handleChange}
                        placeholder="Enter your roll number"
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Gender</label>
                    <div className="radio-group">
                        <label className="radio-label">
                            <input
                                type="radio"
                                name="gender"
                                value="Male"
                                checked={formData.gender === 'Male'}
                                onChange={handleChange}
                                required
                            />
                            Male
                        </label>
                        <label className="radio-label">
                            <input
                                type="radio"
                                name="gender"
                                value="Female"
                                checked={formData.gender === 'Female'}
                                onChange={handleChange}
                            />
                            Female
                        </label>
                        <label className="radio-label">
                            <input
                                type="radio"
                                name="gender"
                                value="Other"
                                checked={formData.gender === 'Other'}
                                onChange={handleChange}
                            />
                            Other
                        </label>
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="course">Course</label>
                    <select
                        id="course"
                        name="course"
                        value={formData.course}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select a course</option>
                        <option value="React Development">React Development</option>
                        <option value="Node.js Backend">Node.js Backend</option>
                        <option value="MERN Stack">MERN Stack</option>
                        <option value="Python Data Science">Python Data Science</option>
                        <option value="Java Full Stack">Java Full Stack</option>
                    </select>
                </div>

                <div className="form-group checkbox-group">
                    <label className="checkbox-label">
                        <input
                            type="checkbox"
                            name="agree"
                            checked={formData.agree}
                            onChange={handleChange}
                            required
                        />
                        I agree to the terms and conditions
                    </label>
                </div>

                <button type="submit" className="submit-btn">Register Now</button>
            </form>
        </div>
    );
};

export default RegistrationForm;
