const login = (data) => {
  return fetch('/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    data: data
  });
};

export const userService = {
  login
};