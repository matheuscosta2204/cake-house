import React, { Component } from 'react';
import { bounceInRight, fadeIn } from 'react-animations';
import { StyleSheet, css } from 'aphrodite';

import classes from './Home.css';

class Home extends Component {
  render() {
    const backgroundImage = [classes.BackgroundImage, css(styles.fadeIn)];
    return (
        <section className={classes.Home}>
          <div className={backgroundImage.join(' ')}>
            <div className={classes.TextIntro}>
              <p className={css(styles.bounceInRight)}>Procurando lindos bolos para seus eventos?</p>
              <p className={css(styles.bounceInRight2)}>A Luiza Confeitaria é o lugar certo para encontrá-los.</p>
              <p className={css(styles.bounceInRight3)}>Entre em contato e faça seu pedido.</p>
            </div>
          </div>
        </section>
    );
  }
};

export default Home;

const styles = StyleSheet.create({
  bounceInRight: {
    animationName: bounceInRight,
    animationDuration: '1s'
  },
  bounceInRight2: {
    animationName: bounceInRight,
    animationDuration: '2s'
  },
  bounceInRight3: {
    animationName: bounceInRight,
    animationDuration: '3s'
  },
  fadeIn: {
    animationName: fadeIn,
    animationDuration: '3s'
  }
});