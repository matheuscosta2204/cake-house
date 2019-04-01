import React, { Component } from 'react';
import { Element } from 'react-scroll';

import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import Home from '../Home/Home';
import Products from '../Products/Products';

class Layout extends Component {

  // scrollToMyRef = (ref) => {

  //   ref = this.myRef;
  //   console.log(ref);

  //   window.scrollTo({
  //     top: ref,
  //     left: 0,
  //     behavior: 'smooth'
  //   })
  // };

  render() {
    return (
        <Element name="home" className={classes.Layout}>
          <Toolbar />
          <Home  />
          <Products />
        </Element>
    );
  }
}

export default Layout;