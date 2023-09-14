import { useEffect, useState } from "react";

function Clock() {

 const time = useTime();
  
  return (
    <>
      <p>{time.toLocaleString()}</p>
    </>
  );
}

export default Clock;

const useTime = () => {
  const [time, setTime] = useState(new Date());

  useEffect(()=>{
    const sec = window.setInterval(()=>{
      setTime(new Date());
    }, 1000);

    return () => clearInterval(sec);
  },[])

  return time;
}