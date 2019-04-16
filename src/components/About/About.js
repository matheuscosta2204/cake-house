import React from 'react';
import { Element } from 'react-scroll';

import classes from './About.css';

const about = () => (
    <Element name="about" className={classes.About}>
        <div className={classes.TextDescription}>
            <p>Any text to tell a story of the company and some kind of values that we spread through our customers.</p>
        </div>
        <img src="images/front.jpg" className={classes.ImageDescription} />
    </Element>
);

export default about;