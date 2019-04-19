import React from 'react';
import { Element } from 'react-scroll';

import classes from './Footer.css';
import Maps from './Maps/Maps';

const footer = () => (
    <Element name="footer" className={classes.Footer}>
        <div className={classes.Contact}>
            <h1>Contate-nos</h1>
            <p>(16) 3637-4709 ou (16) 3013-2687</p>
            <p>Rua Alberto de Oliveira, 363</p>
            <p>Jd. Maria Goretti - Ribeirao Preto - Sao Paulo</p>
        </div>
        <Maps />
    </Element>
);

export default footer;