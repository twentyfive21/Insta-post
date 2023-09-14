import { useEffect, useState } from "react";
import Clock from "./Clock";

import "./App.css";

function App() {
  const [runClock, setRunClock] = useState(true);

  useEffect(() => {
    
  }, []);

  return (
    <section>
      <button onClick={() => setRunClock(!runClock)}>
        {runClock ? "Turn off Clock" : "Turn on Clock"}
      </button>
      {runClock && <Clock/>}
    </section>
  );
}

export default App;
