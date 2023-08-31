import { useState } from 'react'
import './App.css'
import Homepage from './pages/Homepage'
import userData from './utilities/data'

function App() {

  return (
    <>
    <Homepage userData={userData} />
    </>
  )
}

export default App
