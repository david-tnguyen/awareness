import * as types from '../constants';
import { userService } from '../services/user';
import { createBrowserHistory } from 'history';

const loginUser = () => {
	return { type: types.LOGIN_USER };
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

function registerUser() {
	return { type: types.REGISTER_USER }
}

function registerSuccess() {
	return { type: types.REGISTER_SUCCESS_USER }
}

function registerError() {
	return { type: types.REGISTER_ERROR_USER }
}

export const login = (data, successPath) => {
  return dispatch => {
    dispatch(loginUser());
    userService.login(data)
    .then((response) => {
      console.log(response);
      if (response.data.success) {
        dispatch(loginSuccess(data));
        createBrowserHistory().push(successPath)
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

export const register = (data) => {
	return dispatch => {
		dispatch(registerUser());

		userService.register(data)
    .then(response => {
      console.log(response);
      if (response.data.success) {
        dispatch(registerSuccess());
        dispatch(login(data, "/"));
      } else {
        dispatch(registerError())
        let registerMessage = response.data.message
        return registerMessage
      }
    })
    .catch(response => {
      if (response instanceof Error) {
        console.log('Error', response.message);
      }
    });
	};
};