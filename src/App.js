import React, { Component } from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import UsersScene from './scenes/users/UsersScene';
import './App.css';

class App extends Component {
  render() {

    const theme = getMuiTheme({
      palette: {
        primary1Color: "#a5d6a7",
        accent1Color: "#ff8982",
      },
    });

    return (
      <MuiThemeProvider muiTheme={theme}>
        <UsersScene />
      </MuiThemeProvider>
    );
  }
}

export default App;
