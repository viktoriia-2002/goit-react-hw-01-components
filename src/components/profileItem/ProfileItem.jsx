import PropTypes from 'prop-types';
import user from '../user.json';
import { Description } from './Profileitem.styled';

const ProfileItem = ({ username, tag, location, avatar, stats }) => {
  return (
    <div className="profile">
      <Description className="description">
        <img
          src={avatar}
          alt="User avatar" width = "80px" height = "80px"
          className="avatar"
        />
        <p className="name">{username}</p>
        <p className="tag">{tag}</p>
        <p className="location">{location}</p>
      </Description>

      <ul className="stats">
        <li>
          <span className="label">Followers</span>
          <span className="quantity">{stats.followers}</span>
        </li>
        <li>
          <span className="label">Views</span>
          <span className="quantity">{stats.views}</span>
        </li>
        <li>
          <span className="label">Likes</span>
          <span className="quantity">{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

const Profile = () => {
    const { username, tag, location, avatar, stats } = user;
  
    return <ProfileItem
      username={username}
      tag={tag}
      location={location}
      avatar={avatar}
      stats={stats}
    />;
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
