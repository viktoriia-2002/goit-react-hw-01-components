import PropTypes from 'prop-types';
import { ProfileEl, Description, Stats, ListItem, Quantity, Avatar } from './Profileitem.styled';

const ProfileItem = ({ data }) => {
  return (
    <ProfileEl className="profile">
      {data.map(profileItemEl => (
        <Description className="description" key={profileItemEl.username}>
          <Avatar
            src={profileItemEl.avatar}
            alt="User avatar"
            width="80px"
            height="80px"
            className="avatar"
          />
          <p className="name">{profileItemEl.username}</p>
          <p className="tag">{profileItemEl.tag}</p>
          <p className="location">{profileItemEl.location}</p>
        </Description>
      ))}

      <Stats className="stats">
        {data.map(profileItemEl => (
          <ListItem className="listItem" key={profileItemEl.username}>
            <span className="label">Followers</span>
            <Quantity className="quantity">{profileItemEl.stats.followers}</Quantity>
          </ListItem>
        ))}
        {data.map(profileItemEl => (
          <ListItem className="listItem" key={profileItemEl.username}>
            <span className="label">Views</span>
            <Quantity className="quantity">{profileItemEl.stats.views}</Quantity>
          </ListItem>
        ))}
        {data.map(profileItemEl => (
          <ListItem className="listItem" key={profileItemEl.username}>
            <span className="label">Likes</span>
            <Quantity className="quantity">{profileItemEl.stats.likes}</Quantity>
          </ListItem>
        ))}
      </Stats>
    </ProfileEl>
  );
};

ProfileItem.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      username: PropTypes.string.isRequired,
      tag: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      stats: PropTypes.shape({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired,
      }).isRequired,
    })
  ).isRequired,
};

export default ProfileItem;
