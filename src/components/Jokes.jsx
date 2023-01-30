import React, { useState, useEffect } from "react";
//import { getJoke } from "../jokeService";
import jokeService from "../jokeService";

function Jokes() {
  //#region --- STATE:
  const [jokeData, setJokeData] = useState();
  //   {
  //   arrayOfJokes: [],
  //   jokeComponents: [],
  // }

  //console.log(jokeData.arrayOfJokes, "this is the arrayOfJokes");

  //#endregion

  //#region --- JOKES AJAX CALL CODE:
  useEffect(() => {
    //console.log("firing useEffect for get JOKES AJAX call");
    jokeService().then(onGetJokesSuccess).catch(onGetJokesError);
    // eslint-disable-next-line
  }, []);

  const onGetJokesSuccess = (response) => {
    // console.log(
    //   response.data.jokes,
    //   "this is the response from the axios call"
    // );

    let arrayOfJokes = response.data.jokes;

    setJokeData(() => {
      //const jokeData = [...jokeData];
      // const jokeData = { ...prevState };
      // jokeData.arrayOfJokes = [...jokeData.arrayOfJokes];
      //jokeData.jokeComponents = arrayOfJokes.map(mapJoke);
      const jokeData = arrayOfJokes.map(mapJoke);
      return jokeData;
    });
  };

  const onGetJokesError = (err) => {
    console.log("onGetJokesError", err);
  };
  //#endregion

  // ----- TOGGLE CODE:
  const [showJokes, setShowJokes] = useState(true);

  const onToggleJokes = () => {
    setShowJokes(!showJokes);
  };

  const [toggle, setToggle] = useState(true);

  console.log(toggle);
  console.log(setToggle);
  console.log(onToggleJokes);

  // ----- MAPPING CODE:
  const mapJoke = (aJoke) => {
    return (
      <div className="col-md-3" key={"ListA-" + aJoke.id}>
        <div className="card" style={{ width: "18rem" }}>
          <div className="card-body">
            <h5 className="card-title">
              {aJoke.category} - {aJoke.type}
            </h5>
            <p className="card-text">{aJoke.joke}</p>
            <br />
            <p>{aJoke.setup}</p>
            <p>{aJoke.delivery}</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="container">
      <h3>Programming Jokes</h3>
      <div className="row">{showJokes && jokeData.jokeComponents}</div>
      <button type="button" id="friendsBtn" onClick={onToggleJokes}>
        {" "}
        Show/Hide{" "}
      </button>
    </div>
  );
}

export default Jokes;
