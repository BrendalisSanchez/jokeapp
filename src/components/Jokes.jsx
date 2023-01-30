import React, { useState, useEffect } from "react";
import jokeService from "../jokeService";

function Jokes() {
  //#region --- STATE:
  const [jokeData, setJokeData] = useState();
  //#endregion

  //#region --- AXIOS CALL:
  useEffect(() => {
    jokeService().then(onGetJokesSuccess).catch(onGetJokesError);
    // eslint-disable-next-line
  }, []);

  const onGetJokesSuccess = (response) => {
    let arrayOfJokes = response.data.jokes;

    setJokeData(() => {
      const jokeData = arrayOfJokes.map(mapJoke);
      return jokeData;
    });
  };

  const onGetJokesError = (err) => {
    console.log("onGetJokesError", err);
  };
  //#endregion

  //#region --- TOGGLE:
  const [showJokes, setShowJokes] = useState(true);

  const onToggleJokes = () => {
    setShowJokes(!showJokes);
  };

  const [toggle, setToggle] = useState(true);

  console.log(toggle);
  console.log(setToggle);
  console.log(onToggleJokes);
  //#endregion

  //#region --- MAPPING:
  const mapJoke = (aJoke) => {
    return (
      <div
        className="col-4"
        key={"ListA-" + aJoke.id}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div className="card" style={{ width: "18rem" }}>
          <div className="card-body">
            <br />
            <h2 className="card-title">
              {aJoke.category} - {aJoke.type}
            </h2>
            <h3 className="card-text">{aJoke.joke}</h3>
            <h3>{aJoke.setup}</h3>
            <p>{aJoke.delivery}</p>
            <br />
          </div>
        </div>
      </div>
    );
  };
  //#endregion

  return (
    <div className="container">
      <h1>Programming Jokes</h1>
      {showJokes && jokeData}
      <button type="button" id="friendsBtn" onClick={onToggleJokes}>
        {" "}
        Show/Hide{" "}
      </button>
    </div>
  );
}

export default Jokes;
