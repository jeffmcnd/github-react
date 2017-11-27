import React, { Component } from 'react';

// import $ from 'jquery';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/map';

import {List} from 'material-ui/List';

import UserRow from './UserRow';
import usersJson from './../../users.json';

class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = { userRows: [] };
  }

  componentDidMount() {
    this.getUsers();
  }

  getUsers() {
    Observable.from(usersJson)
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
