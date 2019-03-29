import React, { Component } from 'react';
import Headroom from 'react-headroom';

import classes from './Toolbar.css';
import logo from '../../../assets/images/logo2.png';

class Toolbar extends Component {
  render() {
    return (
      <Headroom>
        <div className={classes.Toolbar}>
          <div>
            <img src={logo} width="80%" height="80%" href="" />
          </div>
          <div className={classes.ItemContainer}>
            <a className={classes.Item} href="#">Home</a>
            <a className={classes.Item} href="#">Products</a>
            <a className={classes.Item} href="#">About</a>
            <a className={classes.Item} href="#">Contact Us</a>
          </div>
        </div>
      </Headroom>
    );
  }
}

export default Toolbar;