import React, { useEffect } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Qa from './components/Qa';
import { login, selectUser } from './feature/userSlice';
import Login from './components/auth/Login';
import { auth } from './firebase';
import { onAuthStateChanged } from 'firebase/auth';


function App() {
  const user=useSelector(selectUser);
  const dispatch=useDispatch();

  useEffect(()=>{
    onAuthStateChanged(auth, (authUser) =>{
      if(authUser){
        dispatch(
          login({
            userName:authUser.displayName,
            photo:authUser.photoURL,
            email:authUser.email,
            uid:authUser.uid
          })
        )
        console.log('AuthUser',authUser)
      }
    })
  },[dispatch]);



  
  return (
    <div className="App">
      {/* <h1>Hello</h1> */}
      {
        user?(<Qa/>):(<Login/>)
      }
      {/* <Qa/> */}
      
    </div>
  );
}

export default App;
