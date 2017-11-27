import React, { Component } from 'react';

import UserList from './UserList';

class UserListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { users: [] };
    this.getUsers = this.props.getUsers;
  }

  showUsers(users = []) {
    this.setState((prevState, props) => ({
      users: prevState.users.concat(users)
    }));
  }

  componentDidMount() {
    this.getUsers()
      .subscribe((users) => {
        this.showUsers(users);
      });
  }

  render() {
    return (
      <UserList users={this.state.users} />
    );
  }
}

export default UserListContainer;
