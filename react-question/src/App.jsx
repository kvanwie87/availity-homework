import React, { Component } from 'react';
import { hot } from 'react-hot-loader/root';
import Nav from './components/header/Nav';
import Registration from './components/registration/Registration';
import HeaderContainer from './components/header/HeaderContainer';
import style from './components/common/common.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className={style.content}>
        <HeaderContainer />
        <Registration />
      </div>
    );
  }
}

export default hot(App);
