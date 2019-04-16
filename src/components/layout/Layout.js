import React, { Component } from 'react';
import { Element } from 'react-scroll';

import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import Home from '../Home/Home';
import Products from '../Products/Products';
import About from '../About/About';
import Footer from '../Footer/Footer';

class Layout extends Component {
  render() {
    return (
      <>
        <Element name="home" className={classes.Layout}>
          <Toolbar />
          <Home />
        </Element>
          <Products />
          <About />
          <Footer />
      </>
    );
  }
}

export default Layout;