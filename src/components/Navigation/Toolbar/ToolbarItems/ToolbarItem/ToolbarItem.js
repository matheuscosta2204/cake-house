import React from 'react';
import { Link } from 'react-scroll';

import classes from './ToolbarItem.css';

const toolbarItem = (props) => (
    <Link 
        className={classes.Item} 
        to={props.to}
        spy={true} 
        smooth={true} 
        offset={0} 
        duration={1000}>{props.children}</Link>
);

export default toolbarItem;