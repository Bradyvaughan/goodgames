export const createLink = (userId, libraryId, gameId) => ({
  type: "CREATE_LINK",
  userId,
  libraryId,
  gameId
});

export const deleteLink = (linkId) => ({
  type: "DELETE_LINK",
  linkId
});

export const specCreate = (userId, libraryName, gameId) => ({
  type: "SPEC_CREATE_LINK",
  userId,
  libraryName,
  gameId
});
