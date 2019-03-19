import React, { Component } from 'react';

import classes from './Home.css';
import Carousel from './Carousel/Carousel';

class Home extends Component {
  render() {
    return (
        <section id="home">
          <div className={classes.Home}>
              <Carousel />
          </div>
        </section>
    );
  }
}

export default Home;