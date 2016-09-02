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
