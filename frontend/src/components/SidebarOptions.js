import React from 'react'
import "./css/SidebarOptions.css";
import { Add } from "@material-ui/icons";
function SidebarOptions() {
  return (
    <div className='sidebarOptions'>
        <div className='sidebarOption'>
            <img src="https://img.icons8.com/ios/50/000000/programming.png" alt="physics" width="30px" height="30px"/>  

            <p>Programming</p>
        </div>
        <div className="sidebarOption">
            <img src="https://img.icons8.com/ios/50/000000/books.png" alt="physics" width="30px" height="30px"/>  

            <p>Books</p>
        </div>
        <div className="sidebarOption">
            <img src="https://img.icons8.com/ios/50/000000/safety-collection-place.png" alt="physics" width="30px" height="30px"/>  
            <p>Society</p>
        </div>
        <div className="sidebarOption">
            <img src="https://img.icons8.com/ios/50/000000/drawing.png" alt="physics" width="30px" height="30px"/>  

            <p>Art</p>
        </div>
        <div className="sidebarOption">
            <img src="https://img.icons8.com/ios/50/000000/music.png" alt="physics" width="30px" height="30px"/>  

            <p>Music</p>
        </div>
        <div className="sidebarOption">
            <img src="https://img.icons8.com/ios/50/000000/math.png" alt="physics" width="30px" height="30px"/>  

            <p>Math</p>
        </div>
        <div className="sidebarOption">
            <img src="https://img.icons8.com/ios/50/000000/head-with-brain.png" alt="physics" width="30px" height="30px"/>  

            <p>Psychology</p>
        </div>
        <div className="sidebarOption">
            <img src="https://img.icons8.com/ios/50/000000/laboratory.png" alt="physics" width="30px" height="30px"/>  

            <p>Science</p>
        </div>
        <div className="sidebarOption">
            <img src="https://img.icons8.com/ios/50/000000/trust.png" alt="physics" width="30px" height="30px"/>  

            <p>Health</p>
        </div>
        <div className="sidebarOption">
            <Add />
            <p className="text">Discover Spaces</p>
        </div>
    </div>
  )
}

export default SidebarOptions
