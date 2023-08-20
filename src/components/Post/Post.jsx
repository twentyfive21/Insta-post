import React from 'react'
import './Post.css'
import Comment from '../Comment/Comment'
import userData from '../../utilities/data'
import Collab from '../Collab/Collab'
import Actions from '../Actions/Actions'
import AddComment from '../AddComment/AddComment'

function Post() {
  return (
    <div className='main-box'>
        <section>
            <img src={userData[0].post} alt={userData[0].username}/>
        </section>
        <section>
        <Collab userData={userData}/>
        <Comment userData={userData[0]} />
        <Comment userData={userData[1]} />
        <Comment userData={userData[2]} />
        <Comment userData={userData[3]} />
        <Actions userData={userData[4]} />
        <AddComment />
        </section>
    </div>
  )
}

export default Post