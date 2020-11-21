import React from 'react';
import api from '../services/api';
import Filters from './Filters';
import UserList from './UserList';
import '../stylesheets/App.scss';

class App extends React.Component {
  constructor() {
    super();
    this.serverCall = this.serverCall.bind(this);
    this.state = {
      usersData: [],
    };
  }

  //API
  //this function contains the call to server and will be called in componentDidMount()
  serverCall() {
    api.getDataFromApi().then((data) => {
      this.setState({
        usersData: data,
      });
    });
  }

  componentDidMount() {
    this.serverCall();
  }

  //RENDER
  render() {
    const handleFilter = () => {};

    return (
      <div className="App">
        <main className="container">
          <Filters handleFilter={handleFilter} />
          <UserList list={this.state.usersData} />
        </main>
      </div>
    );
  }
}

export default App;
