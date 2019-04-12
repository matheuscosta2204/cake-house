import React from 'react';
import { bounceInDown } from 'react-animations';
import { StyleSheet, css } from 'aphrodite';

import classes from './CakeDetails.css';
import CakeSlice from '../CakeSlice/CakeSlice';
import CakeDescription from './CakeDiscription/CakeDiscription';

const cakeDetails = (props) => {
    const cssCakeDetails = [classes.CakeDetails, css(styles.bounceInDown)]
    return (
        <div className={cssCakeDetails.join(' ')}>
            <div className={classes.CakeHeader}>
                <h2>
                    {`${props.cake.title} Cake`}
                </h2>
                <span 
                      className={classes.ModalExitIcon} 
                      onClick={props.modalClosed}><i className="fas fa-times"></i></span>
            </div>
            <div className={classes.CakeContent}>
                <CakeDescription cake={props.cake} />
                <CakeSlice url={props.cake.cakeSlice} />
            </div>
        </div>
    );
};

export default cakeDetails;

const styles = StyleSheet.create({
    bounceInDown: {
        animationName: bounceInDown,
        animationDuration: '1.5s'
    }
});