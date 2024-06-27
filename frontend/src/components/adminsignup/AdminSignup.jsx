import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'; 
import './Adminsignup.css';

const AdminSignup = () => {
  const [formData, setFormData] = useState({
    officerId: '',
    aadharNumber: '',
    password: ''
  });
  const navigate = useNavigate(); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/admin/adsignup', formData);
      if (response.data.success) {
        navigate('/admin/login');
      } else {
        console.error('Signup failed:', response.data.message);
      }
    } catch (error) {
      console.error('Error occurred during signup:', error);
    }
  };

  return (
    <div className="outer-box">
      <div className="inner-box">
        <h2>Administrative Signup Page</h2>
        <form onSubmit={handleSubmit} className="signup-body">
          <div>
            <label htmlFor="officerId">Officer ID:</label>
            <input
              type="text"
              id="officerId"
              name="officerId"
              value={formData.officerId}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="aadharNumber">Aadhar Number:</label>
            <input
              type="text"
              id="aadharNumber"
              name="aadharNumber"
              value={formData.aadharNumber}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <button type="submit" style={{ marginTop: '20px' }}>Sign Up</button>
        </form>
        <p className="signup-footer">
          Already have an account? <Link to="/admin/login">Log in here</Link>
        </p>
      </div>
    </div>
  );
}

export default AdminSignup;
