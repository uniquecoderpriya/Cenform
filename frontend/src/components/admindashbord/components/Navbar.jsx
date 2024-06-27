import React from 'react';
import '../styles/navbarStyles.css'; 

const Navbar = ({ setCurrentPage }) => {
  const pages = ['Home', 'ReligionDistribution', 'CensusList', 'GenderDistribution'];

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <nav className="navbar">
      <h1>Admin Dashboard</h1>
      <ul>
        {pages.map(page => (
          <li key={page}>
            <button onClick={() => handlePageChange(page)}>{page}</button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
