export const createLink = (userId, libraryId, gameId) => ({
  type: "CREATE_LINK",
  userId,
  libraryId,
  gameId
});

export const deleteLink = (id) => ({
  type: "DELETE_LINK",
  id
});
