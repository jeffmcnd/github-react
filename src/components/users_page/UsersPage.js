import React, { Component } from 'react';
import Toolbar from '../common/Toolbar';
import UserList from './UserList';

class UsersPage extends Component {
  render() {
    return (
        <div>
            <Toolbar title="Github Users"/>
            <UserList />
        </div>
    );
  }
}

export default UsersPage;