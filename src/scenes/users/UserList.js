import React, { Component } from 'react';

import { List } from 'material-ui/List';

import UserRow from './UserRow';

class UserList extends Component {
  render() {
    const userRows = this.props.users
      .map(user => <UserRow key={user.id} user={user} />);
    return (
      <List>
        {userRows}
      </List>
    );
  }
}

export default UserList;
