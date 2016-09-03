import { merge } from 'lodash';

export const ReviewReducer = (state={reviews: {}, errors: []}, action) => {
  let newState = merge({},state);
  switch (action.type) {
    case "RECEIVE_ALL_REVIEWS":
      newState.reviews = action.data;
      return newState;
    case "RECEIVE_REVIEW":
      newState.reviews = action.review;
      return newState;
    case "MERGE_REVIEW":
      merge(newState.reviews, action.review);
      return newState;
    case "SUBTRACT_REVIEW":
      delete newState[action.reviewId];
      return newState;
    case "RECEIVE_ERRORS":
      newState.errors = action.errors;
      return newState;
    default:
      return state;
  }
};
