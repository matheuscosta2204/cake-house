import React from 'react';
import { fadeIn } from 'react-animations';
import { StyleSheet, css } from 'aphrodite';

import classes from './ProductCircle.css';
import ThumbDetails from '../ThumbDetails/ThumbDetails';

class productCircle extends React.Component {
    state = {
        hoverd: false
    }

    renderContent = () => {
        if(this.state.hovered) {
            const cssIn = [classes.ProductCircleContent, classes.ProductCircleHoverd];
            return (<div className={cssIn.join(' ')}><ThumbDetails data={this.props.data} /></div>);
        } else {
            const cssOut = [classes.ProductCircleContent, css(styles.fadeIn)];
            return (<img src={this.props.url} className={cssOut.join(' ')} />);
        }
    }

    render() {
        return (
            <div 
                className={classes.ProductCircle}>
                <div
                    className={classes.ProductFogCircle}
                    onMouseEnter={() => this.setState({ hovered: true })}
                    onMouseLeave={() => this.setState({ hovered: false })}
                    onClick={this.props.onClick}>
                </div>
                {this.renderContent()}
            </div>
        );
    }
};

export default productCircle;

const styles = StyleSheet.create({
    fadeIn: {
        animationName: fadeIn,
        animationDuration: '.5s'
    }
});