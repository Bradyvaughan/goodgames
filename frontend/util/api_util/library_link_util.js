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

export const destroyLibraryLink = (gameId, libId, success, error) => {
  $.ajax({
    type: "DELETE",
    url: `api/libraries/${libId}/games/${gameId}`,
    success,
    error,
  });
};

export const specCreateLink = (userId, name, gameId, success, error) => {
  $.ajax({
    type: "POST",
    url: `api/users/${userId}/libraries/${name}`,
    success,
    error,
    data: {library_link: {game_id: gameId}}
  });
};
