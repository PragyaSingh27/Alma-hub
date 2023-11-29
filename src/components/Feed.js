import React from 'react'
import QaBox from './QaBox'
import './css/Feed.css'
import Post from './Post'
function Feed() {
  return (
    <div className='feed'>
        <QaBox/>
        <Post/>
    </div>
  )
}

export default Feed
