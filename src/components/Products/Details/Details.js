import React from 'react';

import classes from './Details.css';

const details = (props) => (
    <div className={classes.ModalContainer}>
        <div className={classes.ModalHeader}>
            <p className={classes.ModalTitle}>Details</p>
            <span className={classes.ModalExitIcon}><i className="fas fa-times"></i></span>
        </div>
    </div>
);

export default details;