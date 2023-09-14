import { useEffect, useState } from "react";
import Clock from "./Clock";
import Toggle from "../../week3/src/Toggle";

import "./App.css";

function App() {
  const {button, handleButton} = Toggle()

  useEffect(() => {
    
  }, []);

  return (
    <section>
      <button onClick={handleButton}>
        {button ? "Turn off Clock" : "Turn on Clock"}
      </button>
      {button && <Clock/>}
    </section>
  );
}

export default App;
