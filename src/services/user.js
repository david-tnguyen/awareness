import axios from 'axios';

const login = (data) => {
  return axios({
    method: 'POST',
    url: 'http://localhost:8080/account/login',
    data: data
  });
};

const register = (data) => {
  return axios({
    method: 'POST',
    url: 'http://localhost:8080/account/register',
    data: data
  });
};

export const userService = {
  login,
  register
};