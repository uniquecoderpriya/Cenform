import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import axios from 'axios';
import './SignupForm.css';

const UserSignup = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [aadharNo, setAadharNo] = useState('');
  const [aadharError, setAadharError] = useState('');
  const [submitted, setSubmitted] = useState(false);
  
  const navigate = useNavigate();  

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/user/signup', {
        fullName,
        email,
        password,
        aadharNo
      });
      if (response.data.success) {
        setSubmitted(true);
        setTimeout(() => {
          navigate('/user/login'); 
        }, 2000);
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
        <header className="sign-up">
          <h1>Signup</h1>
          <p>It just takes 30 seconds</p>
        </header>
        <main className="signup-body">
          <form onSubmit={handleSubmit} name="google-sheet">
            <p>
              <label htmlFor="fullname">Full Name</label>
              <input
                type="text"
                id="fullname"
                name="Name"
                placeholder="Priya Ray"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
              />
            </p>
            <p>
              <label htmlFor="email"> Email</label>
              <input
                type="email"
                id="email"
                name="Email"
                placeholder="raypriya1009@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </p>
            <p>
              <label htmlFor="password">New Password</label>
              <input
                type="password"
                id="password"
                name="Password"
                placeholder="at least 8 characters"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </p>
            <p>
              <label htmlFor="aadhar">Aadhar Card No</label>
              <input
                type="text"
                id="aadhar"
                name="Aadhar"
                placeholder="1234 5678 9012"
                value={aadharNo}
                onChange={(e) => {
                  setAadharNo(e.target.value);
                  setAadharError('');
                }}
                required
              />
              {aadharError && <span className="error-message">{aadharError}</span>}
            </p>
            <p>
              <input type="submit" value="Create Account" />
            </p>
          </form>
          {submitted && <p className="success-message">Thanks for registering! Successfully saved your data...</p>}
          <p>
            Already have an account? <Link to="/user/login"> Log in here</Link>
          </p>
        </main>
      </div>
      <div className="circle c1"></div>
      <div className="circle c2"></div>
    </div>
  );
}

export default UserSignup;
