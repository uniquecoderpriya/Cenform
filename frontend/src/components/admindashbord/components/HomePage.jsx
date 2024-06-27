import React from 'react';
import '../styles/home.css';

const HomePage = ({ apiData }) => {
  if (!apiData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <h2>Indian Census Information</h2>
      <div>
        <p><span className="total-count">{apiData?.totalCount}</span></p>
        <p>Male Count: {apiData?.maleCount}</p>
        <p>Female Count: {apiData?.femaleCount}</p>
        <p>Other Gender Count: {apiData?.otherGenderCount}</p>
      </div>
      <table>
        <tbody>
          <tr>
            <td>Sex Ratio:</td>
            <td>{apiData?.sexRatio}</td>
          </tr>
          <tr>
            <td>Average Age:</td>
            <td>{apiData?.averageAge}</td>
          </tr>
          <tr>
            <td>Minimum Age:</td>
            <td>{apiData?.minAge}</td>
          </tr>
          <tr>
            <td>Maximum Age:</td>
            <td>{apiData?.maxAge}</td>
          </tr>
        </tbody>
      </table>
     
    </div>
  );
}

export default HomePage;
