
import React from 'react';
import PropTypes from 'prop-types';
import {
  List,
  ListItem,
  SpanItem,
  NameItem,
  Status,
} from './FriendListItem.styled';

const FriendListItem = ({ friends }) => {
  return (
    <List>
      {friends.map(friendItemEl => (
        <ListItem key={friendItemEl.id} className="item">
          <Status className={friendItemEl.isOnline ? 'active' : 'inactive'} />{' '}
          <SpanItem className="status" />
          <img
            className="avatar"
            src={friendItemEl.avatar}
            alt="User avatar"
            width="48"
          />
          <NameItem className="name">{friendItemEl.name}</NameItem>
        </ListItem>
      ))}
    </List>
  );
};

FriendListItem.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default FriendListItem;
///