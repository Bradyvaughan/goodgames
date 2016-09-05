import { merge } from 'lodash';

export const ReviewReducer = (state={reviews: {}, editErrors: [], newErrors: []}, action) => {
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
    case "RECEIVE_EDIT_ERRORS":
      newState.editErrors = action.errors;
      return newState;
    case "RECEIVE_NEW_ERRORS":
      newState.newErrors = action.errors;
      return newState;
    default:
      return state;
  }
};
