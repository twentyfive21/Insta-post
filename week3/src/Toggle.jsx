import React, {useState} from 'react'

function Toggle() {

    const [button, setButton] = useState(true);
    
    const handleButton = () => {
        setButton(!button)
    }

  return (
    {handleButton, button}
  )
}

export default Toggle