import React from 'react';
import GamesIndexItem from './games_index_item';
import Infinite from 'react-infinite';
import { throttle } from 'lodash';

class GamesIndex extends React.Component {

  constructor(props) {
    super(props);
    this.state = {page: 1, fn: _.throttle(this.handleScroll.bind(this), 1000)};
    this.handleInfiniteLoad = this.handleInfiniteLoad.bind(this);
  }

  componentDidMount(){
    this.props.getGamesByPage(1);
    window.addEventListener('scroll', this.state.fn);
    this.handleInfiniteLoad();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.state.fn);
    this.props.clearGames();
  }

  handleScroll(e) {
    let knownPos = window.scrollY;
    if (knownPos > document.body.clientHeight - 2 * window.innerHeight) {
      this.handleInfiniteLoad();
    }
  }

  handleInfiniteLoad() {
    this.setState({page: this.state.page + 1});
    this.props.getGamesByPage(this.state.page);
  }

  render(){
    let games = this.props.games;
    let gameDex = Object.keys(games).map((key) => {
      return(<GamesIndexItem
        game={games[key]}
        gameId={key}
        key={`game-${key}`}
        getGame = {this.props.getGame}
        cover={games[key].cover}
        currentUser={this.props.currentUser}/>);
    });
    return(
        <ul className="index">
          {gameDex}
        </ul>
    );
  }
}

export default GamesIndex;
