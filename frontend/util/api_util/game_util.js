export const createGame = (game, success, error) => {
  $.ajax({
    type: "POST",
    url: "api/games",
    success,
    error,
    data: game
  });
};

export const deleteGame = (success, error) => {
  $.ajax({
    type: "DELETE",
    url: "api/games/:id",
    success,
    error
  });
};

export const getSingleGame = (success, error) => {
  $.ajax({
    url: "api/games/:id",
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

export const updateGame = (game, success, error) => {
  $.ajax({
    type: "PATCH",
    url: "api/games/:id",
    data: game,
    success,
    error
  });
};
