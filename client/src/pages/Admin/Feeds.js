import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { showall } from '../../redux/Actions/authActions';

const Feeds = () => {
  const dispatch = useDispatch();
  const feedback = useSelector(state => state.authReducer.feedback);
  console.log("feedbacksss",feedback)
  useEffect(() => {
    const fetchData = async () => {
      await dispatch(showall());
    };
    fetchData();
  })

  return (
    <div>
 {/* {feedback ? (
      feedback.feedbacks.map((feedback, index) => (
        <div key={index} class="tweet-post">
          <div class="tweet-header">
            <h5>{feedback.name}</h5>
            <span class="updated-at">{feedback.updatedAt}</span>
          </div>
          <p class="tweet-text">{feedback.feedback}</p>    
          </div>
      )
      )) */}
      
    </div>
  )
    }

export default Feeds
