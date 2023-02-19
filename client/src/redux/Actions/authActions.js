import { prefixe } from "../../helpers/Prefixe"
import { ADD_DISLIKE_REQUEST, ADD_FEEDBACK_FAILED, ADD_FEEDBACK_REQUEST, ADD_FEEDBACK_SUCCESS, ADD_LIKE_FAILED, ADD_LIKE_REQUEST, ADD_LIKE_SUCCESS, DELETE_FEEDBACK_FAILED, DELETE_FEEDBACK_REQUEST, DELETE_FEEDBACK_SUCCESS, DELETE_USER_FAILED, DELETE_USER_REQUEST, DELETE_USER_SUCCESS, GET_FEEDBACK_FAILED, GET_FEEDBACK_REQUEST, GET_FEEDBACK_SUCCESS, GET_NAME_FAILED, GET_NAME_REQUEST, GET_NAME_SUCCESS, GET_NUMBER_OF_USERS_FAILED, GET_NUMBER_OF_USERS_REQUEST, GET_NUMBER_OF_USERS_SUCCESS, GET_USER_INFO_FAILED, GET_USER_INFO_REQUEST, GET_USER_INFO_SUCCESS, LOGIN_FAILED, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT, REGISTER_FAILED, REGISTER_REQUEST, REGISTER_SUCCESS, UPDATE_FEEDBACK_FAILED, UPDATE_FEEDBACK_REQUEST, UPDATE_FEEDBACK_SUCCESS } from "./types"
import axios from 'axios'
import { setToken } from "../../helpers/token"
export const login = (info) => async (dispatch) => {

    dispatch({ type: LOGIN_REQUEST })

    try {
        const res = await axios.post(`${prefixe}/user/login`, info)
        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        })
    } catch (err) {
        dispatch({
            type: LOGIN_FAILED,
            payload: err.response.data.msg
        })
    }
}
export const logout = () => {
    return ({
        type: LOGOUT
    })
}
export const getUserInfo = () => async (dispatch) => {
    dispatch({
        type: GET_USER_INFO_REQUEST
    })
    try {
        setToken()
        const res = await axios.get(`${prefixe}/user/UserProfile`)
        dispatch({
            type: GET_USER_INFO_SUCCESS,
            payload: res.data
        })
    } catch (err) {
        dispatch({
            type: GET_USER_INFO_FAILED,
            payload: err.response.data.msg

        })
    }
}
export const register = (info) => async (dispatch) => {
    dispatch({
        type: REGISTER_REQUEST
    })
    try {
        setToken()
        const res = await axios.post(`${prefixe}/user/register`, info)
        dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data
        })
        dispatch(getUserInfo())
    } catch (err) {
        dispatch({
            type: REGISTER_FAILED,
            payload: err.response.data.msg
        })

    }
}
export const getNumberOfUsers = () => {
    axios.get("http://localhost:8000/user/nombre").then(res => localStorage.setItem("nombre", res.data.count))

};
export const getNumberOfFeedbacks = () => {
  axios.get("http://localhost:8000/user/numberfeed").then(res => localStorage.setItem("nombrefeed", res.data.numberOfFeedbacks))

};

export const addFeedback = (feedbackInfo) => async (dispatch) => {
    dispatch({
        type: ADD_FEEDBACK_REQUEST
    })
    try {
        setToken();
        console.log(feedbackInfo);

        const res = await axios.post(`${prefixe}/user/add`, feedbackInfo);
        dispatch({
            type: ADD_FEEDBACK_SUCCESS,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: ADD_FEEDBACK_FAILED,
            payload: err.response.data.msg
        });
    }
};
export const showFeedback = () => async (dispatch) => {
    dispatch({
        type: GET_FEEDBACK_REQUEST,
    });
    try {
        setToken();
        const res = await axios.get(`${ prefixe }/user/showfeed`);
       
        dispatch({
            type: GET_FEEDBACK_SUCCESS,
            payload: res.data,
        });
    } catch (err) {
        dispatch({
            type: GET_FEEDBACK_FAILED,
            payload: err.response.data.msg,
        });
    }
};

export const showName = () => async (dispatch) => {
  dispatch({
      type: GET_NAME_REQUEST,
  });
  try {
      setToken();
      const res = await axios.get(`${ prefixe }/user/showname`);
     
      dispatch({
          type: GET_NAME_SUCCESS,
          payload: res.data,
      });
  } catch (err) {
      dispatch({
          type: GET_NAME_FAILED,
          payload: err.response.data.msg,
      });
  }
};
export const deleteFeedback = (email,feedbackId) => async (dispatch) => {
    console.log(email);
    console.log(feedbackId)
    dispatch({
      type: DELETE_FEEDBACK_REQUEST,
    });
    try {
      setToken();
      const res = await axios.post("http://localhost:8000/user/deletefeedback",
      {
        email:email,
        feedbackId:feedbackId
    });
    dispatch(showFeedback())
      console.log(email,feedbackId)
      dispatch({
        type: DELETE_FEEDBACK_SUCCESS,
        payload: res.data,
      });
     
    } catch (err) {
      dispatch({
        type: DELETE_FEEDBACK_FAILED,
        payload: err.response.data.msg,
      });
    }
  };
  export const deleteUser = (name) => async (dispatch) => {
   
    dispatch({
      type: DELETE_USER_REQUEST,
    });
    try {
      setToken();
      const res = await axios.post("http://localhost:8000/user/deluser",
      {
        name:name
    });
    dispatch(showName())
      dispatch({
        type: DELETE_USER_SUCCESS,
        payload: res.data,
      });
     
    } catch (err) {
      dispatch({
        type: DELETE_USER_FAILED,
        payload: err.response.data.msg,
      });
    }
  };
  export const addLike = (userId,feedbackId,userLiked) => async (dispatch) => {
    console.log('feeeeeeed 2 ',userId,feedbackId,userLiked)
    dispatch({
        type: ADD_LIKE_REQUEST,
      });
    try {
      setToken();
      const res = await axios.post("http://localhost:8000/user/like", {
        userId:userId,
        feedbackId:feedbackId,
        userLiked:userLiked

    });
      dispatch({
        type: ADD_LIKE_SUCCESS,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: ADD_LIKE_FAILED,
        payload: err.response.data.msg
      });
    }
  }; export const addDislike = (userId,feedbackId,userLiked) => async (dispatch) => {
    dispatch({
        type: ADD_DISLIKE_REQUEST,
      });
    try {
      setToken();
      const res = await axios.post(`${prefixe}/user/addDislike`, {
        userId:userId,
        feedbackId:feedbackId,
        userLiked:userLiked

    })
      dispatch({
        type: ADD_LIKE_SUCCESS,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: ADD_LIKE_FAILED,
        payload: err.response.data.msg
      });
    }
  };
  export const updateFeedback = (email,feedbackId,newFeedback) => async (dispatch) => {
    dispatch({
      type: UPDATE_FEEDBACK_REQUEST,
    });
    try {
      setToken();
      const res = await axios.put(`${prefixe}/user/updatefeedback`,{
        email:email,
        feedbackId:feedbackId,
        newFeedback:newFeedback
    });
      dispatch({
        type: UPDATE_FEEDBACK_SUCCESS,
        payload: res.data,
      });
      dispatch(showFeedback());
    } catch (err) {
      dispatch({
        type: UPDATE_FEEDBACK_FAILED,
        payload: err.response.data.msg,
      });
    }
  };
  export const showall = () => async (dispatch) => {
    dispatch({
        type: GET_FEEDBACK_REQUEST,
    });
    try {
        setToken();
        const res = await axios.get(`${ prefixe }/user/showall`);
       
        dispatch({
            type: GET_FEEDBACK_SUCCESS,
            payload: res.data,
        });
    } catch (err) {
        dispatch({
            type: GET_FEEDBACK_FAILED,
            payload: err.response.data.msg,
        });
    }
}




