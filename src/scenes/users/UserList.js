import React, { Component } from 'react';

import 'rxjs/add/operator/map';

import { List } from 'material-ui/List';

import UserRow from './UserRow';

class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = { userRows: [] };
    this.getUsers = this.props.getUsers;
  }

  componentDidMount() {
    this.getUsers()
      .map(user => <UserRow key={user.id} user={user} />)
      .subscribe((user) => {
        this.setState((prevState, props) => ({
          userRows: prevState.userRows.concat(user)
        }));
      });
  }

  render() {
    return (
      <List>
        {this.state.userRows}
      </List>
    );
  }
}

export default UserList;
