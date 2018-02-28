import React, { Component } from 'react';
import TableData from './TableData';

class TableRow extends Component {

    render () {

        let classNameValue = this.props.odd ? 'odd' : '';

        const listTableDatas = this.props.numbers.map((item, key) =>
            <TableData handleAnwserClick={this.props.handleAnwserClick} styleState={this.props.styleState} key={key} value={this.props.value * 10 + item} />
        );

        return (
            <tr className={classNameValue}>
                {listTableDatas}
            </tr>
        )
    }

}

export default TableRow;