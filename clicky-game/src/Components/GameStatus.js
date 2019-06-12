import React from "react";

var GameStatus = props => {
  if (props.state.startOfGame === true) {
    return <li className="NavElements">Click an image to begin</li>;
  } else {
    return (
      <li className="NavElements">
        {props.state.correctGuess === true ? (
          <h1>You have Guessed Correctly</h1>
        ) : (
          <h1>You are INCORRECT</h1>
        )}
      </li>
    );
  }
};

export default GameStatus;
