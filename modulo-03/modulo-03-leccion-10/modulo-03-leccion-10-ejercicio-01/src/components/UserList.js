import PropTypes from 'prop-types';
import UserItem from './UserItem';
import '../stylesheets/UserList.scss';

const UserList = (props) => {
  const usersList = props.list.map((user) => {
    return (
      <li className="users__list-item" key={user.id}>
        <UserItem user={user} />
      </li>
    );
  });

  return (
    <section className="users">
      <ul className="users__list">{usersList}</ul>
    </section>
  );
};

UserList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default UserList;
