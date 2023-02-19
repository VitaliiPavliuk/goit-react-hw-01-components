import PropTypes from 'prop-types';
import {
  Desc,
  DescName,
  ProfileAvatar,
  ProfileContainer,
  ProfileDesc,
  Stats,
  StatsItem,
  StatsLabel,
  StatsQnt,
} from './Profile.styled';

export const Profile = ({
  profile: { username, tag, location, avatar, stats },
}) => {
  return (
    <ProfileContainer>
      <ProfileDesc>
        <ProfileAvatar src={avatar} alt="User avatar" />
        <DescName>{username}</DescName>
        <Desc>@{tag}</Desc>
        <Desc>{location}</Desc>
      </ProfileDesc>

      <Stats>
        <StatsItem>
          <StatsLabel>Followers</StatsLabel>
          <StatsQnt>{stats.followers}</StatsQnt>
        </StatsItem>
        <StatsItem>
          <StatsLabel>Views</StatsLabel>
          <StatsQnt>{stats.views}</StatsQnt>
        </StatsItem>
        <StatsItem>
          <StatsLabel>Likes</StatsLabel>
          <StatsQnt>{stats.likes}</StatsQnt>
        </StatsItem>
      </Stats>
    </ProfileContainer>
  );
};

Profile.propTypes = {
  profile: PropTypes.shape({
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};
