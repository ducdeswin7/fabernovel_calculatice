import React, { Component } from 'react';

class StepItem extends Component {

    render() {
        let id = 'step' + this.props.value;

        return (
            <li id={id} className="step"/>
        );
    }
}

export default StepItem;
