import { useState, useEffect, useRef } from 'react';
import './App.css'

function App() {

  const screen = useRef();
  const [size, setSize] = useState({
    width: 0,
    height: 0
  })

  useEffect(()=>{
    setSize({
      width: screen.current.clientWidth,
      height: screen.current.clientHeight
    })
  },[])

  useEffect(()=>{
    window.addEventListener('resize', ()=> setSize({
     width: screen.current.clientWidth,
     height: screen.current.clientHeight
   })) 
   },[])


  return (
    <div ref={screen}>
     <h1>Window Screen Size</h1>
     <p>Width : {size.width}px</p>
     <p>Height : {size.height}px</p>
    </div>
  );
}

export default App
// window.clientHeight, window.clientWidth
