import React, { Component } from 'react';
import Steps from './Steps';

class Operation extends Component {

    render() {
        let classOperation = this.props.repOperation.op;
        let className = 'text ' + classOperation;

        return (
            <div className="operation">
                <div className={className}>{this.props.repOperation.digit1} {this.props.repOperation.opChar} {this.props.repOperation.digit2}</div>
                <div className="score"/>
                <Steps steps={this.props.steps} />
            </div>
        );
    }
}

export default Operation;
