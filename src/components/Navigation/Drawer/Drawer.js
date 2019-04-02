import React from 'react';
import { slideInRight } from 'react-animations';
import { StyleSheet, css } from 'aphrodite';

import classes from './Drawer.css';
import ToolbarItem from '../Toolbar/ToolbarItems/ToolbarItem/ToolbarItem';

const drawer = (props) => {

    const cssDrawer = [css(styles.slideInRight), classes.Drawer]
    if(props.show) {
        return (
            <div className={cssDrawer.join(' ')}>
                <ToolbarItem to="home">Home</ToolbarItem>
                <ToolbarItem to="products">Products</ToolbarItem>
                <ToolbarItem to="products">About</ToolbarItem>
                <ToolbarItem to="products">Contact Us</ToolbarItem>
            </div>
        );
    } else {
        return (<></>);
    }
};

export default drawer;

const styles = StyleSheet.create({
    slideInRight: {
      animationName: slideInRight,
      animationDuration: '1s'
    },
  });