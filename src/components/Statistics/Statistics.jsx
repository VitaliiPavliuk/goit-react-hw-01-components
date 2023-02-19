import PropTypes from 'prop-types';
import {
  StatsHeader,
  StatsItem,
  StatsLabel,
  StatsList,
  StatsPercentage,
  StatsSection,
} from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <StatsSection>
      {title && <StatsHeader>{title}</StatsHeader>}
      <StatsList>
        {stats.map(({ id, label, percentage }) => (
          <StatsItem
            style={{
              backgroundColor:
                '#' + Math.floor(Math.random() * 16777215).toString(16),
            }}
            key={id}
          >
            <StatsLabel>{label}</StatsLabel>
            <StatsPercentage>{percentage}%</StatsPercentage>
          </StatsItem>
        ))}
      </StatsList>
    </StatsSection>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
