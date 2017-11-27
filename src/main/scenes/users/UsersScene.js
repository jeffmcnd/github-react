import React, { Component } from 'react';

import GithubApi from './../../services/GithubApi';

import GithubToolbar from './../../common/components/GithubToolbar';
import UserListContainer from './UserListContainer';

class UsersPage extends Component {
  render() {
    return (
        <div>
            <GithubToolbar title="Github Users"/>
            <UserListContainer getUsers={GithubApi.getUsers} />
        </div>
    );
  }
}

export default UsersPage;
