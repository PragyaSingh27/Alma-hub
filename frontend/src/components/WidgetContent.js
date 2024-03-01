import React from 'react'
import ReactHtmlParser from 'html-react-parser';
import { useEffect, useState } from 'react';
import ReactTimeAgo from 'react-time-ago'
import './css/WidgetContent.css'

function WidgetContent() {
  const [data,setData]=useState()
    const [error, setError] = useState(""); 

//api

    async function getData(){
        const response =await fetch("http://localhost:8000/",)

        const result =await response.json()

        if(!response.ok){
            console.log(result.error);
            setError(result.error);
        }
        if(response.ok){
            setData(result);

        }
    }
    useEffect(()=>{
      getData();
  },[]);
  
  console.log(data);

  return (
    <div className='widget__contents'>
      {data &&  data?.map((ele)=>(
        <div className='widget__content'>
            {/* <img src='https://cdn2.iconfinder.com/data/icons/seo-and-development-icon-set-1/200/Mobile-512.png' alt=''/> */}
            <div className='widget__contentTitle'>
                <h4>{ReactHtmlParser(ele.title)}</h4>
                <p style={{fontSize:"12px", marginBottom:"3px"}} className='time'>{new Date(ele.createdAt).toLocaleString()}</p>

                
                <p style={{color:"black"}}>{ReactHtmlParser( ele.description)}</p>
            </div>
        </div>
      ))}
    </div>
  )
}

export default WidgetContent
