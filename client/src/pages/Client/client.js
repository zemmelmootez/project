import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Outlet, Route, Routes } from 'react-router-dom';
import { getUserInfo, addFeedback, showFeedback, updateFeedback, deleteFeedback, addDislike, addLike } from '../../redux/Actions/authActions';
import './client.css';
import Desc from './Desc';
const   Client = () => {
  const dispatch = useDispatch();
  const profUser = useSelector(state => state.authReducer.user);
  const radioRef = useRef();
  const feedback = useSelector(state => state.authReducer.feedback);

  const [newFeedback, setNewFeedback] = useState('');
  const[newLike,setLikes]=useState(feedback)
  const [editMode, setEditMode] = useState(false);
  const [selectedFeedback, setSelectedFeedback] = useState({});

  useEffect(() => {
    dispatch(getUserInfo());
    const fetchData = async () => {
      await dispatch(showFeedback());
    };
    fetchData();
  }, [newFeedback] ,[newLike]); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: profUser.email,
      feedback: feedbackmsg.current.value,
      feedbacktype: radioRef.current.checked ? 'private' : 'public',
    };
    if (editMode) {
      dispatch(updateFeedback(profUser.email, selectedFeedback.id, feedbackmsg.current.value));
      setEditMode(false);
      setSelectedFeedback({});
    } else {
      dispatch(addFeedback(data));
      setNewFeedback(data);
      console.log('new data', feedbackmsg.current.value);
    }
  };

  const handleEdit = (feedback) => {
    setEditMode(true);
    setSelectedFeedback(feedback);
    feedbackmsg.current.value = feedback.feedback;
    console.log('selectedfeeed', selectedFeedback);
  };

  const handleDelete = (feedback) => {
    dispatch(deleteFeedback(profUser.email, feedback.id));
  };
  
  const handleLike = (feedback) => {
    console.log(feedback)
    dispatch(addLike(profUser._id, feedback.id, feedback.parentId));
    setLikes(feedback.likes);
    
  };
  
  const handleDislike = (feedback) => {
    dispatch(addDislike(profUser._id, feedback.id, feedback.parentId));
  };
  console.log(feedback);
  const feedbackmsg = useRef();
  return (
    <>
    
    <div className='dashboard'>
      <div className='left-side'>
          <NavLink to="descwriter">Description writer</NavLink>
          <NavLink to={"script"}>Script to video</NavLink>
          <NavLink to={"signs"}>Sign generator</NavLink>
          <Routes>
           
          </Routes>
      </div>
      <div className='right'>
        <label>Output</label>

      </div>


    </div>
  
    {/* <div class="container">
    <div class="tweet-compose">
      <textarea placeholder="What's happening?" name="feedback"
          ref={feedbackmsg} ></textarea>
      <div class="tweet-compose-footer">
        <div class="tweet-compose-actions">
        <div>
          
          <label class="rad-label"> 
          <input type="radio" class="rad-input" name="rad" value="public" />
          <div class="rad-design"></div>
          <div class="rad-text">Public</div>
        </label>
        </div>
        <div>
          
  <label class="rad-label">
    <input type="radio" class="rad-input" value="private" name="rad" ref={radioRef} />
    <div class="rad-design"></div>
    <div class="rad-text">Private</div>
  </label>
        </div>
        </div>
        <button class="tweet-submit" onClick={handleSubmit} type="submit">
          {editMode ? 'Update' : 'Submit'}
        </button>      </div>
    </div>
     {feedback ? (
      feedback.feedbacks.map((feedback, index) => (
        <div key={index} class="tweet-post">
          <div class="tweet-header">
            <h5>{feedback.name}</h5>
            <span class="updated-at">{feedback.updatedAt}</span>
          </div>
          <p class="tweet-text">{feedback.feedback}</p>
          <div class="tweet-footer">
            <div class="likes-dislikes">
              <button onClick={() => handleLike(feedback)}>
                <i class="fa fa-thumbs-up"></i> {feedback.likes}
              </button>
              <button onClick={() => handleDislike(feedback)}>
                <i class="fa fa-thumbs-down"></i> {feedback.dislikes}
              </button>
            </div>
            {feedback.name === profUser.name ? (
              <div class="tweet-actions">
                <button onClick={() => handleEdit(feedback)}>
                  <i class="fa fa-edit"></i> Edit
                </button>
                <button onClick={() => handleDelete(feedback)}>
                  <i class="fa fa-trash"></i> Delete
                </button>
              </div>
            ) : null}
          </div>
        </div>
      ))
    ) : (
      <p>No feedback available</p>
    )} 
  </div> */}
    <Outlet />
  </>
  );
};
export default Client;