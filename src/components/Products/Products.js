import React, { Component } from 'react';
import { Element } from 'react-scroll';
import { fadeIn } from 'react-animations';
import { StyleSheet, css } from 'aphrodite';

import classes from './Products.css';
import Modal from '../UI/Modal/Modal';
import Details from './Details/Details';
import Cakes from './Cakes/Cakes';

const ProductContainer = (props) => {
  const textClasses = [css(styles.fadeIn), classes.ProductText];
  if(props.hoverd) {
    return (
      <>
        <div className={props.firstHoverdStyle}></div>
        <p className={textClasses.join(' ')}>Saiba Mais</p>
      </>
    );
  } else {
    return (
      <div className={props.firstStyle}>

      </div>
    );
  }
}

class Products extends Component {
  state = {
    firstHoverd: false,
    secondHoverd: false,
    thirdHoverd: false,
    fourthHoverd: false,
    isModalVisible: false
  }

  render() {
    return (
        <>
          <Modal show={this.state.isModalVisible} modalClosed={() => this.setState({ isModalVisible: false })}>
            <Details modalClosed={() => this.setState({ isModalVisible: false })} />
          </Modal>
          <Cakes />
          <Element name="products" className={classes.Products}>
            <div className={classes.RowProducts}>
              <div 
                className={classes.ProductContainer} 
                onMouseOver={() => this.setState({ firstHoverd: true })} 
                onMouseLeave={() => this.setState({ firstHoverd: false })}
                onClick={() => this.setState({ isModalVisible: true })}>
                <ProductContainer hoverd={this.state.firstHoverd} firstHoverdStyle={classes.FirstHoverd} firstStyle={classes.First} />
              </div>
              <div 
                className={classes.ProductContainer} 
                onMouseOver={() => this.setState({ secondHoverd: true })} 
                onMouseLeave={() => this.setState({ secondHoverd: false })}
                onClick={() => this.setState({ isModalVisible: true })}>
                <ProductContainer hoverd={this.state.secondHoverd} firstHoverdStyle={classes.SecondHoverd} firstStyle={classes.Second} />
              </div>
            </div>
            <div className={classes.RowProducts}>
              <div 
                className={classes.ProductContainer} 
                onMouseOver={() => this.setState({ thirdHoverd: true })} 
                onMouseLeave={() => this.setState({ thirdHoverd: false })}
                onClick={() => this.setState({ isModalVisible: true })}>
                <ProductContainer hoverd={this.state.thirdHoverd} firstHoverdStyle={classes.ThirdHoverd} firstStyle={classes.Third} />
              </div>
              <div 
                className={classes.ProductContainer} 
                onMouseOver={() => this.setState({ fourthHoverd: true })} 
                onMouseLeave={() => this.setState({ fourthHoverd: false })}
                onClick={() => this.setState({ isModalVisible: true })}>
                <ProductContainer hoverd={this.state.fourthHoverd} firstHoverdStyle={classes.FourthHoverd} firstStyle={classes.Fourth} />
              </div>
            </div>
          </Element>
        </>
    );
  }
};

export default Products;

const styles = StyleSheet.create({
  fadeIn: {
    animationName: fadeIn,
    animationDuration: '1s'
  }
});