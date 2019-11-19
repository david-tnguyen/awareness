const login = (data) => {
  return fetch('http://localhost:8080/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    data: data
  });
};

export const userService = {
  login
};