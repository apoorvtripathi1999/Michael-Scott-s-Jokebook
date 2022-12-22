import React from "react";



function Joke(props) {

  return (
    <div className="card my-4">
      <h3>{props.jokeData.length>0?props.jokeData: "Appo don"}</h3>
    </div>
  );
}

export default Joke;
