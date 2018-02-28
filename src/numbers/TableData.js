import React, { Component } from 'react';

class TableData extends Component {
    render () {

        let classValue = 'n' + this.props.value;
        let hrefValue = '#' + this.props.value;

        let wrongClass = this.props.styleState.wrong ? ' wrong' : '';
        let okClass = this.props.styleState.ok ? ' ok' : '';
        let koClass = this.props.styleState.ko ? ' ko' : '';
        let linkClass = 'btn' + wrongClass + okClass + koClass;

        return (
            <td className={classValue} data-value={this.props.value}>
                <a className={linkClass} href={hrefValue} onClick={(e) => this.props.handleAnwserClick(e, this.props.value)}>
                    <span>{this.props.value}</span>
                </a>
            </td>
        )
    }
}

export default TableData;