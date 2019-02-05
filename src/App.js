import React, { Component } from 'react';
import './App.css';

import SearchForm from './SearchForm';
import LookupTable from './LookupTable';

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
        <h1>Lookup info on Github User</h1>

        <SearchForm onSearch={this.handleSearch} />

        {userName && (
          <div>
            <h2>Followers (and their Followers)</h2>
            <LookupTable userName={userName} />
          </div>
        )}
      </div>
    );
  }
}

export default App;
