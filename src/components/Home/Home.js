import React, { Component } from 'react';

import classes from './Home.css';
import Carousel from './Carousel/Carousel';
import Cards from './Cards/Cards';

class Home extends Component {
  render() {
    return (
        <div className={classes.Home}>
            <Carousel />
            <Cards />
        </div>
    );
  }
}

export default Home;