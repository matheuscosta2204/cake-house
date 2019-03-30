import React, { Component } from 'react';
import Headroom from 'react-headroom';
import { bounceInDown } from 'react-animations';
import { StyleSheet, css } from 'aphrodite';
import { Link } from 'react-scroll';

import classes from './Toolbar.css';
import logo from '../../../assets/images/logo2.png';

class Toolbar extends Component {
  render() {
    const toolbar = [classes.Toolbar, css(styles.bounceInDown)];

    return (
      <Headroom className={classes.Headroom}>
        <div className={toolbar.join(' ')}>
          <div>
            <img src={logo} width="80%" height="80%" href="" />
          </div>
          <div className={classes.ItemContainer}>
            <Link 
              className={classes.Item} 
              to="home" 
              spy={true} 
              smooth={true} 
              offset={0} 
              duration={1000}>Home</Link>
            <Link 
              className={classes.Item} 
              to="products" 
              spy={true} 
              smooth={true} 
              offset={0} 
              duration={1000}>Products</Link>
            <Link 
              className={classes.Item} 
              to="products" 
              spy={true} 
              smooth={true} 
              offset={0} 
              duration={1000}
              onSetActive={this.handleSetActive}
              onSetInactive={this.handleSetInactive}>About</Link>
            <Link 
              className={classes.Item} 
              to="products" 
              spy={true} 
              smooth={true} 
              offset={0} 
              duration={1000}
              onSetActive={this.handleSetActive}
              onSetInactive={this.handleSetInactive}>Contact Us</Link>
          </div>
        </div>
      </Headroom>
    );
  }
}

export default Toolbar;

const styles = StyleSheet.create({
  bounceInDown: {
    animationName: bounceInDown,
    animationDuration: '1s'
  }
});