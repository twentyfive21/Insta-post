import React from 'react'
import './Homepage.css'
import Header from '../components/Header/Header'
import Follow from '../components/Follow/Follow'

function Homepage({userData}) {
  return (
    <div>
    <Header />
    <section>
      <div>

      </div>
      <div className='follow-right'>
      <Follow item={userData[0].users[0]} style={{backgroundColor: '#F5F5F5'}}   />
      <div className='right-sug'>
      <p>Suggestions for you</p>
      <p>See All</p>
      </div>
      <Follow item={userData[0].users[1]}/>
      <Follow item={userData[0].users[2]}/>
      <Follow item={userData[0].users[3]}/>
      <Follow item={userData[0].users[4]}/>
      <Follow item={userData[0].users[5]}/>
      </div>
    </section>
    </div>
  )
}

export default Homepage