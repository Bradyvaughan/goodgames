export const getAllLibraries = (userId) => ({
  type: "GET_ALL_LIBRARIES",
  userId
});

export const getLibrary = (id) =>({
  type: "GET_LIBRARY",
  id
});

export const createLibrary = (userId, library) =>  ({
  type: "CREATE_LIBRARY",
  userId,
  library
});

export const deleteLibrary = (id) => ({
  type: "DELETE_LIBRARY",
  id
});

export const receiveLibrary = (library) => ({
  type: "RECEIVE_LIBRARY",
  library
});

export const receiveAllLibraries = (libraries) => ({
  type: "RECEIVE_ALL_LIBRARIES",
  libraries
});

export const receiveErrors = (errors) => ({
  type: "RECEIVE_ERRORS",
  errors
});
