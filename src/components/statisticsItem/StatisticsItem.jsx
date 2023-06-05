import PropTypes from 'prop-types';

const StatisticsItem = ({ title, data }) => {
  return (
    <section className="statistics">
      <h2 className="title">{title}</h2>

      <ul className="stat-list">
        {data.map(statisticEl => (
          <li className="item" key = {statisticEl.id}>
            <span className="label">{statisticEl.label}</span>
            <span className="percentage">{statisticEl.percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

StatisticsItem.propTypes = {
  title: PropTypes.string,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};

StatisticsItem.defaultProps = {
  title: '',
};

export default StatisticsItem;
