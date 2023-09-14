import React, {useState, useEffect, useRef} from 'react'

function Screen() {
    
    const screen = useRef();
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

    return (
        {size, handleResize, screen}
        )
    }

  

export default Screen