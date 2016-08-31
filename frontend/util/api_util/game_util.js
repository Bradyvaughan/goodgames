export const createGame = (game, success, error) => {
  $.ajax({
    type: "POST",
    url: `api/games`,
    success,
    error,
    data: {game: game}
  });
};

export const deleteGame = (id, success, error) => {
  $.ajax({
    type: "DELETE",
    url: `api/games/${id}`,
    success,
    error
  });
};

export const getGame = (id, success, error) => {
  $.ajax({
    url: `api/games/${id}`,
    success,
    error
  });
};

export const getAllGames = (success, error) => {
  $.ajax({
    url: "api/games",
    success,
    error
  });
};

export const updateGame = (id, data, success, error) => {
  $.ajax({
    type: "PATCH",
    url: `api/games/${id}`,
    data: {game: data},
    success,
    error
  });
};
