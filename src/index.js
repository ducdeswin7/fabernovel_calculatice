import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { combineReducers, createStore } from 'redux';

// reducer
import levelReducer from "./reducers/levels-reducer";
import operationReducer from "./reducers/operations-reducer";

//data
import operationsLIst from "./action/operationsLIst";
import levelsList from "./action/levelsLIst";

const allReducers = combineReducers({
    levels: levelReducer,
    operations: operationReducer
});

const store = createStore(
    allReducers,
    {
        operations: operationsLIst,
        levels: levelsList,
        currentOperation: {},
        currentLevel: {}
    },
    window.devToolsExtension && window.devToolsExtension()
);

function render() {
    ReactDOM.render(
        <App store={store} />,
        document.getElementById('root'));
}

registerServiceWorker();

store.subscribe(render);

console.log ('store', store.getState());
render();

