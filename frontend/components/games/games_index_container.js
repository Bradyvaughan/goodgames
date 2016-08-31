import { connect } from 'react-redux';
import gamesIndex from './games_index';
import {getAllGames} from '../../actions/game_actions';


const mapStateToProps = state => ({
  games: state.games.games
});

const mapDispatchToProps = dispatch => ({
  getAllGames: () => dispatch(getAllGames())
});

export default connect(mapStateToProps, mapDispatchToProps)(gamesIndex);
