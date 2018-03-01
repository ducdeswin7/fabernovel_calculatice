import React, { Component } from 'react';

class ItemOp extends Component {

    render () {
        let isActive = this.props.item.isActive ? 'active' : '';

        let classNameValue = 'btn '+this.props.item.name;

        return (
            <li>
                <a className={classNameValue +' '+ isActive} href='' onClick={() => this.props.handleOperationType(this.props.item)}>
                    <span>{this.props.item.sign}</span>
                </a>
            </li>
        )
    }

}

export default ItemOp;

