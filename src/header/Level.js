import React, { Component } from 'react';
import ItemLevel from "./ItemLevel";

class Level extends Component {

    render () {
        let levels = this.props.levels.map((item, key) =>
            <ItemLevel
                key={key}
                item={item}
                handleLevelClick={this.props.handleLevelClick} />
        );

        return (

            <ul className="level">
                {levels}
            </ul>
        )
    }

}

export default Level;