import Profile from 'components/profile';
import Statistics from 'components/statistics';
import FriendList from 'components/friendList';
import Transaction from 'components/transaction';

import user from '../user.json';
import friends from '../friends.json';
import data from '../data.json';
import transactions from '../transactions.json';


const App = () => {
  return (
    <div>
      <Profile  user={user}/>
      <Statistics data={data} />
      <FriendList friends={friends}/>
      <Transaction transactions={transactions}/>
    </div>
  );
};

export { App };
