import React, { useEffect, useRef, useState } from 'react'
import './login.css';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getUserInfo, login } from '../../redux/Actions/authActions';
import img from './SIGN.png'
import { register } from '../../redux/Actions/authActions';

const Signup =()=> {

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
    const handleLogin=(e)=>{
        e.preventDefault()
        dispatch(login(info))

    }
    console.log("info",info)
    const r=useRef()
    const a=useRef()
    const b=useRef()
    const c=useRef()
    const registerr=(e)=>{
        e.preventDefault()
        setInfo({name:r.current.value,email:a.current.value,password:b.current.value})
        dispatch(register(info))
    }
  return (
    
    <div className='login'>

    <img src={img}></img>
    <form>
      <h1>Sign Up</h1>
      <div>
      <label>Username</label>
        <input type={"text"} placeholder="username" ref={r} ></input>
        <label>Email Address</label>
        <input type={"text"} placeholder="yourname@gmail.com" ref={a} ></input>
        <label>Password</label>
        <input type={"password"} placeholder="........." ref={b} ></input>
        <label>Confirm Password</label>
        <input type={"password"} placeholder="........."></input>
        <div className='checkb'>  <input type={"checkbox"} ></input>
        <label>I accept the terms of use and security policy</label>
      
       </div>
        <button onClick={registerr}>Sign up</button>
        <span> Have an account?<NavLink to={"/logIn"}> log In</NavLink></span>



      </div>
    </form>
    
    
  </div>
  );
}

export default Signup
