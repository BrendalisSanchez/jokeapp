import React from "react";
import { Row, Col, Card } from "react-bootstrap";

function JokeTemplate(props) {
  //const jokes = props.aJoke;
  const category = props.aJoke.category;
  const type = props.aJoke.type;
  const joke = props.aJoke.joke;
  //const id = "/jokes/" + joke.id;

  return (
    <Row xs={1} md={2} className="g-4">
      {/* {Array.from({ length: 4 }).map((_, idx) => ( */}
      <Col>
        <Card>
          <Card.Img variant="top" src="logo192.png" />
          <Card.Body>
            <Card.Title>
              {category} - {type}
            </Card.Title>
            <Card.Text>{joke}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
      {/* ))} */}
    </Row>
  );
}

export default React.memo(JokeTemplate);
