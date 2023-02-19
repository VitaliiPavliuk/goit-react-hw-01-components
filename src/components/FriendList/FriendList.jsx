import PropTypes from 'prop-types';

import { FriendListItem } from '../FriendListItem/FriendListItem';
import { FriendsItem, FriendsList } from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <FriendsList>
      {friends.map(friend => (
        <FriendsItem key={friend.id}>
          <FriendListItem friend={friend} />
        </FriendsItem>
      ))}
    </FriendsList>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.number.isRequired }).isRequired
  ).isRequired,
};
