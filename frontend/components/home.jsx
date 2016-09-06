import React from 'react';
import GamesIndexItem from './games/games_index_item';
import { throttle } from 'lodash';

class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {page: 1};
    this.handleInfiniteLoad = this.handleInfiniteLoad.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    if (this.props.currentUser) {
      this.props.getGamesByUser(this.props.currentUser.id, 1);
      window.addEventListener('scroll', _.throttle(this.handleScroll, 500));
      this.handleInfiniteLoad();
    }
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
      <div className="home" >
        {gameDex}
      </div>
    );
  }
}


export default Home;
