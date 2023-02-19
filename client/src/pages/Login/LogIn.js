import React, { useEffect, useRef, useState } from 'react'
import './login.css';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getUserInfo, login } from '../../redux/Actions/authActions';
import img from './Login.svg'
const LogIn =()=> {

    const [info,setInfo]=useState({
        email:"",
        password:"",
    })
    const auth= useSelector((state) =>state.authReducer)
     console.log('authNAVBAR',auth.user)
     const profUser = useSelector(state=>state.authReducer.user)
     const loader = useSelector(state=>state.authReducer.isLoading)
    
    const navigate=useNavigate()
    useEffect(()=>{
     
        if(auth.isAuth===true){  

          dispatch(getUserInfo());
            navigate('/loader')
            
            
        }
    },[navigate,auth.isAuth])
    const dispatch = useDispatch()
    const handleChange=(e)=>{
        e.preventDefault()
        setInfo({...info,[e.target.name]:e.target.value})
    }
    const r=useRef()
    const r2=useRef()
    const handleLogin=(e)=>{
        e.preventDefault()
        setInfo({email:r.current.value,password:r2.current.value  })
        dispatch(login(info))
      

    }
  
    console.log("info",info)
  return (
    
    <div className='login'>

    <img src={img}></img>
    <form>
      <h1>Login</h1>
      <span className='welcome'>Welcome back now get in here!</span>
      <div>
        <label>Email Address</label>
        <input type={"text"} placeholder="yourname@gmail.com" ref={r}></input>
        <label>Password</label>
        <input type={"password"} placeholder="........." ref={r2}></input>
      
        <button onClick={handleLogin}>Login</button>
        <span>Don't have an account?<NavLink to={"/register"}> Sign Up</NavLink></span>
        <span>-Or -</span>
        <input type={"password"} disabled placeholder="Sign up with your Google account"></input>
        <input type={"password"} disabled placeholder="Sign up with your Facebook account"></input>
      



      </div>
    </form>
    
    
  </div>
  );
}

export default LogIn
