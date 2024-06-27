import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/tableStyles.css';

const AllCensusData = () => {
  const [censusData, setCensusData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/get-alldata');
        setCensusData(response.data.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container">
      <h2>All Census Data</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Family Members</th>
            <th>Children</th>
          </tr>
        </thead>
        <tbody>
          {censusData.map((data) => (
            <tr key={data._id}>
              <td>{`${data.headMember.firstName} ${data.headMember.lastName}`}</td>
              <td>{data.headMember.age}</td>
              <td>{data.headMember.gender}</td>
              <td>{data.familyMembers.map(member => `${member.firstName} ${member.lastName} (${member.age}, ${member.gender})`).join(', ')}</td>
              <td>{data.children.map(child => `${child.firstName} ${child.lastName} (${child.age}, ${child.gender})`).join(', ')}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllCensusData;
