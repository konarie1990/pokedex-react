import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
      number: ""
    };
  }

  componentDidMount() {
    fetch("https://pokeapi.co/api/v2/pokemon/39")
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log(data);
        this.setState({ data });
      });
  }

  render() {
    if (this.state.data === null) {
      return <h1>LOADING BRUH</h1>;
    }
    return (
      <div>
        <h1>Pokedex for {this.state.data.name}</h1>
        <img src={this.state.data.sprites.front_shiny} />
        <div>
          {this.state.data.abilities.map((item, i) => {
            return (
              <p
                key={i}
                style={{
                  backgroundColor: item.is_hidden ? "red" : "white"
                }}
              >
                {item.ability.name}
              </p>
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
