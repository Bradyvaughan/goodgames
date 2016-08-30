export const login = (user) => ({
  type: "LOGIN",
  user
});
export const logout = () => ({
  type: "LOGOUT"
});

export const signUp = (user) => ({
  type: "SIGN_UP",
  user
});

export const receiveCurrentUser = (user) => ({
  type: "RECEIVE_CURRENT_USER",
  user
});

export const receiveErrors = (errors) => ({
  type: "RECEIVE_ERRORS",
  errors
});
