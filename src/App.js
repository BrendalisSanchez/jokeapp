import React from "react";
import "./App.css";
import Jokes from "./components/Jokes";
//import GroupExample from "./components/GroupExample";

function App() {
  return (
    <div className="App">
      <div>
        <Jokes />
        {/* <GroupExample /> */}
      </div>
    </div>
  );
}

export default App;
