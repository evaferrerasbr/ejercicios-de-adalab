import PropTypes from 'prop-types';
import UserItem from './UserItem';

const UserList = (props) => {
  const usersList = props.list.map((user) => {
    return (
      <li key={user.login.uuid}>
        <UserItem
          picture={user.picture.medium}
          name={user.name.first + user.name.last}
          city={user.location.city}
        />
      </li>
    );
  });

  return (
    <section className="users">
      <ul>{usersList}</ul>
    </section>
  );
};

UserList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default UserList;
