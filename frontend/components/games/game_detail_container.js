import { connect } from 'react-redux';
import GameDetail from './game_detail';
import { getGame } from '../../actions/game_actions';

const mapStateToProps = state => ({
  games: state.games.games
});

const mapDispatchToProps = dispatch => ({
  getGame: (id) => dispatch(getGame(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(GameDetail);
