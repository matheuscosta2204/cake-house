import React from 'react';

import classes from './Modal.css';
import Backdrop from '../Backdrop/Backdrop';

const modal = (props) => {

    // const cssClasses = [classes.Modal,  ? classes.ModalOpen : classes.ModalClosed];
    if(props.show) {
        return (
            <>
                <Backdrop show={props.show} clicked={props.modalClosed} />
                <div className={classes.Modal}>
                    {props.children}
                </div>
            </>
        );
    } else {
        return ( 
            <div className={classes.modalClosed}>
                {props.children}
            </div>
        );
    }
};

export default modal;