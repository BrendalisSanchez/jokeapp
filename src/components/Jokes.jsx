import React, { useState, useEffect } from "react";
import jokeService from "../jokeService";
import headerpresentation from "../assets/headerpresentation.gif";
//import blackskygalaxy from "../assets/blackskygalaxy.png";
import { TabContainer, Row, Col, Card, CardGroup } from "react-bootstrap";

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
      // <div
      //   className="col-4"
      //   id={aJoke.id}
      //   key={"ListA-" + aJoke.id}
      //   style={{
      //     display: "flex",
      //     alignItems: "center",
      //     justifyContent: "center",
      //   }}
      // >
      //   <Card className="col-4">
      //     {/* <div className="card" style={{ width: "18rem" }}>
      //     <div className="card-body">
      //       <br /> */}
      //     <h2 className="card-title">
      //       {aJoke.category} - {aJoke.type}
      //     </h2>
      //     <h3 className="card-text">{aJoke.joke}</h3>
      //     <h3>{aJoke.setup}</h3>
      //     <p>{aJoke.delivery}</p>
      //     {/* <br />
      //     </div>
      //   </div> */}
      //   </Card>
      // </div>
      <React.Fragment>
        <Card
          border="light"
          style={{ width: "18rem" }}
          className="col-2"
          key={"ListA-" + aJoke.id}
        >
          <Card.Body>
            <Card.Title>Light Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
        <br />
      </React.Fragment>
    );
  };
  //#endregion

  return (
    <TabContainer
      defaultActiveKey="grid"
      // style={{
      //   backgroundImage: `url(${blackskygalaxy})`,
      //   backgroundSize: "cover",
      //   backgroundPosition: "center center",
      //   backgroundRepeat: "no-repeat",
      // }}
    >
      <Row>
        <Col className="col-12">
          <img
            src={headerpresentation}
            alt="loading..."
            onClick={onToggleJokes}
          />
        </Col>
      </Row>

      <Row className="col-12">
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

          {/* <div className="row">{showJokes && jokeData}</div> */}
          {/* <div>{showJokes && jokeData}</div> */}
          <CardGroup>{showJokes && jokeData}</CardGroup>
        </Col>
      </Row>

      <CardGroup>
        <Card>
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This card has supporting text below as a natural lead-in to
              additional content.{" "}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
      </CardGroup>
    </TabContainer>
  );
}

export default Jokes;
