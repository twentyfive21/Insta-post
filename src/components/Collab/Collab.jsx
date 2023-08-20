import React from 'react'
import './Collab.css'
import details from '../../assets/dots.png'


function Collab({userData}) {
  return (
    <div className='collab-container'>
        <div className='collab-left'>
        <section>
        <img src={userData[3].photo} className='p-circle' alt='profile pic'/>
        <img src={userData[0].photo} className='p-height' alt='profile pic' />
        </section>
        <section className='collab-users'>
            <p>rafel and open</p>
            <p>2073</p>
        </section>
        </div>
        <img src={details} alt='detail dots' className='dots'/>
    </div>
  )
}

export default Collab