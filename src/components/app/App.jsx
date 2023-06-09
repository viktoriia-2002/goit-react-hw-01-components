import Profile from 'components/profile';
import Statistics from 'components/statistics';
import FriendList from 'components/friendList';
import Transaction from 'components/transaction';

import user from '../user.json';

const App = () => {
  return (
    <div>
      <Profile  user={user}/>
      <Statistics />
      <FriendList />
      <Transaction/>
    </div>
  );
};

export { App };
