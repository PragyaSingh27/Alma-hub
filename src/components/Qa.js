import React from 'react'
import QaHeader from './QaHeader.js'
import Sidebar from './Sidebar.js'
import Feed from './Feed.js'
import Widget from './Widget.js'
import './css/Qa.css'


function Qa() {
  return (
    <div classname='qa'>
      <QaHeader />
      <div className='qa__contents'>
        <div className='qa__content'>
            <Sidebar />
            <Feed />
            <Widget/>
        </div>
      </div>
    </div>
  )
}

export default Qa
