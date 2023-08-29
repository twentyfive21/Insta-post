import React from 'react'
import userData from '../utilities/data'
import Post from '../components/Post/Post'

function CommentPage() {
  return (
    <div className='main-container'>
    <Post userData={userData}/>
    </div>
  )
}

export default CommentPage