import React from 'react';
import StatisticsItem from '../statisticsItem';
import data from '../data.json';

const Statistics = () => {
  return (
    <div>
      <StatisticsItem title="Upload stats" data={data} />
    </div>
  );
};

export default Statistics;
