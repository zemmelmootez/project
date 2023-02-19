import React, { useState, useEffect } from 'react';
import './Admin.css';
import { deleteUser, getNumberOfFeedbacks, getNumberOfUsers, getUserInfo, showName } from '../../redux/Actions/authActions'
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';

const Admin = () => {
  const dispatch = useDispatch();
    getNumberOfUsers()
  const s = localStorage.getItem("nombre")
    getNumberOfFeedbacks()
  const x=localStorage.getItem("nombrefeed")
  useEffect(() => {
    dispatch(getUserInfo());

    const fetchData = async () => {
       await dispatch(showName());
    };
    fetchData();
  },[])
  const names = useSelector(state => state.authReducer.names);
  const profUser = useSelector(state => state.authReducer.user);
  console.log("feedbacksss",names)
  console.log("name",profUser)
  const handleDelete = (name) => {
    dispatch(deleteUser(name.name));
  };
  return (
    <div className="admin">
      <div className="headerr">
        <NavLink to="/users" className="box" style={{textDecoration:'none',color:'#333'}}>
        <div >
          <h2>Number of Users</h2>
          <p>{s}</p>
        </div>
      </NavLink>        
      <NavLink to="/feeds" className="box" style={{textDecoration:'none',color:'#333'}}>
      <div >
        <h2>Number of Feedback</h2>
        <p>{x}</p>
      </div>
      </NavLink>
    </div>
    <div className="user-list">
        <h2>List of Users</h2>
        <ul>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Number of Feedback</th>
                <th>delete user</th>
              </tr>
            </thead>
            <tbody>
              {names && names.usersWithFeedbacks && names.usersWithFeedbacks.map(name => (
                <tr key={name.id}>
                  <td>{name.name}</td>
                  <td>{name.feedbackCount}</td>
                  <td><button className='delete-button' onClick={() => handleDelete(name)}>delete</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </ul>
      </div>
    </div>
  );
}

export default Admin;
