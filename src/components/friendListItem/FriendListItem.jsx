import React from 'react';
import PropTypes from 'prop-types';

const FriendListItem = ({ data }) => {
    return (
      <ul>
        {data.map((friendItemEl) => (
          <li key={friendItemEl.id} className="item">
            <span className="status"></span>
            <img className="avatar" src={friendItemEl.avatar} alt="User avatar" width="48" />
            <p className="name">{friendItemEl.name}</p>
          </li>
        ))}
      </ul>
    );
  };

  FriendListItem.propTypes = {
    data: PropTypes.arrayOf(
      PropTypes.shape({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
        id: PropTypes.number.isRequired,
      })
    ).isRequired,
  };
  
export default FriendListItem;
