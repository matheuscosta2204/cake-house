import React, { Component } from 'react';
import Carousel from 'nuka-carousel';

import classes from './Carousel.css';
import logo1 from '../../../assets/images/LuizaConfeitariaLogo.png';
import logo2 from '../../../assets/images/LuizaConfeitariaLogo2.png';
import logo3 from '../../../assets/images/LuizaConfeitariaLogo3.png';
import logo4 from '../../../assets/images/LuizaConfeitariaLogo4.png';
import logo5 from '../../../assets/images/LuizaConfeitariaLogo5.png';

class CarouselComponent extends Component {
  render() {
    return (
      <Carousel 
        className={classes.Carousel}
        autoplay={true}
        pauseOnHover={true}>
        <img src={logo1} />
        <img src={logo2} />
        <img src={logo3} />
        <img src={logo4} />
        <img src={logo5} />
      </Carousel>
    );
  }
};

export default CarouselComponent;