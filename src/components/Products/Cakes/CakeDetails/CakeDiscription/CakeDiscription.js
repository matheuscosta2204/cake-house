import React from 'react';
import { flipInY, fadeIn } from 'react-animations';
import { StyleSheet, css } from 'aphrodite';

import classes from './CakeDiscription.css';

const cakeDiscription = (props) => {

    const cssCakeTop = [classes.CakeTop, css(styles.fadeIn)];
    const cssBase1 = [classes.Base, css(styles.flipInY1)];
    const cssSecondFilling = [classes.SecondFilling, css(styles.flipInY2)];
    const cssBase2 = [classes.Base, css(styles.flipInY3)];
    const cssFirstFilling = [classes.FirstFilling, css(styles.flipInY4)];
    const cssBase3 = [classes.Base, css(styles.flipInY5)];
    return (
        <div className={classes.CakeDiscription}>
            <div className={classes.CakeIcons}>
                <img src="icons/fireworks-left.png" width="50" height="50" />
                <img src="icons/candles.png" width="50" height="50" />
                <img src="icons/fireworks-right.png" width="50" height="50" />
            </div>
            <div className={cssCakeTop.join(' ')}>
                {props.cake.cakeTop}
                <div className={cssBase1.join(' ')}>
                    {props.cake.base}
                </div>
                <div className={cssSecondFilling.join(' ')}>
                    {props.cake.secondFilling}
                </div>
                <div className={cssBase2.join(' ')}>
                    {props.cake.base}
                </div>
                <div className={cssFirstFilling.join(' ')}>
                    {props.cake.firstFilling}
                </div>
                <div className={cssBase3.join(' ')}>
                    {props.cake.base}
                </div>
            </div>
        </div>
    )
}
export default cakeDiscription;

const styles = StyleSheet.create({
    fadeIn: {
        animationName: fadeIn,
        animationDuration: '1.5s'
    },
    flipInY1: {
        animationName: flipInY,
        animationDuration: '1.5s'
    },
    flipInY2: {
        animationName: flipInY,
        animationDuration: '1.8s'
    },
    flipInY3: {
        animationName: flipInY,
        animationDuration: '1.9s'
    },
    flipInY4: {
        animationName: flipInY,
        animationDuration: '2.2s'
    },
    flipInY5: {
        animationName: flipInY,
        animationDuration: '2.5s'
    }
  })