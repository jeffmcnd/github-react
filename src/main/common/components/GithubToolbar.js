import React, { Component } from 'react';

import AppBar from 'material-ui/AppBar';

class GithubToolbar extends Component {
  render() {
    const title = this.props.title;
    return (
      <AppBar title={title} showMenuIconButton={false} />
    );
  }
}

export default GithubToolbar;
