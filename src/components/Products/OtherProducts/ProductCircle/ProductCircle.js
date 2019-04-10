import React from 'react';

import classes from './ProductCircle.css';

class productCircle extends React.Component {
    state = {
        hoverd: false
    }

    renderContent = () => {
        if(this.state.hovered) {
            const css = [classes.ProductCircleContent, classes.ProductCircleHoverd];
            return (<div className={css.join(' ')}>Ola</div>);
        } else {
            return (<img src={this.props.url} className={classes.ProductCircleContent} />);
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