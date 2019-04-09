import React from 'react';
import { zoomIn } from 'react-animations';
import { StyleSheet, css } from 'aphrodite';

import classes from './CakeSlice.css';

const cakeSlice = (props) => {
    const cssCakeSlice = [css(styles.zoomIn), classes.Slice]
    return (
        <div className={cssCakeSlice.join(' ')}>
            <img src={props.url} className={classes.SliceImage} />
        </div>
    )
}
export default cakeSlice;

const styles = StyleSheet.create({
    zoomIn: {
        animationName: zoomIn,
        animationDuration: '1s'
    },
});