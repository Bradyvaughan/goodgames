import { receiveNewErrors, receiveEditErrors, receiveAllReviews, receiveReview, mergeReview, subtractReview} from '../actions/review_actions';
import { deleteReview, createReview, getAllReviews, getReview, updateReview } from '../util/api_util/review_util';

// import { getGame } from '../actions/game_actions';

export const ReviewMiddleware = ({state, dispatch}) => next => action => {
  let success;
  let error;
  switch (action.type) {
    case "GET_ALL_REVIEWS":
      success = (data) => dispatch(receiveAllReviews(data));
      getAllReviews(action.gameId, success, error);
      return next(action);
    case "GET_REVIEW":
      success = (review) => dispatch(receiveReview(review));
      getReview(action.gameId, action.reviewId, success, error);
      return next(action);
    case "CREATE_REVIEW":
      error = (response) => dispatch(receiveNewErrors(response.responseJSON));
      success = (data) => {
        dispatch(mergeReview(data));
        $('#new-review').addClass('hidden');
      };
      createReview(action.gameId, action.review, success, error);
      return next(action);
    case "DELETE_REVIEW":
      success = (data) => dispatch(subtractReview(action.gameId));
      deleteReview(action.gameId, action.reviewId, success, error);
      return next(action);
    case "UPDATE_REVIEW":
      error = (response) => dispatch(receiveEditErrors(response.responseJSON));
      success = (data) => {
        dispatch(mergeReview(data));
        $('#change-review').addClass('hidden');
        $('#edit-review').removeClass('hidden');
      };
      updateReview(action.gameId, action.reviewId, action.data, success, error);
      return next(action);
    default:
      return next(action);
  }
};
