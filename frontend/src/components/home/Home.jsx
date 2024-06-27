import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';
import { FaGithub, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

function Home() {
  return (
    <div className="homepage-container">
      <br />
      <br />
      <h1>Welcome To CEN-FORM </h1>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="button-container">
        <button className="button">
          <Link to="/admin/login">Admin Login</Link>
        </button>
        <br />
        <br />
        <p>* This button is designed for officers who will be matching the survey.</p>
        <br />
        <br />
        <button className="button">
          <Link to="/user/login">User Login</Link>
        </button>
        <br />
        <br />
        <p>* This button is designed for General Public who will be going to fill their survey valid details.</p>
      </div>
      <select className="language-select">
        <option value="en">English</option>
        <option value="hi">Hindi</option>
        <option value="bn">Bangla</option>
        <option value="ta">Tamil</option>
        <option value="mr">Marathi</option>
        <option value="gu">Gujarati</option>
      </select>
      <footer className="footer">
        <div className="footer-icons">
          <a href="https://github.com/uniquecoderpriya"><FaGithub /></a>
          <a href="https://facebook.com"><FaFacebook /></a>
          <a href="https://instagram.com"><FaInstagram /></a>
          <a href="https://linkedin.com"><FaLinkedin /></a>
        </div>
        <p className="footer-content">@2024 CEN-FORM DIGITAL ERA</p>
      </footer>
    </div>
  );
}

export default Home;
