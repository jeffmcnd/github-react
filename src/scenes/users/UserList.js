import React, { Component } from 'react';

import $ from 'jquery';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

import {List} from 'material-ui/List';

import UserRow from './UserRow';

class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = { userRows: [] };
  }

  componentDidMount() {
    this.getUsers();
  }

  getUsers() {
    Observable.fromPromise($.get("https://api.github.com/users"))
    .flatMap((users) => Observable.from(users))
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
