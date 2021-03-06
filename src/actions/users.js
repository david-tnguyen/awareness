import * as types from '../constants';
import { userService } from '../services/user';
import history from '../history';

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
    return userService.login(data)
    .then((response) => {
      if (response.data.success) {
        dispatch(loginSuccess(data));
        history.push(successPath);
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

		return userService.register(data)
    .then(response => {
      if (response.data.success) {
        dispatch(registerSuccess());
        dispatch(login(data, "/"));
      } else {
        dispatch(registerError())
        return response.data.message;
      }
    })
    .catch(response => {
      if (response instanceof Error) {
        console.log('Error', response.message);
      }
    });
	};
};