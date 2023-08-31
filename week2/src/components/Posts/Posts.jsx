import React from 'react'
import './Posts.css'
import dotDark from '../../assets/posts/dotDark.png'
import dotLight from '../../assets/posts/dotLight.png'
import next from '../../assets/posts/next.png'

function Posts({item}) {
  return (
    <div className='single-post'>
        <div className='username-section'>
        <div className='user-left'>
            <img src={item.avatar} alt={item.username} />
            <p>{item.username}</p>
        </div>
        <img src={dotDark} alt='dots'/>
        </div>
        <div className='user-img'>
            <img src={item.post} alt={item.username}/>
            <img src={dotLight} className='user-dot' alt='dots'/>
            <img src={next} className='user-next' alt='next-btn'/>
        </div>
    </div>
  )
}

export default Posts