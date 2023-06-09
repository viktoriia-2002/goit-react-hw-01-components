import PropTypes from 'prop-types';
import {
  ProfileEl,
  Description,
  Stats,
  ListItem,
  Quantity,
  Avatar,
} from './Profileitem.styled';

const ProfileItem = ({ user }) => {
  return (
    <ProfileEl className="profile">
      <Description className="description">
        <Avatar
          src={user.avatar}
          alt="User avatar"
          width="80px"
          height="80px"
          className="avatar"
        />
        <p className="name">{user.username}</p>
        <p className="tag">{user.tag}</p>
        <p className="location">{user.location}</p>
      </Description>

      <Stats className="stats">
        <ListItem className="listItem">
          <span className="label">Followers</span>
          <Quantity className="quantity">{user.stats.followers}</Quantity>
        </ListItem>

        <ListItem className="listItem">
          <span className="label">Views</span>
          <Quantity className="quantity">{user.stats.views}</Quantity>
        </ListItem>

        <ListItem className="listItem">
          <span className="label">Likes</span>
          <Quantity className="quantity">{user.stats.likes}</Quantity>
        </ListItem>
      </Stats>
    </ProfileEl>
  );
};

ProfileItem.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }).isRequired,
  }),
};

export default ProfileItem;
