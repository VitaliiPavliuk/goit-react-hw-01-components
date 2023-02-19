import styled from 'styled-components';

export const StatsSection = styled.section`
  border: 1px solid grey;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5);
`;

export const StatsHeader = styled.h2`
  text-align: center;
  margin-top: 50px;
  margin-bottom: 50px;
  text-transform: uppercase;
  font-size: 40px;
`;

export const StatsList = styled.ul`
  display: flex;
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  width: 150px;
  height: 150px;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

export const StatsLabel = styled.span``;

export const StatsPercentage = styled.span``;
