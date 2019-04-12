import React from 'react';

import classes from './ThumbDetails.css';

const thumbDetails = (props) => {
    return (
        <div className={classes.ThumbDetails}>
            {props.data.breefDescription.map((item, key) => (
                <p>{item}</p>
            ))}
            <h2>Clique e saiba mais</h2>
        </div>
    );
};

export default thumbDetails;