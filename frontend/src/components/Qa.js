import React from 'react'
import QaHeader from './QaHeader'
import Sidebar from './Sidebar'
import Feed from './Feed'
import Widget from './Widget'
import './css/Qa.css'

function Qa() {
  return (
    <div className='quora'>
      <QaHeader/>
        <div className='quora__contents'>
            <div className='quora__content'>
                {/* <Sidebar/> */}
                <Feed/>
                <Widget/>
            </div>
        </div>

    </div>
  )
}

export default Qa
