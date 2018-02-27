import React, { Component } from 'react';
import Header from "./header/Header";
import Operation from "./operation/Operation";
import Numbers from "./numbers/Numbers";
import { changeOperationType } from "./action/actions";
import cookie from 'react-cookies';

import './App.css';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            totalSteps: 20,
            currentStep: 0,
            mistakes: 0,
            correct: 0,
            wrong: 0,
            numbersEnabled: false,
            cookie: cookie.load('operation') ? cookie.load('operation') : ''
        };

        this.store = this.props.store;
    }

    componentWillMount() {
        this.store.dispatch(changeOperationType(this.state.cookie));
    }

    onHandleOperationClick(operation) {
        this.store.dispatch(changeOperationType(operation));
        cookie.save('operation', operation);
    }

    render() {
        return (
            <div className="container">

                <Header operations={this.store.getState().operations}
                        handleOperationType={this.onHandleOperationClick.bind(this)}
                        currentOperation={this.store.getState().currentOperation}
                        levels={this.store.getState().levels}/>

                <Operation
                    steps={this.state.totalSteps}
                />

                <Numbers />

            </div>
        );
    }
}

export default App;