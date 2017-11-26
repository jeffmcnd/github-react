import React, { Component } from 'react';

class Toolbar extends Component {
  render() {
    const title = this.props.title;
    return (
        <div>
            <h1>{title}</h1>
        </div>
    );
  }
}

export default Toolbar;