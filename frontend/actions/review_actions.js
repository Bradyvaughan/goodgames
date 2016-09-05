

export const getReview = (gameId, reviewId) => ({
  type: "GET_REVIEW",
  gameId,
  reviewId
});

export const getAllReviews = (gameId) => ({
  type: "GET_ALL_REVIEWS",
  gameId
});

export const createReview = (gameId, review) => ({
  type: "CREATE_REVIEW",
  gameId,
  review
});
export const deleteReview = (gameId, reviewId) => ({
  type: "DELETE_REVIEW",
  reviewId
});

export const updateReview = (gameId, reviewId, data) => ({
  type: "UPDATE_REVIEW",
  gameId,
  reviewId,
  data
});

export const receiveEditErrors = (errors) => ({
  type: "RECEIVE_EDIT_ERRORS",
  errors
});

export const receiveNewErrors = (errors) => ({
  type: "RECEIVE_NEW_ERRORS",
  errors
});

export const receiveAllReviews = (data) => ({
  type: "RECEIVE_ALL_REVIEWS",
  data
});

export const receiveReview = (review) => ({
  type: "RECEIVE_REVIEW",
  review
});

export const mergeReview = (review) => ({
  type: "MERGE_REVIEW",
  review
});

export const subtractReview = (reviewId) => ({
  type: "RECEIVE_REVIEW",
  reviewId
});
