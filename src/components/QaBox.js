import { Avatar } from '@material-ui/core'
import React from 'react'
import './css/QaBox.css'
function QaBox() {
  return (
    <div className='qaBox'>
        <div className='qaBox__info'>
            <Avatar/>
        </div>
        <div className='qaBox__qa'>
            <h5>Ask a Question.</h5>
        </div>
    </div>
  )
}

export default QaBox
