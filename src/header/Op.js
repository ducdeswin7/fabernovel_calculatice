import React, { Component } from 'react';
import ItemOp from "./ItemOp";

class Op extends Component {

    constructor(props) {
        super(props);

        this.state = {
            data: props.data
        }
    }

    componentWillReceiveProps(nextProps) {

        this.setState({
            data: nextProps.data
        });

    }

    render () {
        let listOps = this.props.data.map((item, key) =>
            <ItemOp key={key}
                    item={item}
                    handleOperationType={this.props.handleOperationType}/>
        );

        return (
            <ul className="op">
                {listOps}
            </ul>
        )
    }
}

export default Op;