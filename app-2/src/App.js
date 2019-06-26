import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      favoriteTeams: ["Diamondbacks", "Coyotes", "Athletics", "Cardinals", "Suns"]
    }
  }


  render() {
  let teamsToDisplay = this.state.favoriteTeams.map((element, index) => {
    return <h2 key={index}>{element}</h2>;
  });
    return (
      <div className="App">
        {teamsToDisplay}
      </div>
    );
  }
}

export default App;
