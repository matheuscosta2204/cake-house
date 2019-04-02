import React, { Component } from 'react';
import Headroom from 'react-headroom';
import { slideInDown } from 'react-animations';
import { StyleSheet, css } from 'aphrodite';

import classes from './Toolbar.css';
import logo from '../../../assets/images/logo2.png';
import ToolbarItems from './ToolbarItems/ToolbarItems';
import Drawer from '../Drawer/Drawer';

class Toolbar extends Component {
  state = {
    hamburgerActive: false
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    this.setState({ hamburgerActive: false });
  }

  render() {
    const toolbar = [classes.Toolbar, css(styles.slideInDown)];

    const cssHamburger = ["hamburger", "hamburger--spring", "js-hamburger", classes.Hamburguer, this.state.hamburgerActive ? "is-active" : ""];
    return (
      <>
        <Headroom className={classes.Headroom}>
          <div className={toolbar.join(' ')}>
            <div>
              <img src={logo} className={classes.Logo} />
            </div>
            <ToolbarItems />
            <button class={cssHamburger.join(' ')} type="button" onClick={() => this.setState({ hamburgerActive: !this.state.hamburgerActive })}>
              <span class="hamburger-box">
                <span class="hamburger-inner"></span>
              </span>
            </button>
          </div>
        </Headroom>
        <Drawer show={ this.state.hamburgerActive } />
      </>
    );
  }
}

export default Toolbar;

const styles = StyleSheet.create({
  slideInDown: {
    animationName: slideInDown,
    animationDuration: '1s'
  },
});