import { useState, useEffect, useRef } from 'react';
import './App.css'
import Toggle from './Toggle';
import Screen from './Screen';

function App() {

  const {handleButton, button} = Toggle();
  const {size, handleResize, screen} = Screen();

  useEffect(()=>{
    if(button){
      window.addEventListener('resize', handleResize) 
    }
    return () => {
      window.removeEventListener('resize', handleResize)
    }
   },[button, handleResize])

  return (
    <div ref={screen}>
     <h1>Window Screen Size</h1>
     <button onClick={handleButton}>
    {button ? 'Turn resize off' : 'Turn resize on'}
    </button>
     <p>Width : {size.width}px</p>
     <p>Height : {size.height}px</p>
    </div>
  );
}

export default App

