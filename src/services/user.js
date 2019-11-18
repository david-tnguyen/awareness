export const userService = {
  login
};

const login = (username, password) => {
  return fetch('/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({  username, password })
  });
};