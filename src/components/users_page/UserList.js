import React, { Component } from 'react';

// import $ from 'jquery';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import UserRow from './UserRow';
import usersJson from './../../users.json';

class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = { userRows: [] };
  }

  componentDidMount() {
    this.getUsers()
  }

  getUsers() {
    Observable.create((it) => {
      // const results = $.get('https://api.github.com/users')
      const results = usersJson
      it.next(results)
    })
      .subscribe((users) => {
        const userRows = users.map((user) =>
          <UserRow key={user.id}
            user={user} />
        );
        this.setState({ userRows: userRows })
      });
  }

  render() {
    return (
      <ul>
        {this.state.userRows}
      </ul>
    );
  }
}

export default UserList;