import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import './SearchForm.css';

class SearchForm extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      userName: ''
    };

    this.handleUserNameChange = this.handleUserNameChange.bind(this);
    this.handleSearchClick = this.handleSearchClick.bind(this);
  }

  handleUserNameChange(e) {
    e.preventDefault();

    this.setState({ userName: e.target.value });
  }

  handleSearchClick(e) {
    const { onSearch } = this.props;
    const { userName } = this.state;

    e.preventDefault();
    onSearch && onSearch(userName);
  }

  render() {
    const { userName } = this.state;

    return (
      <form className="search-form" onSubmit={this.handleSearchClick}>
        <input className="search-form__input" id="userName" type="text" value={userName} onChange={this.handleUserNameChange} />

        <button type="submit">Lookup</button>
      </form>
    );
  }
}

SearchForm.propTypes = {
  onSearch: PropTypes.func.isRequired
};

export default SearchForm;
