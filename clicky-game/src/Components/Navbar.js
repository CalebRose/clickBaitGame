// randomize array order
// it will then rerender
import React from "react";
import Main from "./Main";
import GameStatus from "./GameStatus";

const Navbar = props => {
  console.log(props.state.correctGuess);
  return (
    <nav id="nav">
      <ul className="container" id="navContainer">
        <li className="NavElements">Clicky Game</li>

        <GameStatus state={props.state} />
        <li className="NavElements">
          Score: {props.state.score} | Top Score: {props.state.topScore}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
