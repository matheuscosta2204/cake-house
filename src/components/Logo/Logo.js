import React from 'react';

import cakeLogo from '../../assets/images/LuizaConfeitariaLogo.png';
import classes from './Logo.css';

const logo = (props) => (
    <div className={classes.Logo}>
        <img src={cakeLogo} alt="Luiza Confeitaria" />
    </div>
);

export default logo;