import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Jumbotron from "./Components/Jumbotron";
import Main from "./Components/Main";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Jumbotron />
      <Main />
    </div>
  );
}

export default App;
