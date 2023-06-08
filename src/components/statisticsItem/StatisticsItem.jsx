import PropTypes from 'prop-types';
import { Statistics, Title, Stats, Item} from './StatisticsItem.styled';

const StatisticsItem = ({ title, data }) => {
  return (
    <Statistics className="statistics">
      <Title className="title">{title}</Title>

      <Stats className="stat-list">
        {data.map(statisticEl => (
          <Item className="item" key = {statisticEl.id}>
            <span className="label">{statisticEl.label}</span>
            <span className="percentage">{statisticEl.percentage}</span>
          </Item>
        ))}
      </Stats>
    </Statistics>
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
