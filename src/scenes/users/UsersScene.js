import React, { Component } from 'react';
import GithubToolbar from './../../common/components/GithubToolbar';
import UserList from './UserList';

class UsersPage extends Component {
  render() {
    return (
        <div>
            <GithubToolbar title="Github Users"/>
            <UserList />
        </div>
    );
  }
}

export default UsersPage;
