import {
  LOGIN_USER,
  LOGIN_SUCCESS,
  LOGIN_ERROR
} from '../constants';

export const user = (state = {
  isLoading: false,
  authenticated: false
}, action) => {
  switch(action.type) {
    case LOGIN_USER:
      return { ...state, isLoading: true };
    case LOGIN_SUCCESS:
      return { ...state, isLoading: false, authenticated: true };
    case LOGIN_ERROR:
      return { ...state, isLoading: false, authenticated: false };
    default:
      return state;
  }
}