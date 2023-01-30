import React, { useState, useEffect } from "react";
//import apiService from "../apiService";
import options from "../apiService";

function Characters() {
  //#region --- STATE:
  const [pageData, setPageData] = useState({
    arrayOfCharacters: [],
    characterComponents: [],
  });
  //#endregion

  //#region --- AXIOS CALL:
  useEffect(() => {
    options().then(onGetCharacterSuccess).catch(onGetCharacterError);
    // eslint-disable-next-line
  }, []);

  const onGetCharacterSuccess = (response) => {
    console.log("get characters axios call success");
    let arrayOfCharacters = response.data;

    setPageData((prevState) => {
      const pageData = { ...prevState };
      pageData.arrayOfCharacters = [...pageData.arrayOfCharacters];
      pageData.characterComponents = arrayOfCharacters.map(mapCharacter);
      return pageData;
    });
  };

  const onGetCharacterError = (err) => {
    console.log("onGetCharacterError", err);
  };
  //#endregion

  //#region --- TOGGLE:
  const [showCharacters, setShowCharacters] = useState(true);

  const onToggleCharacters = () => {
    setShowCharacters(!showCharacters);
  };

  const [toggle, setToggle] = useState(true);

  console.log(toggle);
  console.log(setToggle);
  console.log(onToggleCharacters);
  //#endregion

  //#region --- MAPPING:
  const mapCharacter = (aCharacter) => {
    return (
      // <div
      //   className="col-4"
      //   key={"ListA-" + aCharacter.id}
      //   style={{
      //     display: "flex",
      //     alignItems: "center",
      //     justifyContent: "center",
      //   }}
      // >
      <div className="col-md-3" key={"ListA-" + aCharacter.id}>
        <div className="card" style={{ width: "18rem" }}>
          <img src={aCharacter.image} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{aCharacter.fullName} </h5>
            <p className="card-text">Family: {aCharacter.family}</p>
            <button
              className="link-btn btn btn-primary"
              onClick={onToggleCharacters}
            >
              Hide
            </button>
          </div>
        </div>
      </div>
    );
  };
  //#endregion

  return (
    <div className="container">
      <h1>Game of Thrones (GOT) Characters</h1>
      {showCharacters && pageData.characterComponents}
      <button type="button" id="charactersBtn" onClick={onToggleCharacters}>
        {" "}
        Show/Hide{" "}
      </button>
    </div>
  );
}

export default Characters;
