export const createLink = (userId, libraryId, gameId) => ({
  type: "CREATE_LINK",
  userId,
  libraryId,
  gameId
});

export const deleteLink = (gameId, libId, bool) => ({
  type: "DELETE_LINK",
  gameId,
  libId,
  bool
});

export const specCreate = (userId, libraryName, gameId, libId) => ({
  type: "SPEC_CREATE_LINK",
  userId,
  libraryName,
  gameId,
  libId
});
