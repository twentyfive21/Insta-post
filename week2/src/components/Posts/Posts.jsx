import {React, useState} from 'react'
import './Posts.css'
import dotDark from '../../assets/posts/dotDark.png'
import dotLight from '../../assets/posts/dotLight.png'
import next from '../../assets/posts/next.png'
import { AiOutlineHeart, AiFillHeart} from "react-icons/ai";  
import comment from '../../assets/posts/comment.png'
import share from '../../assets/posts/share.png'
import save from '../../assets/posts/save.png'
import smile from '../../assets/posts/smile.png'

function Posts({item, style}) {

    const [like, setLike] = useState(false)
    const [comments, setComments] = useState([])
    const [input, setInput] = useState('')

    const handleSubmit = e => {
        e.preventDefault();
        const newComment = e.target.elements.comment.value;
        setComments(prev => [...prev, newComment]);
    }
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
            <img src={next} style={style} className='user-next' alt='next-btn'/>
        </div>
        <div className='interact-section'>
            <div className='interact-left'>
           <button onClick={()=>setLike(!like)}>
            {
            like ? <AiFillHeart className='like-filled like-btn'/> : <AiOutlineHeart className='like-btn'/> 
            }
            </button> 
            <button><img src={comment} /></button>
            <img src={share} />
            </div>
            <img src={save} />
        </div>
        <div className='comment-container'>
            <p className='comment-likes'>741,368 likes</p>
            <p className='caption'>lewishamilton <span>Parabéns Ayrton, minha inspiração sempre 🇧🇷💫</span></p>
            <p className='translation'>See translation</p>
            <p className='comment-count'>View all 13,384 comments</p>
            {
                comments.map(comment => 
                <p key={comment} className='added-comment'>
                <span className='comment-user'>tinawinnn :</span>
                <span className='comment-text'>{comment}</span>
                </p>)
            }
            <div className='comment-section'>
                <form onSubmit={handleSubmit}>
                <input name="comment" placeholder='Add a comment…' className='add-comment' />
                </form>
                <img src={smile} alt='smile'/>
            </div>
        </div>
    </div>
  )
}

export default Posts