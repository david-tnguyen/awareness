import {
  LOGIN_USER,
  LOGIN_SUCCESS,
  LOGIN_ERROR
} from '../constants';

const user = (state = {
  isLoading: false,
  authenticated: false
}, action) => {
  switch(action.type) {
    case LOGIN_USER:
      return { ...state, isLoading: true };
    case LOGIN_SUCCESS:
      return { ...state, isLoading: false, authenticated: true, error: '' };
    case LOGIN_ERROR:
      return { ...state, isLoading: false, authenticated: false, error: 'error' };
    default:
      return state;
  }
}

export default user;