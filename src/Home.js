import React, { Component } from 'react';
import { withRouter } from "react-router";
import { Switch, Route, Link } from "react-router-dom";

import NavLinks from "./NavLinks";
import SearchForm from './SearchForm';
import UserInfo from './UserInfo';
import Followers from './Followers';

class Home extends Component {
  constructor(props) {
    super(props);

    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(userName) {
    const { history } = this.props;
    history.push(`/${userName}`);
  }

  render() {
    return (
      <div className="App">
        <nav className="navbar navbar-dark fixed-top bg-dark navbar-expand">

          <Link className="navbar-brand" to="/">GitHub User Lookup</Link>

          <div className="collapse navbar-collapse">
            <Route path="/:userName" component={NavLinks} />
          </div>

          <SearchForm onSearch={this.handleSearch} />
        </nav>

        <Switch>
          <Route exact path="/:userName" component={UserInfo} />
          <Route path="/:userName/followers" component={Followers} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(Home);
