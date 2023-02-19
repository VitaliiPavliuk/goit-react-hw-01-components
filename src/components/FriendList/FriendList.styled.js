import styled from 'styled-components';

export const FriendsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 400px;
`;

export const FriendsItem = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;
  border: 1px solid gray;
  border-radius: 5px;
  padding: 20px;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5);
`;
