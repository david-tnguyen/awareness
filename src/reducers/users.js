import {
  LOGIN_USER,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  REGISTER_USER,
  REGISTER_SUCCESS_USER,
  REGISTER_ERROR_USER
} from '../constants';

const user = (state = {
  isLoading: false,
  authenticated: true
}, action) => {
  switch(action.type) {
    case LOGIN_USER:
      return { ...state, isLoading: true };
    case LOGIN_SUCCESS:
      return { ...state, isLoading: false, authenticated: true, error: '' };
    case LOGIN_ERROR:
      return { ...state, isLoading: false, authenticated: false, error: 'error' };
    case REGISTER_USER:
      return { ...state, isloading: true };
    case REGISTER_SUCCESS_USER:
      return { ...state, isLoading: false };
    case REGISTER_ERROR_USER:
      return { ...state, isLoading: false };
    default:
      return state;
  }
}

export default user;