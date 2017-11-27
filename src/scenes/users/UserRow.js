import React, { Component } from 'react';

import Avatar from 'material-ui/Avatar';
import {ListItem} from 'material-ui/List';

import './UserRow.css';

class UserRow extends Component {
  render() {
    const avatarUrl = this.props.user.avatar_url;
    const login = this.props.user.login;

    return (
      <ListItem
        primaryText={login}
        leftAvatar={<Avatar src={avatarUrl} />}
        />
    );
  }
}

export default UserRow;
