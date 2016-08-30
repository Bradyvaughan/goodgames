

export const signUp = (user, success, error) => {
  $.ajax({
    type: "POST",
    url: "api/users",
    success,
    error,
    data: user
  });
};

export const login = (user, success, error) => {
  $.ajax({
    type: "POST",
    url: "api/session",
    success,
    error,
    data: user
  });
};

export const logout = (success, error) => {
  $.ajax({
    type: "DELETE",
    url: "api/session",
    success,
    error
  });
};
