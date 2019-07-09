import React from "react";
import Navbar from "./Components/Navbar";
import Jumbotron from "./Components/Jumbotron";
import Main from "./Components/Main";
import CharCard from "./Components/CharCard";
import CharData from "./Components/CharData";
import "./style.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      //
      score: 0,
      topScore: 0,
      correctGuess: true,
      startOfGame: true,
      clickedCards: [],
      CharData: CharData
    };
    this.clickScore = this.clickScore.bind(this);
    // this.clickedChar = this.clickedChar.bind(this);
  }
  clickScore = event => {
    console.log("THE KEY IS " + event.target.id);
    let shuffledData = this.state.CharData.sort(() => Math.random() - 0.5);
    if (this.state.clickedCards.includes(event.target.id)) {
      // this.state.clickedCards.some(id => ())
      this.setState({ score: 0, clickedCards: [], correctGuess: false });
    } else {
      let updatedCards = this.state.clickedCards.concat(event.target.id);
      // shuffle(CharData);
      this.setState({
        clickedCards: updatedCards,
        score: this.state.score + 1,
        correctGuess: true,
        startOfGame: false,
        topScore:
          this.state.score >= this.state.topScore
            ? this.state.score + 1
            : this.state.topScore
      });
    }
    this.setState({ CharData: shuffledData });
    //rearrange = (arr) => {
    // let currentGuess = arr.length
    // }
  };
  render() {
    return (
      <div className="App">
        <Navbar state={this.state} />
        <Jumbotron />
        <Main onClick={this.clickScore} tiles={this.state.CharData} />
      </div>
    );
  }
}

export default App;

// Click action
// Clicking the same image
// Shuffling
// CSS for cards
