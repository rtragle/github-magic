import React, { Component } from 'react';
import './App.scss';

import SearchForm from './SearchForm';
import UserInfo from './UserInfo';
import Followers from './Followers';

// TODO: Use react-router
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: null
    };

    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(userName) {
    this.setState({ userName });
  }

  render() {
    const { userName } = this.state;

    return (
      <div className="App">
        <nav className="navbar navbar-dark fixed-top bg-dark">
          <a className="navbar-brand" href="/">GitHub User Lookup</a>
          <SearchForm onSearch={this.handleSearch} />
        </nav>

        {userName && (
          <UserInfo userName={userName} />
        )}

        {userName && (
          <Followers userName={userName} />
        )}
      </div>
    );
  }
}

export default App;
