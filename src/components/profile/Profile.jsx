import ProfileItem from '../profileItem';
import user from '../user.json';

const Profile = () => {
  return <ProfileItem data={[user]} />;
};

export default Profile;
