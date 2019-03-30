import React, { Component } from 'react';
import { Element } from 'react-scroll';

import classes from './Products.css';

class Products extends Component {
  render() {
    return (
        <Element name="products" className={classes.Products}>
            <div className={classes.RowProducts}>
              <div 
                className={[classes.ProductContainer, classes.First].join(' ')}>
              </div>
              <div 
                className={[classes.ProductContainer, classes.Second].join(' ')}>
              </div>
            </div>
            <div className={classes.RowProducts}>
              <div 
                className={[classes.ProductContainer, classes.Third].join(' ')}>
              </div>
              <div 
                className={[classes.ProductContainer, classes.Fourth].join(' ')}>
              </div>
            </div>
        </Element>
    );
  }
};

export default Products;