import React, { useState } from 'react'
import './Login.css';
import {signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import {auth,provider} from '../../firebase';
import Register from './Register';
import { useSelector } from 'react-redux';
import { selectUser } from '../../feature/userSlice';
// import { Link } from 'react-router-dom';
// import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

function Login( ) {

  

    const handleSubmit = async() => {
       await signInWithPopup(auth,provider).then((result)=>{
        console.log(result)
       }).catch((error)=>{
            console.log(error);
       })
    }

    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');

    const handleLogin=async(e)=>{
        
        e.preventDefault()

        await signInWithEmailAndPassword(auth,email,password).
        then((auth)=>{
            console.log(auth)
        }).catch((e)=>alert(e.message))
        setPassword("");
        setEmail("");
    }
    const handleRegister= async (e)=>{
        
        e.preventDefault()
        
        await createUserWithEmailAndPassword(auth,email,password).
        then((auth)=>{

            if(auth){
                console.log(auth)
            }
        }).catch((e)=>alert(e.message));
        setPassword("");
        setEmail("");
    }
    
    
  

  return (
    <div className='login'>
        <div className='login__container'>
            <div className='login__logo'>
                <img src='https://media1.tenor.com/m/2sHsTvXPB3QAAAAC/book.gif' alt='logo'/>
            </div>    
            
            <div className="login__desc">
                <p style={{color:"black", fontSize: "30px", fontWeight:"bold"}}>Alma-Hub</p>
                <p>A Place to Interact, Share knowledge and better understand the world.</p>
                <p style={{ color: "royalblue", fontSize: "25px" }}>
                    HandCrafted with ❤️ by{" "}
                </p>
                <h3>Pragya & Tanya</h3>
            </div>

            <div className="login__auth">
                <div className="login__authOptions">
                    <div className="login__authOption">
                        <img
                            className="login__googleAuth"
                            src="https://media-public.canva.com/MADnBiAubGA/3/screen.svg"
                            alt=""
                        />
                        <p onClick={handleSubmit}>Continue with Google</p>
                    </div>
                    <div className="login__authOption">
                        <img
                            className="login__googleAuth"
                            src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Facebook_Logo_2023.png"
                            alt=""
                        />
                       <p> Continue With Facebook </p>
                    </div>
                    <div className="login__authDesc">
                        <p>
                            <span style={{ color: "blue", cursor: "pointer" }}>
                            Sign Up With Email
                            </span>
                            . By continuing you indicate that you have read and agree to
                            Quora's
                            <span style={{ color: "blue", cursor: "pointer" }}>
                            Terms of Service{" "}
                            </span>
                            and{" "}
                            <span style={{ color: "blue", cursor: "pointer" }}>
                            Privacy Policy
                            </span>
                            .
                        </p>
                    </div>
                </div>

                <div className="login__emailPass">
                    <div className="login__label">
                        <h4>Login</h4>
                    </div>
                    <div className="login__inputFields">
                        <div className="login__inputField">
                            <input 
                            value={email}
                            onChange={(e)=>setEmail(e.target.value)}
                            type="text"
                            placeholder="Email"
                            />
                        </div>
                        <div className="login__inputField">
                            <input
                            value={password}
                            onChange={(e)=>setPassword(e.target.value)}
                            type="password"
                            placeholder="Password"
                            />
                        </div>
                    </div>
                    <div className="login__forgButt">
                        <small>Forgot Password?</small>
                        <button type='submit' onClick={handleLogin}>Login</button>
                    </div>
                    <button onClick={handleRegister} >Register</button>
                    {/* <Link to=""><button >Register</button></Link> */}

                </div>
            </div>

            {/* <div className="login__lang">
                <p>हिन्दी</p>
                <ArrowForwardIosIcon fontSize="small" />
            </div> */}
            <div className="login__footer">
                <p>About</p>
                {/* <p>Languages</p>
                <p>Careers</p>
                <p>Businesses</p>
                */}
                <p>Privacy</p>
                <p>Terms</p> 
                <p>Contact</p>
                <p>&copy; Alma-Hub 2024</p>
            </div>
            {/* <button  className='btn-login'>Login to continue</button> */}
        </div>
    </div>
  );
}



export default Login
