import axios from 'axios';

const login = (data) => {
  return axios({
    method: 'POST',
    url: 'http://localhost:8080/login',
    data: data
  });
};

export const userService = {
  login
};