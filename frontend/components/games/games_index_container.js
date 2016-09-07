import { connect } from 'react-redux';
import gamesIndex from './games_index';
import {getAllGames, getGame, getGamesByPage, clearGames} from '../../actions/game_actions';


const mapStateToProps = state => ({
  games: state.games.games,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  getAllGames: () => dispatch(getAllGames()),
  getGame: (gameId) => dispatch(getGame(gameId)),
  getGamesByPage: (page) => dispatch(getGamesByPage(page)),
  clearGames: () => dispatch(clearGames())
});

export default connect(mapStateToProps, mapDispatchToProps)(gamesIndex);
