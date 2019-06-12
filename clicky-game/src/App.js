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
      correctGuess: false,
      clickedCards: [],
      CharData: CharData
    };
    this.clickScore = this.clickScore.bind(this);
    // this.clickedChar = this.clickedChar.bind(this);
  }
  clickScore(event) {
    console.log("THE KEY IS " + event.target.id);
    this.setState({
      score: this.state.score + 1,
      topScore:
        this.state.score >= this.state.topScore
          ? this.state.score + 1
          : this.state.topScore
      // topScore: this.state.score + 1
    });
    if (this.state.clickedCards.includes(this.state.clickedCards)) {
      // this.state.clickedCards.some(id => ())
      this.setState({ score: 0, clickedCards: [], correctGuess: false });
    } else {
      this.setState({
        clickedCards: this.state.clickedCards.push(event.target.id)
      });
      console.log(this.state.clickedCards);
    }

    // clickedCards : clickedCards.push()
  }
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
