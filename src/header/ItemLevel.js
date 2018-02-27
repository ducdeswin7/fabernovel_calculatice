import React, { Component } from 'react';

class ItemLevel extends Component {

    render () {
        let isActive = this.props.item.isActive ? 'active' : '';

        let classNameValue = 'btn level'+this.props.item.name;
        let hrefValue = '#level='+this.props.item.name;

        return (
            <li>
                <a className={classNameValue+' '+isActive} href={hrefValue} onClick={() => this.props.handleLevelClick(this.props.item)}>
                    <span>{this.props.item.name}</span>
                </a>
            </li>
        )
    }

}

export default ItemLevel;

