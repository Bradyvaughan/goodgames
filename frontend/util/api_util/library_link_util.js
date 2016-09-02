export const createLibraryLink =
  (userId, libraryId, gameId, success, error) => {
  $.ajax({
    type: "POST",
    url: `api/users/${userId}/libraries/${libraryId}/library_links`,
    success,
    error,
    data: {library_link: {game_id: gameId}}
  });
};

export const destroyLibraryLink = (id, success, error) => {
  $.ajax({
    type: "DELETE",
    url: `api/library_links/${id}`,
    success,
    error,
  });
};
