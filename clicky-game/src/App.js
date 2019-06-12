import React from "react";
import Navbar from "./Components/Navbar";
import Jumbotron from "./Components/Jumbotron";
import Main from "./Components/Main";
import "./style.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      //
      score: 0,
      topScore: 0,
      correctGuess: false,
      clickedCards: []
    };
    this.clickScore = this.clickScore.bind(this);
  }
  clickScore() {
    this.setState({
      score: this.state.score + 1,
      topScore:
        this.state.score >= this.state.topScore
          ? this.state.score + 1
          : this.state.topScore
      // topScore: this.state.score + 1
    });
    // clickedCards : clickedCards.push()

    // // clickedChar = (id) => {
    //   if(this.state.clickedChar.includes(id)){
    //     this.setState({score: 0, clickedCards: [], correctGuess: false})
    //   }
    //   else{
    //     this.setState({clickedCards: ...this.state.clickedCards, id})
    //     this.setState({score: this.state.score + 1})
    //   }
    // }
  }

  render() {
    console.log(this.state.score);
    return (
      <div className="App">
        <Navbar state={this.state} />
        <Jumbotron />
        <Main onClick={this.clickScore} />
      </div>
    );
  }
}

export default App;

// Click action
// Clicking the same image
// Shuffling
// CSS for cards
