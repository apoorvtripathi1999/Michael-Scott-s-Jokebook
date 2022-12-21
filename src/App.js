import React, { useState } from "react";
import logo from "./images/miclemain.jpg";

import "./App.css";
import Joke from "./Joke";
import axios from "axios";

function App() {
  const [jokeData, setJokeData] = useState([]);
  const getJoke = () => {
    axios
      .get(
        `https://v2.jokeapi.dev/joke/Miscellaneous,Pun?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single&amount=1`
      )
      .then((res) => {
        setJokeData(res.data.joke);
      });
  };
  return (
    <div className="App">
      <h1 className="my-3">Michael Scott's Jokebook</h1>
      <img src={logo} className="logo-image" alt="logo" />
      <Joke jokeData={jokeData} />
      <button
        type="button"
        className="btn btn-dark click my-4"
        onClick={() => {
          getJoke();
        }}
      >
        Click Me because that's what she said
      </button>
    </div>
  );
}

export default App;
