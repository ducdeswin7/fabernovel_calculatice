import React, { Component } from 'react';

class TableData extends Component {
    render () {

        let classValue = 'n' + this.props.value;
        let hrefValue = '#' + this.props.value;

        return (
            <td className={classValue} data-value={this.props.value}>
                <a className="btn" href={hrefValue}>
                    <span>{this.props.value}</span>
                </a>
            </td>
        )
    }
}

export default TableData;