import React from 'react';
import { slideInDown, zoomInLeft, zoomInRight } from 'react-animations';
import { StyleSheet, css } from 'aphrodite';

import classes from './Details.css';

class Details extends React.Component {
    render() {
      const cssModalHeader = [classes.ModalHeader, css(styles.slideInDown)];
      const cssDescription = [classes.Description, css(styles.zoomInLeft)];
      const cssGallery = [classes.Gallery, css(styles.zoomInRight)];

      return (
          <div className={classes.ModalContainer}>
              <div className={cssModalHeader.join(' ')}>
                  <p className={classes.ModalTitle}>{this.props.data.title}</p>
                  <span 
                      className={classes.ModalExitIcon} 
                      onClick={this.props.modalClosed}><i className="fas fa-times"></i></span>
              </div>
              <div className={classes.ModalContent}>
                  <div className={cssDescription.join(' ')}>
                  {this.props.data.description.map((item, key) => (
                      <p>{item}</p>
                  ))}
                  </div>
                  <div className={cssGallery.join(' ')}>
                      <img src={this.props.data.img} alt="Gallery" className={classes.GalleryImage} />
                  </div>
              </div>
          </div>
      );
    }
};

export default Details;

const styles = StyleSheet.create({
    slideInDown: {
      animationName: slideInDown,
      animationDuration: '1s'
    },
    zoomInLeft: {
      animationName: zoomInLeft,
      animationDuration: '1s'
    },
    zoomInRight: {
      animationName: zoomInRight,
      animationDuration: '1s'
    },
  });