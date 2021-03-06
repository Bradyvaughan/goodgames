import { connect } from 'react-redux';
import GameDetail from './game_detail';
import { getGame, clearGames, submitRating } from '../../actions/game_actions';
import { getAllLibraries } from '../../actions/library_actions';
import { createLink, specCreate, deleteLink } from '../../actions/link_actions';
import { getAllReviews, createReview, updateReview } from '../../actions/review_actions';

const mapStateToProps = state => ({
  games: state.games.games,
  currentUser: state.session.currentUser,
  libraries: state.libraries.libraries,
  reviews: state.reviews.reviews,
  editErrors: state.reviews.editErrors,
  newErrors: state.reviews.newErrors
});

const mapDispatchToProps = dispatch => ({
  getGame: (id) => dispatch(getGame(id)),
  getAllLibraries: (id) => dispatch(getAllLibraries(id)),
  createLink: (userId, libId, gameId) =>
    dispatch(createLink(userId, libId, gameId)),
  getAllReviews: (gameId) => dispatch(getAllReviews(gameId)),
  createReview: (gameId, review) => dispatch(createReview(gameId, review)),
  updateReview: (gameId, reviewId, review) =>
    dispatch(updateReview(gameId, reviewId, review)),
  clearGames: () => dispatch(clearGames()),
  submitRating: (userId, gameId, num) => dispatch(submitRating(userId, gameId, num)),
  deleteLink: (gameId, libId, bool) => dispatch(deleteLink(gameId, libId, bool))
});

export default connect(mapStateToProps, mapDispatchToProps)(GameDetail);
