import React, { PureComponent } from 'react';
// import PropTypes from 'prop-types';

import { withRouter } from "react-router";

class UserInfo extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isLoadingInfo: true,
      info: {}
    };

    this.fetchUserInfo = this.fetchUserInfo.bind(this);
  }

  componentDidMount() {
    this.fetchUserInfo();
  }

  componentDidUpdate(prevProps) {
    const { userName: prevUserName } = prevProps.match.params;

    if (this.props.match.params.userName !== prevUserName) {
      this.fetchUserInfo();
    }
  }

  fetchUserInfo() {
    const { userName } = this.props.match.params;

    this.setState({ isLoadingInfo: true }, () => {
      fetch(`https://api.github.com/users/${userName}`)
        .then(res => res.json())
        .then(info => this.setState({ isLoadingInfo: false, info }));
    });
  }

  render() {
    const { userName } = this.props.match.params;
    const { isLoadingInfo, info } = this.state;

    if (isLoadingInfo) {
      return null; // TODO: spinner?
    }

    return (
      <div>
        <h2>User Info -- {userName}</h2>
        <img src={info.avatar_url} alt="avatar" />
      </div>
    );
  }
}

UserInfo.propTypes = {
};

export default withRouter(UserInfo);
