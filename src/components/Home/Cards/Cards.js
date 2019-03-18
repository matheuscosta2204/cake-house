import React, { Component } from 'react';

import classes from './Cards.css';
import Card from './Card/Card';

class Cards extends Component {
  render() {
    return (
        <div className={classes.Cards}>
            <Card>teste 1</Card>
            <Card>teste 2</Card>
            <Card>teste 3</Card>
            <Card>teste 4</Card>
        </div>
    );
  }
}

export default Cards;