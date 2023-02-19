import styled from 'styled-components';

export const FriendStatus = styled.span`
  display: block;
  width: 20px;
  height: 20px;
  border-radius: 50%;

  &.online {
    background-color: green;
  }

  &.offline {
    background-color: red;
  }
`;

export const FriendAvatar = styled.img`
  width: 48px;
`;

export const FriendName = styled.p`
  /* color: blue; */
`;
