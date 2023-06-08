import PropTypes from 'prop-types';
import user from '../user.json';
import { ProfileEl, Description, Stats, ListItem, Quantity, Avatar} from './Profileitem.styled';

const ProfileItem = ({ username, tag, location, avatar, stats }) => {
  return (
    <ProfileEl className="profile">
      <Description className="description">
        <Avatar
          src={avatar}
          alt="User avatar"
          width="80px"
          height="80px"
          className="avatar"
        />
        <p className="name">{username}</p>
        <p className="tag">{tag}</p>
        <p className="location">{location}</p>
      </Description>

      <Stats className="stats">
        <ListItem className="listItem">
          <span className="label">Followers</span>
          <Quantity className="quantity">{stats.followers}</Quantity>
        </ListItem>
        <ListItem className="listItem">
          <span className="label">Views</span>
          <Quantity className="quantity">{stats.views}</Quantity>
        </ListItem>
        <ListItem className="listItem">
          <span className="label">Likes</span>
          <Quantity className="quantity">{stats.likes}</Quantity>
        </ListItem>
      </Stats>
    </ProfileEl>
  );
};

const Profile = () => {
  const { username, tag, location, avatar, stats } = user;

  return (
    <ProfileItem
      username={username}
      tag={tag}
      location={location}
      avatar={avatar}
      stats={stats}
    />
  );
};

ProfileItem.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};

export default Profile;
