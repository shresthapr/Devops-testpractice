import React from "react";
import "./App.css";

import Wrapper from "./Container/Counter";

function App() {
  return (
    <div className="App">
      <Wrapper />
      <h3>This is Second Counter</h3>
      <Wrapper />
      <h4>Third Counter </h4>
      <Wrapper />
    </div>
  );
}

export default App;
