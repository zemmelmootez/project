import axios from 'axios'
import React, { useRef, useState } from 'react'
import { Outlet, resolvePath } from 'react-router-dom'
import './desc.css'
import {updateFeedback}from '../../redux/Actions/authActions';
import { useDispatch, useSelector } from 'react-redux';
function Desc() {
    const feedback = useSelector(state => state.authReducer.feedback);

    const r=useRef()
    const text=useState()
    const dispatch=useDispatch()
    const [theme,setTheme]=useState()
    const [audience,setAudience]=useState("")
    const[final,setFinal]=useState()
    const [choice,setChoice]=useState()
    const [v,setv]=useState("")
    const show=()=>{
        const str="A description of "+theme+" for "+audience+" audience"+"the theme is "+choice+" with this description : "+r.current.value
        setFinal(str)
        console.log(str)
        axios.post("http://localhost:8000/user/chat",{prompt:final}).then(res=>setv((res.data[0].text)))
        console.log(feedback)

    }
    
  return (
    <div className='description'>
        <label>What is your description for ?</label>
        <div className='buttoncont'>
        <button className='hello'  onClick={(e)=>{setTheme("product");e.target.setAttribute("class","hello")}}>Product</button>
        <button  onClick={(e)=>{setTheme("post");e.target.setAttribute("class","hello")}}>Post</button>
        <button  onClick={(e)=>{setTheme("video");e.target.setAttribute("class","hello")}}>Video</button>
        </div>
        <label>You target audience </label>
        <div className='buttoncont'>
        <input type={"checkbox"} onClick={()=>setAudience(audience+"and adults")}></input>
        <label>Adults</label>
        <input type={"checkbox"} onClick={()=>setAudience(audience+"and Teenagers")}></input>
        <label>Teenagers</label>
        <input type={"checkbox"} onClick={()=>setAudience(audience+"and kids")}></input>
        <label>Kids</label>
        
       </div>
       <label>Theme</label>
       <select onClick={e=>setChoice("technology")}>
            <option value={"technology"}>Technology</option>
        </select>
        <label>Add description</label>
       <textarea  ref={r} id="details" placeholder="enter more details"/>

       <button id='sub' onClick={show}>Generate</button>
       description :
       {v?v:null}
      
     
    </div>
  )
}

export default Desc
