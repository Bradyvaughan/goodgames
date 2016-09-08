import React from 'react';
import GamesIndexItem from './games/games_index_item';
import { throttle } from 'lodash';

class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {page: 1, fn: _.throttle(this.handleScroll.bind(this), 1000)};
    this.handleInfiniteLoad = this.handleInfiniteLoad.bind(this);
  }

  componentDidMount() {
    if (this.props.currentUser) {
      this.props.getGamesByUser(this.props.currentUser.id, 1);
      window.addEventListener('scroll', this.state.fn);
      this.handleInfiniteLoad();
    }
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.state.fn);
    this.props.clearGames();
  }

  handleScroll(e) {
    let knownPos = window.scrollY;
    let ticking;
    if (knownPos > document.body.clientHeight - 2 * window.innerHeight) {
      this.handleInfiniteLoad();
    }
  }

  handleInfiniteLoad() {
    this.setState({page: this.state.page + 1});
    this.props.getGamesByUser(this.props.currentUser.id, this.state.page);
  }

  render() {
    let games = this.props.games;
    if (!games) {
      games = {};
    }
    let gameDex = Object.keys(games).map((key) => {
      return(<GamesIndexItem
        game={games[key]}
        gameId={key}
        key={`game-${key}`}
        getGame = {this.props.getGame}
        cover={games[key].cover}/>);
    });
    return(
      <div className="down">
        <h1>Welcome, {this.props.currentUser.username}.  Your Games:</h1>
        <ul className="index">
          {gameDex}
        </ul>
      </div>
    );
  }
}


export default Home;
