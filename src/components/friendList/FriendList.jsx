import React from 'react';
import FriendListItem from '../friendListItem';


const FriendList = ({friends}) => {
    return (
        <ul className="friend-list">
            <FriendListItem friends={friends}/>
      </ul>
    );
  };
  
  export default FriendList;
  