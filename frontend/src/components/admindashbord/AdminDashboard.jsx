import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import ReligionDistributionPage from './components/ReligionDistributionPage';
import CensusListPage from './components/CensusListPage';
import GenderDistributionPage from './components/GenderDistributionPage';
import Footer from './components/Footer';
import axios from 'axios';
import './styles/dashboardStyles.css';

const AdminDashboard = () => {
  const [currentPage, setCurrentPage] = useState('Home');
  const [apiData, setApiData] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:8080/api/total-count')
      .then(response => {
        setApiData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case 'Home':
        return <HomePage apiData={apiData} />;
      case 'ReligionDistribution':
        return <ReligionDistributionPage apiData={apiData} />;
      case 'CensusList':
        return <CensusListPage apiData={apiData} />;
      case 'GenderDistribution':
        return <GenderDistributionPage apiData={apiData} />;
      default:
        return null;
    }
  };

  return (
    <div className="container">
    <Navbar setCurrentPage={setCurrentPage} />
    {renderPage()}
  </div>
  );
}

export default AdminDashboard;
