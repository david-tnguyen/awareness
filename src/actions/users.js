import types from '../constants';
import { userService } from '../services/user';

export const userActions = {
  login
};

const loginSuccess = (data) => {
  return {
    type: types.LOGIN_SUCCESS,
    data
  };
}

const loginError = () => {
  return {
    type: types.LOGIN_ERROR
  };
};

const login = (username, password, successPath) => {
  return dispatch => {
    dispatch({ type: types.LOGIN_USER })
    userService.login(username, password)
    .then((response) => {
      if (response.data.success) {
        dispatch(loginSuccess(data));
      } else {
        dispatch(loginError());
        return response.data.message;
      }
    })
    .catch((response) => {
      console.log(`Error ${response.message}`);
    });
  };
};