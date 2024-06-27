import React from 'react';
import { PieChart, Pie, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts';
import '../styles/religionDistributionPageStyles.css';

const ReligionDistributionPage = ({ apiData }) => {
  const { religionDistribution } = apiData;
  const data = Object.entries(religionDistribution).map(([religion, count]) => ({
    religion,
    count,
  }));
  const colors = ['#FF5733', '#33FF57', '#3357FF', '#FF57FF', '#57FF33', '#5733FF'];

  return (
    <div className="container">
      <h2>Religion Distribution</h2>
      <ResponsiveContainer width="100%" height={400}>
        <PieChart>
          <Pie
            dataKey="count"
            data={data}
            nameKey="religion"
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            label
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
      <div className="religion-info">
        <p>
          Christianity is one of the major religions in the world, with adherents across various regions and
          denominations. In the census data, Christian population accounts for {religionDistribution['Christian']} individuals.
        </p>
        <p>
          Judaism, another significant religion, is represented by {religionDistribution['Jewish']} individuals in the census.
        </p>
        <p>
          The census data also includes {religionDistribution['undefined']} individuals with unspecified religious affiliations.
        </p>
      </div>
    </div>
  );
};

export default ReligionDistributionPage;
