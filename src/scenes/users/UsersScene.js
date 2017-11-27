import React, { Component } from 'react';

import GithubApi from './../../services/GithubApi';

import GithubToolbar from './../../common/components/GithubToolbar';
import UserList from './UserList';

class UsersPage extends Component {
  render() {
    return (
        <div>
            <GithubToolbar title="Github Users"/>
            <UserList getUsers={GithubApi.getUsers} />
        </div>
    );
  }
}

export default UsersPage;
