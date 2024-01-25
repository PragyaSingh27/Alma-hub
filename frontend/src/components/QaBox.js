import { Avatar } from '@material-ui/core'
import React from 'react'
import './css/QaBox.css'
import { useSelector } from 'react-redux'
import { selectUser } from '../feature/userSlice'

function QaBox() {
  const user=useSelector(selectUser)

  return (
    <div className='quoraBox'>
        <div className='quoraBox__info'>
            <Avatar src={user?.photo}/>
        </div>
        <div className='quoraBox__quora'>
            <h5 >What is your question or link?</h5>
        </div>
    </div>
  )
}

export default QaBox
