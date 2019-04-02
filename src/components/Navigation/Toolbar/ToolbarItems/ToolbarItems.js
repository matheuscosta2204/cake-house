import React from 'react';
import ToolbarItem from './ToolbarItem/ToolbarItem';

import classes from './ToolbarItems.css';

const toolbarItems = () => (
    <div className={classes.ItemContainer}>
        <ToolbarItem to="home">Home</ToolbarItem>
        <ToolbarItem to="products">Products</ToolbarItem>
        <ToolbarItem to="products">About</ToolbarItem>
        <ToolbarItem to="products">Contact Us</ToolbarItem>
    </div>
);

export default toolbarItems;