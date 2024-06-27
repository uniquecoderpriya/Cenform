// AdminPage.js
import React, { useState } from 'react';
import Navbar from '../components/AdminDashboard/Navbar';
import Sidebar from '../components/AdminDashboard/Sidebar';
import GenderDistribution from '../components/AdminDashboard/GenderDistribution';
import CasteDistribution from '../components/AdminDashboard/CasteDistribution';
import ReligionDistribution from '../components/AdminDashboard/ReligionDistribution';
import AgeDistribution from '../components/AdminDashboard/AgeDistribution';
import CensusList from '../components/AdminDashboard/CensusList';
import HomePage from './HomePage';

const AdminPage = () => {
  const [content, setContent] = useState('home'); 
  const handleItemClick = (item) => {
    setContent(item);
  };
  const renderContent = () => {
    switch (content) {
      case 'home':
        return <HomePage />;
      case 'gender':
        return <GenderDistribution />;
      case 'caste':
        return <CasteDistribution />;
      case 'religion':
        return <ReligionDistribution />;
      case 'age':
        return <AgeDistribution />;
      case 'census':
        return <CensusList />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div>
      <Navbar />
      <Sidebar onItemClick={handleItemClick} />
      <div className="content">{renderContent()}</div>
    </div>
  );
};

export default AdminPage;
