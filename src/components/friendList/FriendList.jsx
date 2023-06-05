import React from 'react';
import FriendListItem from '../friendListItem';
import friends from '../friends.json';


const FriendList = () => {
    return (
        <ul className="friend-list">
            <FriendListItem data={friends}/>
      </ul>
    );
  };
  
  export default FriendList;
  