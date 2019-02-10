import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

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

  componentDidUpdate({ userName: oldUserName }) {
    if (this.props.userName !== oldUserName) {
      this.fetchUserInfo();
    }
  }

  fetchUserInfo() {
    const { userName } = this.props;

    this.setState({ isLoadingInfo: true }, () => {
      fetch(`https://api.github.com/users/${userName}`)
        .then(res => res.json())
        .then(info => this.setState({ isLoadingInfo: false, info }));
    });
  }

  render() {
    const { userName } = this.props;
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
  userName: PropTypes.string.isRequired
};

export default UserInfo;
