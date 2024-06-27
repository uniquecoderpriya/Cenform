import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import '../styles/genderDistributionPageStyles.css';

const GenderDistributionPage = ({ apiData }) => {
  const { maleCount, femaleCount, otherGenderCount } = apiData;

  const data = [
    { gender: 'Male', count: maleCount },
    { gender: 'Female', count: femaleCount },
    { gender: 'Other', count: otherGenderCount },
  ];


  const colors = ['#8884d8', '#82ca9d', '#ffc658'];

  return (
    <div className="container">
      <h2>Gender Distribution</h2>
      <div className="chart-container">
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={data}>
            <XAxis dataKey="gender" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="count" name="Male" fill={colors[0]} />
            <Bar dataKey="count" name="Female" fill={colors[1]} />
            <Bar dataKey="count" name="Other" fill={colors[2]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="gender-info">
        <p>
          In the gender distribution data, there are {maleCount} males, {femaleCount} females, and {otherGenderCount} individuals with other gender identities.
        </p>
        <p>
          Gender distribution is an essential aspect of demographic analysis, providing insights into population dynamics and social trends.
        </p>
      </div>
    </div>
  );
};

export default GenderDistributionPage;
