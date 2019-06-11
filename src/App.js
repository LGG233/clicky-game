import React, { Component } from "react";
import ActorCard from "./components/ActorCard/ActorCard"
import Wrapper from "./components/Wrapper/Wrapper";
import Header from "./components/Header/Header";
import actors from "./actors.json";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      actors,
      clicked: [],
      currentScore: 0,
      highScore: 0
    }
    this.handleClick = this.handleClick.bind(this);
  };

  shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  handleClick = id => {
    if (this.state.clicked.indexOf(id) === -1) {
      this.setState({ clicked: this.state.clicked.concat(id) });
      this.handleIncrement();
      this.handleShuffle();
    } else {
      this.handleReset();
    }
  };

  handleIncrement = () => {
    const runningTotal = this.state.currentScore + 1;
    this.setState({ currentScore: runningTotal });
  };

  handleReset = () => {
    if (this.state.currentScore > this.state.highScore) {
      this.setState({
        currentScore: 0,
        highScore: this.state.currentScore,
        clicked: []
      });
    }
    else {
      this.setState({
        currentScore: 0,
        clicked: []
      });

    }
    this.handleShuffle();
  }

  handleShuffle = () => {
    let shuffledActors = this.shuffleArray(actors);
    this.setState({ actors: shuffledActors });
  };

  render() {
    return (
      <Wrapper>
        <div className="jumbotron">
          <Header>Jeu de Mémoire</Header>
          <h3>Cliquez une photo pour marquer des points. Mais attention : si vous cliquez deux fois le même acteur, vous perdez le jeu...</h3>
          <h2>Votre score: {this.state.currentScore}</h2>
          <h2>High score: {this.state.highScore}</h2>
        </div>
        <br></br>
        <div className="game-board">
          <div className="row">
            {this.state.actors.map(actor => (
              <ActorCard
                onClick={this.handleClick}
                id={actor.id}
                key={actor.id}
                name={actor.name}
                image={actor.image}
              />
            ))}
          </div>
        </div>
      </Wrapper>
    );
  }
}

export default App;
