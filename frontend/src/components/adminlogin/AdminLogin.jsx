import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'; 
import './Adminlogin.css';

const AdminLogin = () => {
  const [formData, setFormData] = useState({
    officerId: '',
    password: ''
  });
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/admin/adlogin', formData);
      if (response.data.success) {
        navigate('/admin/dashboard'); 
      } else {
        setError(response.data.message);
      }
    } catch (error) {
      console.error('Error logging in:', error);
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <div className="outer-box">
      <div className="inner-box">
        <h1>Administrative Login Page</h1>
        <form onSubmit={handleSubmit} className="signup-body">
          <p>
            <label htmlFor="officerId">Officer ID:</label>
            <input
              type="text"
              id="officerId"
              name="officerId"
              value={formData.officerId}
              onChange={handleChange}
            />
          </p>
          <p>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </p>
          {error && <p className="error">{error}</p>} 
          <p>
            <button type="submit">Login</button>
          </p>
        </form>
        <div className="signup-footer">
          <p>
            Don't have an account? <Link to="/admin/signup">Create an account</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default AdminLogin;
