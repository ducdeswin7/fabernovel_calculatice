import React, { Component } from 'react';
import Op from "./Op";
import Level from "./Level";

class Header extends Component {
    render() {
        return (
            <nav className="menu">

                <Op data={this.props.operations}
                    handleOperationType={this.props.handleOperationType}
                    currentOperation={this.props.currentOperation}/>

                <Level handleLevelClick={this.props.handleLevelClick}
                       levels={this.props.levels} />

            </nav>
        );
    }
}

export default Header;
