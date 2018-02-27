import React, { Component } from 'react';
import Header from "./header/Header";
import Operation from "./operation/Operation";
import Numbers from "./numbers/Numbers";
import {changeLevel, changeOperationType} from "./action/actions";
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
            cookieOperation: cookie.load('operation') ? cookie.load('operation') : '',
            cookieLevel: cookie.load('level') ? cookie.load('level') : '',
            currentOp: {}
        };

        this.store = this.props.store;
    }

    componentWillMount() {
        this.store.dispatch(changeLevel(this.state.cookieLevel));
        this.store.dispatch(changeOperationType(this.state.cookieOperation));
        this.store.currentLevel = this.state.cookieLevel;
        this.store.currentOperation = this.state.cookieOperation;

        console.log('this.state.cookieLevel', this.state.cookieLevel);

        this.go();
    }

    onHandleOperationClick(operation) {
        this.store.dispatch(changeOperationType(operation));
        cookie.save('operation', operation);
        this.store.currentOperation = operation;

        this.go();
        console.log('currentOperation', this.store.currentOperation);
    }

    onHandleLevelClick(level) {
        this.store.dispatch(changeLevel(level));
        cookie.save('level', level);
        this.store.currentLevel = level;
        this.go();

        console.log('currentlevel', this.store.currentLevel);
    }
    
    getOperationObj() {
        return this.getOp(this.store.currentOperation.name);
    }

    getOp(opType) {
        let retOperation = {};
        let coefs = [0.25, 0.6, 1];
        let coef = coefs[this.store.currentLevel.name-1];

        console.log('this.store.currentOperation.name', this.store.currentOperation.name);
        switch(opType) {
            case 'multiplication' :
                retOperation.digit1 = Math.floor(coef * (this.store.currentLevel === 1 ? Math.random() * 10 : 3 + Math.random() * 7));
                retOperation.digit2 = Math.floor( 1 + Math.random() * 10 );
                retOperation.opChar = 'x';
                retOperation.result = retOperation.digit1 * retOperation.digit2;
                break;

            case 'addition' :
                retOperation.digit1 = Math.floor( Math.random() * 99 );
                retOperation.digit2 = Math.floor( 1 + Math.random() * (99 - retOperation.digit1) );
                retOperation.digit1 = Math.floor(retOperation.digit1 * coef);
                retOperation.digit2 = Math.floor(retOperation.digit2 * coef);
                retOperation.opChar = '+';
                retOperation.result = retOperation.digit1 + retOperation.digit2;
                break;

            case 'soustraction' :
                retOperation.digit1 = Math.floor( 10 + Math.random() * 90 );
                retOperation.digit2 = Math.floor( Math.random() * retOperation.digit1 );
                retOperation.digit1 = Math.floor(retOperation.digit1 * coef);
                retOperation.digit2 = Math.floor(retOperation.digit2 * coef);
                retOperation.opChar = '-';
                retOperation.result = retOperation.digit1 - retOperation.digit2;

                break;
            default :
                return this.getOp('multiplication');
        }

        retOperation.op = opType;

        return retOperation;
    }

    go() {
        console.log('go');

        this.setState({
            numbersEnabled: true,
            mistakes: 0
        });

        this.store.styleState = {
                wrong: false,
                ok: false,
                ko: false
            };

        this.store.retOperation = this.getOperationObj();

        console.log('getOperationObj', this.getOperationObj());

    }

    helpme() {
        for (let i = 0;i<100;i++) {
            switch (this.store.retOperation.op) {
                case 'multiplication' :
                    if (i % this.store.retOperation.digit1 !== 0) {
                        // $('.n'+i+' a').addClass('wrong');
                    }
                    break;

                case 'addition' :
                case 'soustraction' :
                    if (i !== this.store.retOperation.result && Math.random() > 0.7) {
                        // $('.n'+i+' a').addClass('wrong');
                    }
                default :
            }
        }
    }


    // handleAnwserClick(e) {
    //     e.preventDefault();
    //     if (!numbersEnabled) return;
    //     let v = parseInt($(this).find('span').html());
    //     let resultClass = '';
    //
    //     if (v == currentOp.result) {
    //         resultClass = 'ok';
    //         correct ++;
    //
    //         this.state.numbersEnabled = false;
    //
    //         console.log('setTimeout');
    //
    //         setTimeout(this.go(), 600);
    //     } else {
    //         resultClass = 'ko';
    //         mistakes ++;
    //         if (mistakes == 2) {
    //             this.helpme();
    //         }
    //         wrong ++;
    //     }
    //
    //     // Step
    //     if (this.state.currentStep == steps) {
    //         // restart steps
    //         this.state.currentStep = 0;
    //
    //         $('.step').removeClass('ok').removeClass('ko');
    //     }
    //     $('#step'+this.state.currentStep).addClass(resultClass);
    //
    //     this.state.currentStep++;
    //
    //     $('.operation .text').addClass(resultClass).delay(200).queue(function () {
    //         $(this).removeClass(resultClass).dequeue();
    //     });
    //
    //     $(this).addClass(resultClass);
    //
    //     $('.score').html('<span class="ok">'+correct+'</span> / <span class="ko">'+wrong+'</span>');
    // });

    render() {
        return (
            <div className="container">

                <Header operations={this.store.getState().operations}
                        handleOperationType={this.onHandleOperationClick.bind(this)}
                        currentOperation={this.store.getState().currentOperation}
                        levels={this.store.getState().levels}
                        handleLevelClick={this.onHandleLevelClick.bind(this)}
                />

                <Operation
                    steps={this.state.totalSteps}
                    repOperation={this.store.retOperation}
                />

                <Numbers styleState={this.store.styleState} />

            </div>
        );
    }
}

export default App;