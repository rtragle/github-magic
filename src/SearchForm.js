import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

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
      <form className="form-inline mt-2 mt-md-0" onSubmit={this.handleSearchClick}>
        <input className="form-control mr-sm-2" id="userName" type="text" placeholder="Username" value={userName} onChange={this.handleUserNameChange} />
        <button className="btn btn-outline-success my-2" type="submit">Lookup</button>
      </form>
    );
  }
}

SearchForm.propTypes = {
  onSearch: PropTypes.func.isRequired
};

export default SearchForm;
