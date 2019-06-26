import React, {Component} from 'react';
import logo from "./logo.svg";
import "./App.css"


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userInput: ""
        };
    }

    handleChange(value) {
        this.setState({ userInput: value });
    }

    render(){
        return(
            <div className="App">
                <input onChange={(event) => this.handleChange(event.target.value) } type="'text" />
                <p>{this.state.userInput}</p>
            </div>
        )
    }
}

export default App;
