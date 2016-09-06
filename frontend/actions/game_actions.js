export const receiveErrors = (errors) => ({
  type: "RECEIVE_ERRORS",
  errors
});
export const receiveAllGames = (data) => ({
  type: "RECEIVE_ALL_GAMES",
  data
});
export const receiveSomeGames = (data) => ({
  type: "RECEIVE_SOME_GAMES",
  data
});

export const receiveGame = (data) => ({
  type: "RECEIVE_GAME",
  data
});

export const getAllGames = () => ({
  type: "GET_ALL_GAMES",
});

export const getGame = (gameId) => ({
  type: "GET_GAME",
  gameId
});

export const createGame = (game) => ({
  type: "CREATE_GAME",
  game
});

export const deleteGame = (gameId) => ({
  type: "DELETE_GAME",
  gameId
});

export const updateGame = (gameId, game) => ({
  type: "UPDATE_GAME",
  gameId,
  game
});

export const getGamesByUser = (userId, page) => ({
  type: "GET_GAMES_BY_USER",
  userId,
  page
});

export const getGamesByPage = (page) => ({
  type: "GET_GAMES_BY_PAGE",
  page
});

export const getGamesByLibrary = (libraryId, page) => ({
  type: "GET_GAMES_BY_LIBRARY",
  libraryId,
  page
});
