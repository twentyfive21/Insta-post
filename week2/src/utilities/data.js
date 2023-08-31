// follow imgs 
import abh from '../assets/follow/abh.png'
import im from '../assets/follow/im.png'
import imkir from '../assets/follow/imkir.png'
import org from '../assets/follow/org.png'
import sak from '../assets/follow/sakbrl.png'
import upvox from '../assets/follow/upvox.png'
// stories imgs 
import aur from '../assets/stories/aur.png'
import lowell from '../assets/stories/lowell.png'
import peter from '../assets/stories/peter.png'
import roy from '../assets/stories/roy.png'
import sara from '../assets/stories/sara.png'
import vella from '../assets/stories/vella.png'
// post imgs 
import nPost from '../assets/posts/nancy.png'
import nAvatar from '../assets/posts/nancyAvatar.png'
import gPost from '../assets/posts/gen.png'
import gAvatar from '../assets/posts/genAvatar.png'
import oPost from '../assets/posts/gate.png'
import oAvatar from '../assets/posts/gateAvatar.png'
// suggest imgs 
import fel from '../assets/suggest/fel.png'
import tyler from '../assets/suggest/tyler.png'

const userData = [
  {
    id: 0,
    users: [
        {
           username: "upvox_",
           following: "Upvox",
           src: upvox, 
           status: 'Switch',
        },
        {
            username: "imkir",
            following: "Follows you",
            src: imkir,
            status: 'Follow', 
        },
        {
            username: "organic__al",
            following: "Followed by chirag_singla17",
            src: org, 
            status: 'Follow', 
        },
        {
            username: "im_gr",
            following: "Followed by chirag_singla17",
            src: im, 
            status: 'Follow',
        },
        {
            username: "abh952",
            following: "Follows you",
            src: abh, 
            status: 'Follow', 
        },
        {
            username: "sakbrl",
            following: "Follows you",
            src: sak, 
            status: 'Follow', 
        },
    ]
  },
  {
    id: 1,
    users: [
      {
        username: "aurelio",
        src: aur, 
      },
      {
        username: "saraali",
        src: sara, 
      },
      {
        username: "vella",
        src: vella, 
      },
      {
        username: "peter",
        src: peter, 
      },
      {
        username: "lowell",
        src: lowell, 
      },
      {
        username: "roy",
        src: roy, 
      },
    ]
  },
  {
    id: 2,
    users: [
      {
        username: "Tyler Nix",
        following: "Follows you",
        src: tyler, 
      },
      {
        username: "Fellipe Ditadi",
        following: "Followed by chirag_sin",
        src: fel, 
      },
      {
        username: "R",
        following: "Follow",
        src: '', 
      },
    ]
  },
  {
    id: 3,
    users: [
      {
        username: 'Nancy',
        avatar: nAvatar,
        post: nPost,
      },
      {
        username: 'Genshinimpect',
        avatar: gAvatar,
        post: gPost,
      },
      {
        username: 'oceangate',
        avatar: oAvatar,
        post: oPost,
      },
    ]
  }
]
export default userData