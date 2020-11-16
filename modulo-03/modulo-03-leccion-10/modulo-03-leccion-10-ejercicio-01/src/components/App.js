import React from 'react';
import { fetchSearch } from '../components/services/SearchService';
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
    return <div className="App"></div>;
  }
}

export default App;
