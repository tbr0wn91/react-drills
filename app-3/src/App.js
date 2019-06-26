import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      filterString: "",
      teams: ["Diamondbacks", "Coyotes", "Athletics", "Cardinals", "Suns"]
    }
  }

  handleChange(filter) {
    this.setState({ filterString: filter });
  }

  render() {
    let teamsToDisplay = this.state.teams.filter((element, index) => {
      return element.includes(this.state.filterString);
    })
    .map((element, index) => {
      return <h2 key={index}>{element}</h2>
    });
    return (
      <div className="App">
        <input onChange={(event) => this.handleChange(event.target.value) } type="text" />
        {teamsToDisplay}
        
      </div>
    );
  }
}

export default App;
