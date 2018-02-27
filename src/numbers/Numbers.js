import React, { Component } from 'react';
import TableRow from './TableRow';

class Numbers extends Component {

    constructor(props) {
        super(props);

        this.state = {
            odd: false,
            numbers: [0,1,2,3,4,5,6,7,8,9]
        };
    }


    render() {
        let listRows = this.state.numbers.map((item, key) =>
            <TableRow key={key} odd={!this.state.odd}
                      value={item} numbers={this.state.numbers}/>
        );

        return (
            <div className="numbers">
                <table>
                    <tbody>
                        {listRows}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Numbers;
