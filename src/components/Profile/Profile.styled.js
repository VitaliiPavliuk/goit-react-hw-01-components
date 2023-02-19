import styled from 'styled-components';

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
  border: 1px solid gray;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5);
`;

export const ProfileDesc = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ProfileAvatar = styled.img`
  width: 300px;
  margin-top: 50px;
`;

export const DescName = styled.p`
  margin-top: 50px;
  font-weight: 700;
  font-size: 60px;
`;

export const Desc = styled.p`
  margin-top: 30px;
  color: gray;
`;

export const Stats = styled.ul`
  display: flex;
`;

export const StatsItem = styled.li`
  width: 150px;
  height: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.1);
  border-top: 1px solid gray;
  border-right: 1px solid gray;

  &:last-child {
    border-right: none;
  }
`;

export const StatsLabel = styled.span`
  font-size: 20px;
`;

export const StatsQnt = styled.span`
  font-size: 30px;
  font-weight: 700;
`;
