import { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import { getDataFromApi } from '../services/api';
import Filters from './Filters';
import MissingElement from './MissingElement';
import UserList from './UserList';
import UserDetail from './UserDetail';
import '../stylesheets/App.scss';

const App = () => {
  //state
  const [users, setUsers] = useState([]);
  const [nameFilter, setNameFilter] = useState('');
  const [genderFilter, setGenderFilter] = useState('all');
  const [citiesFilter, setCitiesFilter] = useState([]);

  //api
  useEffect(() => {
    getDataFromApi().then((data) => setUsers(data));
  }, []);

  //handler
  const handleFilter = (data) => {
    const { name, value, checked } = data;
    if (name === 'name') {
      setNameFilter(value);
    } else if (name === 'gender') {
      setGenderFilter(value);
    } else if (name === 'location') {
      if (checked === true) {
        const newCitiesFilter = [...citiesFilter, value];
        setCitiesFilter(newCitiesFilter);
      } else {
        const newCitiesFilter = citiesFilter.filter((city) => {
          return city !== value;
        });
        setCitiesFilter(newCitiesFilter);
      }
    }
  };

  //filters
  const filteredUsers = users
    .filter((user) => {
      return user.name.toLowerCase().includes(nameFilter.toLowerCase());
    })
    .filter((user) => {
      return genderFilter === 'all' || user.gender === genderFilter;
    })
    .filter((user) => {
      return citiesFilter.length === 0 || citiesFilter.includes(user.city);
    });

  //render
  const renderCities = () => {
    return users.map((user) => user.city);
  };

  const renderUserDetails = (props) => {
    const userId = props.match.params.userId;
    const foundUser = users.find((user) => {
      return user.id === userId;
    });
    if (foundUser !== undefined) {
      return <UserDetail user={foundUser} />;
    }
  };

  //jsx
  return (
    <div className="App">
      <main className="container">
        <Filters
          handleFilter={handleFilter}
          cities={renderCities()}
          value={nameFilter}
        />
        {filteredUsers.length === 0 ? (
          <MissingElement />
        ) : (
          <UserList list={filteredUsers} />
        )}
        <Switch>
          <Route path="/user/:userId" render={renderUserDetails} />
        </Switch>
      </main>
    </div>
  );
};

export default App;
