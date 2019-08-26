import React, { Component } from 'react';
import logo from 'images/logo.png';
import style from './header.css';

class HeaderContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className={style.headerContainer}>
        <img className={style.logo} alt="Logo" src={logo} />
        <div className={style.headerNav}>
          <span>Link1</span>
          <span>Link2</span>
          <span>Link3</span>
          <span>Link4</span>
        </div>
      </div>
    );
  }
}

export default HeaderContainer;
