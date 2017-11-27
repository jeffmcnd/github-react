import React, { Component } from 'react';

class UserRow extends Component {
  render() {
    // const avatarUrl = this.props.user.avatarUrl;
    const login = this.props.user.login;
    const divStyle = {
      display: "inline-block"
    }

    return (
      <div>
        <div style={divStyle}>
          {/* <img src={avatarUrl} alt="Avatar"/> */}
          <img src="" alt="Avatar"/>
        </div>
        <div style={divStyle}>
          {login}
        </div>
      </div >
    );
  }
}

export default UserRow;
