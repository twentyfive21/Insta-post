import React from 'react'
import './Post.css'
import Comment from '../Comment/Comment'
import userData from '../../utilities/data'
import Collab from '../Collab/Collab'

function Post() {
  return (
    <div>
        <Collab  userData={userData}/>
        {/* {userData.map(user => <img src={user.photo} />)} */}
    </div>
  )
}

export default Post