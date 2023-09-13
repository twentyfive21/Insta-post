import { useState, useEffect, useRef } from 'react';
import './App.css'

function App() {

  const screen = useRef();
  const [resize, setResize] = useState(true)
  const [size, setSize] = useState({
    width: 0,
    height: 0
  })

  const handleResize = () => {
    setSize({
      width: screen.current.clientWidth,
      height: screen.current.clientHeight
    })
  }

  useEffect(()=>{
    if(resize){
      window.addEventListener('resize', handleResize) 
    }
    return () => {
      window.removeEventListener('resize', handleResize)
    }
   },[resize])


  return (
    <div ref={screen}>
     <h1>Window Screen Size</h1>
     <button onClick={()=>setResize(!resize)}>
    {resize ? 'Turn resize off' : 'Turn resize on'}
    </button>
     <p>Width : {size.width}px</p>
     <p>Height : {size.height}px</p>
    </div>
  );
}

export default App
// window.clientHeight, window.clientWidth
