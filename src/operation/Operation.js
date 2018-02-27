import React, { Component } from 'react';
import Steps from './Steps';

class Operation extends Component {

    render() {
        return (
            <div className="operation">
                <div className="text multiplication">4 X 7</div>
                <div className="score"/>
                <Steps steps={this.props.steps} />
            </div>
        );
    }
}

export default Operation;
