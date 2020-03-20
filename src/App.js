import React from 'react';
import './App.css';
import ResultComponent from './Components/ResultComponent';
import KeyPad from './Components/KeyPad.jsx';

export default class App extends React.Component {
    constructor(){
        super();

        this.state = {
            result: ''
        }
    }

    onClick = button =>{
        if(button === '='){
            this.calculate()
        } else if(button === 'C'){
            this.reset()
        }else {
            this.setState({
                result: this.state.result + button
            })
        }
    }
    
    calculate = () => {
        this.setState({
            result: (eval(this.state.result) || "" ) + ""
        })
    }

    reset=()=> {
        this.setState({
            result:""
        })
    };

    render(){
         return (
        <div className="calc">
            <div className="display">
                < ResultComponent result={this.state.result}/>
            </div>
           <KeyPad onClick={this.onClick} />
        </div>
    );
    }
}
