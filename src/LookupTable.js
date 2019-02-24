import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import ReactTable from "react-table";
import "react-table/react-table.css";

class LookupTable extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      data: []
    };

    this.fetchUser = this.fetchUser.bind(this);
  }

  componentDidMount() {
    this.fetchUser();
  }

  componentDidUpdate(prevProps) {
    const { userName: prevUserName } = this.props;

    if (this.props.userName !== prevUserName) {
      this.fetchUser();
    }
  }

  fetchUser() {
    const { userName } = this.props;

    fetch(`https://api.github.com/users/${userName}/followers`)
      .then(res => res.json())
      .then(data => this.setState({ data }));
  }

  render() {
    const { data } = this.state;

    return (
      <div>
        <ReactTable
          className="-striped -highlight"
          minRows={0}
          columns={[
            {
              Header: 'Login',
              accessor: 'login',
              sortable: true
            },
            {
              Header: 'URL',
              accessor: 'html_url',
              Cell: row => <a href={row.value}>{row.value}</a>
            }
          ]}
          data={data}
          SubComponent={({ original: { login: userName } }) => (
            <div style={{ padding: '20px' }}>
              <h3>{userName}&#39;s followers</h3>
              <LookupTable userName={userName} />
            </div>
          )}
        />
      </div>
    );
  }
}

LookupTable.propTypes = {
  userName: PropTypes.string.isRequired
};

export default LookupTable;
