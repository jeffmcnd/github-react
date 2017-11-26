import React, { Component } from 'react';
import UserRow from './UserRow';

class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = { users: [] };
  }

  componentDidMount() {
    this.getUsers()
  }

  getUsers() {
    const data = [
      { id: 1, avatarUrl: "https://avatars0.githubusercontent.com/u/1?v=4", login: "mojombo" },
      { id: 2, avatarUrl: "https://avatars0.githubusercontent.com/u/2?v=4", login: "defunkt" },
    ]
    const rows = data.map((user) =>
      <UserRow key={user.id}
        user={user} />
    );
    this.setState({ users: rows })
  }

  render() {
    const users = this.state.users
    return (
      <ul>
        {users}
      </ul>
    );
  }
}

export default UserList;