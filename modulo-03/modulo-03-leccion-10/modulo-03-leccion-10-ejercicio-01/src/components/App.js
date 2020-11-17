import React from 'react';
import { fetchSearch } from '../components/services/SearchService';
import Header from './Header';
import Filters from './Filters';
import UserList from './UserList';
import ProfilesData from '../data/profilesData.json';
import '../stylesheets/App.scss';

class App extends React.Component {
  constructor() {
    super();
    this.fetchNewSearch = this.fetchNewSearch.bind(this);
    this.state = {
      usersData: '',
    };
  }

  fetchNewSearch() {
    fetchSearch().then((data) => {
      this.setState({
        usersData: data.results,
      });
    });
  }

  render() {
    const handleFilter = () => {};

    return (
      <div className="App">
        <Header number="3.10" lesson="Arquitectura" title="LinkedIn" />
        <main className="container">
          <Filters handleFilter={handleFilter} />
          <UserList list={ProfilesData} />
        </main>
      </div>
    );
  }
}

export default App;
