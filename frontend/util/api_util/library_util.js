export const createLibrary = (userId, library, success, error) => {
  $.ajax({
    type: "POST",
    url: `api/users/${userId}/libraries`,
    success,
    error,
    data: {library: library}
  });
};
export const destroyLibrary = (id, success, error) => {
  $.ajax({
    type: "DELETE",
    url: `api/libraries/${id}`,
    success,
    error,
  });
};
export const getAllLibraries = (userId, success, error) => {
  $.ajax({
    url: `api/users/${userId}/libraries`,
    success,
    error
  });
};
export const getLibrary = (libId, page, success, error) => {
  $.ajax({
    url: `api/libraries/${libId}/pages/${page}`,
    success,
    error
  });
};
