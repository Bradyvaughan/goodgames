

export const signUp = (user, success, errors) => {
  $.ajax({
    type: "POST",
    url: "api/users",
    success,
    errors,
    data: user
  });
};

export const login = (user, success, errors) => {
  $.ajax({
    type: "POST",
    url: "api/session",
    success,
    errors,
    data: user
  });
};

export const logout = (success, errors) => {
  $.ajax({
    type: "DELETE",
    url: "api/session",
    success,
    errors
  });
};
