import React from 'react';
import { connect } from 'react-redux';
import Search from './search';
import { getGame, getSearch, clearGames } from '../actions/game_actions';

const mapStateToProps = state => ({
  games: state.games.games,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  getGame: (gameId) => dispatch(getGame(gameId)),
  getSearch: (query, page) => dispatch(getSearch(query, page)),
  clearGames: () => dispatch(clearGames())
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
