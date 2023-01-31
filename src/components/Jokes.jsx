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

      // <div
      //   id="carouselExampleAutoplaying"
      //   className="carousel slide"
      //   data-bs-ride="carousel"
      // >
      //   <div className="carousel-inner">
      //     <div className="carousel-item active">{eachJoke}</div>
      //     <div className="carousel-item">
      //       <img src="..." className="d-block w-100" alt="..." />
      //     </div>
      //     <div className="carousel-item">
      //       <img src="..." className="d-block w-100" alt="..." />
      //     </div>
      //   </div>
      //   <button
      //     className="carousel-control-prev"
      //     type="button"
      //     data-bs-target="#carouselExampleAutoplaying"
      //     data-bs-slide="prev"
      //   >
      //     <span className="carousel-control-prev-icon" aria-hidden="true" />
      //     <span className="visually-hidden">Previous</span>
      //   </button>
      //   <button
      //     className="carousel-control-next"
      //     type="button"
      //     data-bs-target="#carouselExampleAutoplaying"
      //     data-bs-slide="next"
      //   >
      //     <span className="carousel-control-next-icon" aria-hidden="true" />
      //     <span className="visually-hidden">Next</span>
      //   </button>
      // </div>
    );
  };

  // const eachJoke = (aJoke) => {
  //   <div class="card" key={"ListA-" + aJoke.id}>
  //     <div class="card-header">
  //       {aJoke.category} - {aJoke.type}
  //     </div>
  //     <div class="card-body">
  //       <blockquote class="blockquote mb-0">
  //         <p>{aJoke.joke}</p>
  //         <p>{aJoke.setup}</p>
  //         <footer class="blockquote-footer">
  //           {aJoke.delivery} <cite title="Source Title">Source Title</cite>
  //         </footer>
  //       </blockquote>
  //     </div>
  //   </div>;
  // };

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
