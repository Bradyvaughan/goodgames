import React from 'react';
import GamesIndexItem from './games_index_item';
import { throttle } from 'lodash';

class GamesIndex extends React.Component {

  constructor(props) {
    super(props);
    this.state = {page: 1, fn: _.throttle(this.handleScroll.bind(this), 1000)};
    this.handleInfiniteLoad = this.handleInfiniteLoad.bind(this);
    this.handleGuest = this.handleGuest.bind(this);
  }

  componentDidMount(){
    this.props.getGamesByPage(1);
    this.props.getGamesByPage(2);
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

  handleGuest(e) {
    e.preventDefault();
    this.props.login({username: "SidMeier", password: "civilization"});
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
      <div className="down">
        <h1>Welcome to ggwp!  Log in as guest?</h1>
          <p className='button wid-lim' onClick={this.handleGuest}>
            Guest Log In
          </p>
        <ul className="index">
          {gameDex}
        </ul>
      </div>
    );
  }
}

export default GamesIndex;
