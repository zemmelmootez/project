import { ADD_DISLIKE_FAILED, ADD_DISLIKE_REQUEST, ADD_DISLIKE_SUCCESS, ADD_FEEDBACK_FAILED, ADD_FEEDBACK_REQUEST, ADD_FEEDBACK_SUCCESS, ADD_LIKE_FAILED, ADD_LIKE_REQUEST, ADD_LIKE_SUCCESS, DELETE_FEEDBACK_FAILED, DELETE_FEEDBACK_REQUEST, DELETE_FEEDBACK_SUCCESS, DELETE_USER_FAILED, DELETE_USER_REQUEST, DELETE_USER_SUCCESS, GET_FEEDBACK_FAILED, GET_FEEDBACK_REQUEST, GET_FEEDBACK_SUCCESS, GET_NAME_FAILED, GET_NAME_REQUEST, GET_NAME_SUCCESS, GET_USER_INFO_FAILED, GET_USER_INFO_REQUEST, GET_USER_INFO_SUCCESS, LOGIN_FAILED, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT, REGISTER_FAILED, REGISTER_REQUEST, REGISTER_SUCCESS, UPDATE_FEEDBACK_FAILED, UPDATE_FEEDBACK_REQUEST, UPDATE_FEEDBACK_SUCCESS } from "../Actions/types";

const initState = {
    token: localStorage.getItem('token'),
    isAuth: Boolean(localStorage.getItem('isAuth')),
    user: JSON.parse(localStorage.getItem('user')),
    isLoading: false,
    errors: null,
    feedback:"",
}
const authReducer = (state = initState, { type, payload }) => {

    switch (type) {
        case LOGIN_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case LOGIN_SUCCESS:
            localStorage.setItem('token', payload.accessToken)
            localStorage.setItem('isAuth', true)

            return {
                ...state,
                isLoading: false,
                isAuth: true,
                token: payload.accessToken,
                errors: null
            }
        case LOGIN_FAILED:
            return {
                ...state,
                token: null,
                isAuth: false,
                user: null,
                isLoading: false,
                errors: payload,
            }
        case LOGOUT:
            localStorage.clear()
            return {
                ...state,
                token: null,
                isAuth: false,
                user: null,
                isLoading: false,
                errors: null,
            }
        case GET_USER_INFO_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case GET_USER_INFO_SUCCESS:
            localStorage.setItem('user', JSON.stringify(payload))
            return {
                ...state,
                isLoading: false,
                user: payload
            }
        case GET_USER_INFO_FAILED:
            return {
                ...state,
                isLoading: false,
                user: null,
                token: null,
                isAuth: false,
                errors: payload
            }
        case REGISTER_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case REGISTER_SUCCESS:
            localStorage.setItem('token', payload)
            localStorage.setItem('isAuth', true)
            return {
                ...state,
                isLoading: false,
                isAuth: true,
                token: payload,
                errors: null
            }
        case REGISTER_FAILED:
            return {
                ...state,
                token: null,
                isAuth: false,
                user: null,
                isLoading: false,
                errors: payload,
            }
        case ADD_FEEDBACK_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case ADD_FEEDBACK_SUCCESS:
            return {
                ...state,
                isLoading: false,
                errors: null
            }
        case ADD_FEEDBACK_FAILED:
            return {
                ...state,
                isLoading: false,
                errors: payload
            }
        case GET_FEEDBACK_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case GET_FEEDBACK_SUCCESS:
            return {
                ...state,
                feedback: payload,
                isLoading: false,
                errors: null
            }
        case GET_FEEDBACK_FAILED:
            return {
                ...state,
                feedback: [],
                isLoading: false,
                errors: payload
            }
            case DELETE_FEEDBACK_REQUEST:
                return {
                  ...state,
                  isLoading: true,
                };
              case DELETE_FEEDBACK_SUCCESS:
                return {
                  ...state,
                  isLoading: false,
                  errors: null,
                };
              case DELETE_FEEDBACK_FAILED:
                return {
                  ...state,
                  isLoading: false,
                  errors: payload,
                };
                case DELETE_USER_REQUEST:
                return {
                  ...state,
                  isLoading: true,
                };
              case DELETE_USER_SUCCESS:
                return {
                  ...state,
                  isLoading: false,
                  errors: null,
                };
              case DELETE_USER_FAILED:
                return {
                  ...state,
                  isLoading: false,
                  errors: payload,
                };
              case UPDATE_FEEDBACK_REQUEST:
                return {
                  ...state,
                  isLoading: true,
                  feedback:payload
                };
              case UPDATE_FEEDBACK_SUCCESS:
                return {
                  ...state,
                  isLoading: false,
                  errors: null,
                };
              case UPDATE_FEEDBACK_FAILED:
                return {
                  ...state,
                  isLoading: false,
                  errors: payload,
                };
                case ADD_LIKE_REQUEST:
                    return {
                        ...state,
                        isLoading: true
                    }
                case ADD_LIKE_SUCCESS:
                    return {
                        ...state,
                        isLoading: false,
                        errors: null
                    }
                case ADD_LIKE_FAILED:
                    return {
                        ...state,
                        isLoading: false,
                        errors: payload
                    }
                case ADD_DISLIKE_REQUEST:
                    return {
                        ...state,
                        isLoading: true
                    }
                case ADD_DISLIKE_SUCCESS:
                    return {
                        ...state,
                        isLoading: false,
                        errors: null
                    }
                case ADD_DISLIKE_FAILED:
                    return {
                        ...state,
                        isLoading: false,
                        errors: payload
                    }
                    case GET_NAME_REQUEST:
                        return {
                            ...state,
                            isLoading: true
                        }
                    case GET_NAME_SUCCESS:
                        return {
                            ...state,
                            isLoading: false,
                            names: payload,
                            errors: null
                        }
                    case GET_NAME_FAILED:
                        return {
                            ...state,
                            isLoading: false,
                            names: [],
                            errors: payload,
                        }
            
        default:
            return state
    }
}
export default authReducer