import React, { Component } from 'react';
import ItemLevel from "./ItemLevel";

class Level extends Component {

    render () {

        let levels = this.props.levels.map((item, key) =>
            <ItemLevel key={key} value={item} />
        );

        return (

            <ul className="level">
                {levels}
            </ul>
        )
    }

}

export default Level;