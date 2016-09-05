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

export const receiveSignUpErrors = (errors) => ({
  type: "RECEIVE_SIGN_UP_ERRORS",
  errors
});
export const receiveLogInErrors = (errors) => ({
  type: "RECEIVE_LOG_IN_ERRORS",
  errors
});
