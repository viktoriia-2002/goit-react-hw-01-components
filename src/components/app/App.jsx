import Profile from 'components/profile';
import Statistics from 'components/statistics';
import FriendList from 'components/friendList';
import Transaction from 'components/transaction';

const App = () => {
  return (
    <div>
      <Profile />
      <Statistics />
      <FriendList />
      <Transaction/>
    </div>
  );
};

export { App };
