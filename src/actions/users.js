import types from '../constants';

export const userActions = {
  login
};

const login = (username, password, successPath) => {
  return dispatch => {
    dispatch({ type: types.LOGIN_SUCCESS })
  };
};