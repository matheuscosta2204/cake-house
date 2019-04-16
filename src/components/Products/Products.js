import React from 'react';
import { Element } from 'react-scroll';

import classes from './Products.css';
import Cakes from './Cakes/Cakes';
import OtherProducts from './OtherProducts/OtherProducts';

const products = () => (
  <Element name="products" className={classes.Products}>
    <Cakes />
    <OtherProducts />
  </Element>
);

export default products;