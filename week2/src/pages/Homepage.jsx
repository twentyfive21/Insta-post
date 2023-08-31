import React from 'react'
import './Homepage.css'
import Header from '../components/Header/Header'
import Follow from '../components/Follow/Follow'
import Stories from '../components/Stories/Stories'
import next from '../assets/posts/next.png'
import Suggest from '../components/Suggest/Suggest'
import Posts from '../components/Posts/Posts'

function Homepage({userData}) {
  return (
    <div>
    <Header />
    <section className='main-container'>
      <div className='left-container'>
          <div className='stories-container'>
          {
            userData[1].users.map((item, index) => <Stories item={item} index={index} key={item.key}/>)
          }
          <img className='stories-nextbtn' src={next} alt='next-btn'/>
          </div>
          <Posts item={userData[3].users[0]}/>
          <Suggest item={userData[2].users}/>
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