import React, { Component } from 'react';
import { hot } from 'react-hot-loader/root';
import Nav from './components/nav/Nav';
import Registration from './components/registration/Registration';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Nav />
        <Registration />
      </div>
    );
  }
}

export default hot(App);
