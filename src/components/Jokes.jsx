import React, { useState, useEffect } from "react";
import jokeService from "../jokeService";
import headerpresentation from "../assets/headerpresentation.gif";
//import blackskygalaxy from "../assets/blackskygalaxy.png";
import { TabContainer, Row, Col } from "react-bootstrap";

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
        id={aJoke.id}
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
    <TabContainer>
      <Row>
        <Col className="col-4">
          {/* <div
        className="container"
        // style={{
        //   backgroundImage: `url(${blackskygalaxy})`,
        //   backgroundSize: "cover",
        //   backgroundPosition: "center center",
        //   backgroundRepeat: "no-repeat",
        // }}
      > */}
          <img src={headerpresentation} alt="loading..." />

          <div className="row">{showJokes && jokeData}</div>

          <div className="card">
            <h5 className="card-header">Featured</h5>
            <div className="card-body">
              <h5 className="card-title">Special title treatment</h5>
              <p className="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              {showJokes && jokeData}
            </div>
          </div>

          <button type="button" id="showHideCharBtn" onClick={onToggleJokes}>
            {" "}
            Show/Hide{" "}
          </button>
          {/* </div> */}
        </Col>
      </Row>
    </TabContainer>
  );
}

export default Jokes;
