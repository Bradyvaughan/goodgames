import { connect } from 'react-redux';
import gamesIndex from './games_index';
import {getAllGames, getGame} from '../../actions/game_actions';


const mapStateToProps = state => ({
  games: state.games.games
});

const mapDispatchToProps = dispatch => ({
  getAllGames: () => dispatch(getAllGames()),
  getGame: (gameId) => dispatch(getGame(gameId))
});

export default connect(mapStateToProps, mapDispatchToProps)(gamesIndex);
