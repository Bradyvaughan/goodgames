export const createReview = (gameId, review, success, error) => {
  $.ajax({
    type: "POST",
    url: `api/games/${gameId}/reviews`,
    success,
    error,
    data: {review: review}
  });
};

export const deleteReview = (gameId,id, success, error) => {
  $.ajax({
    type: "DELETE",
    url: `api/games/${gameId}/reviews/${id}`,
    success,
    error
  });
};

export const getReview = (gameId, id, success, error) => {
  $.ajax({
    url: `api/games/${gameId}/reviews/${id}`,
    success,
    error
  });
};

export const getAllReviews = (gameId, success, error) => {
  $.ajax({
    url: `api/games/${gameId}/reviews`,
    success,
    error
  });
};

export const updateReview = (gameId, id, data, success, error) => {
  $.ajax({
    type: "PATCH",
    url: `api/games/${gameId}/reviews/${id}`,
    data: {review: data},
    success,
    error
  });
};
