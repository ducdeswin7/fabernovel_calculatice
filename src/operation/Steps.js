import React, { Component } from 'react';
import StepItem from './StepItem';

class Steps extends Component {

    loopItem() {
        let str = [];


        for (let i=0; i < this.props.steps; i++) {
            str.push(<StepItem key={i} value={i}/>);
        }

        return str;
    }

    render() {


        return (
            <ul className="steps">
                {this.loopItem()}
            </ul>
        );
    }
}

export default Steps;
