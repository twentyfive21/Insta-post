import { useEffect, useState } from "react";

function Clock() {
  const [time, setTime] = useState(new Date());
  
  return (
    <>
      <p>{time.toLocaleString()}</p>
    </>
  );
}

export default Clock;