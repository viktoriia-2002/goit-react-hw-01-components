import React from 'react';
import StatisticsItem from '../statisticsItem';

const Statistics = ({data}) => {
  return (
    <div>
      <StatisticsItem title="Upload stats" data={data} />
    </div>
  );
};

export default Statistics;
