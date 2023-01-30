//import logo from "./logo.svg";
import React from "react";
import "./App.css";
import Characters from "./components/Characters";

function App() {
  return (
    <div className="container">
      <h3>Game of Thrones Characters</h3>
      <div className="row">
        {/* {showCharacters && pageData.characterComponents} */}
        <Characters />
      </div>
    </div>
  );
}

export default App;
