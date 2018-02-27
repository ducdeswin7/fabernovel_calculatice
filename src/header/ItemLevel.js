import React, { Component } from 'react';

class ItemLevel extends Component {

    render () {
        let classNameValue = 'btn level'+this.props.value;
        let hrefValue = '#level='+this.props.value;


        return (
            <li>
                <a className={classNameValue} href={hrefValue}>
                    <span>{this.props.value}</span>
                </a>
            </li>
        )
    }

}

export default ItemLevel;

