import React, { Component } from 'react';
import cookie from 'react-cookies';
import Op from "./Op";
import Level from "./Level";

class Header extends Component {

    componentDidMount() {
        // this.updateOp();

        this.setState({
            op: cookie.load('op') ? cookie.load('op') : 'multiplication',
            level: cookie.load('level') && this.props.ops[cookie.load('level')] ? parseInt(cookie.load('level'), 2) : 2
        });
    }


    //
    // go() {
    //     console.log('go');
    //     numbersEnabled = true;
    //     mistakes = 0;
    //     // remove all classes except btn
    //     $('table td a').removeClass('wrong').removeClass('ok').removeClass('ko');
    //     if (currentOp.op) {
    //         $('.operation .text').removeClass(currentOp.op);
    //     }
    //     currentOp = getOperationObj();
    //     $('.operation .text').addClass(currentOp.op).html(currentOp.digit1+' '+ currentOp.opChar + ' '+currentOp.digit2);
    // }


    // updateOp() {
    //     let hash = window.location.hash ? window.location.hash.replace('#', '') : 'mix';
    //     let params = hash.split('=');
    //
    //     // eslint-disable-next-line
    //     if (params[0] && params[1]) {
    //
    //         // eslint-disable-next-line
    //         switch(params[0]) {
    //             case 'op' :
    //                 if (this.props.ops.indexOf(params[1]) >= 0) {
    //                     let op = params[1];
    //                      cookie.save('op', op);
    //                 }
    //                 break;
    //             case 'level' :
    //                 let level = parseInt(params[1], 2);
    //                 cookie.save('level', level);
    //                 break;
    //         }
    //     }
    //
    //     // $('.menu li .btn').removeClass('active');
    //     // $('.menu .'+op).addClass('active');
    //     // $('.menu .level'+level).addClass('active');
    //     // go();
    // }

    render() {
        console.log('header', this.props);

        return (
            <nav className="menu">

                <Op data={this.props.operations}
                    handleOperationType={this.props.handleOperationType}
                    currentOperation={this.props.currentOperation}/>

                <Level levels={this.props.levels} />

            </nav>
        );
    }
}

export default Header;
