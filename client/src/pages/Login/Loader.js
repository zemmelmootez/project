import React, { useState, useEffect } from 'react';
import { deleteUser, getNumberOfFeedbacks, getNumberOfUsers, getUserInfo, showName } from '../../redux/Actions/authActions'
import { Navigate, NavLink, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
function Loader() {
  const dispatch = useDispatch();

useEffect(() => {
  dispatch(getUserInfo());

  const fetchData = async () => {
     await dispatch(showName());
  };
  fetchData();
},[])
const navigate=useNavigate()
const names = useSelector(state => state.authReducer.names);
const profUser = useSelector(state => state.authReducer.user);
switch(profUser&&profUser.role)
{
  case 'admin':navigate('/admin');break;
  default:navigate('/profile');
}
  return (
    <div>
      
    </div>
  )
}

export default Loader
