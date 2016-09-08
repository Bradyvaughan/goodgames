import React from 'react';
import GamesIndexItem from '../games/games_index_item';
import { throttle } from 'lodash';

class LibraryDetail extends React.Component {

  constructor(props) {
    super(props);
    this.state = {page: 1, fn: _.throttle(this.handleScroll.bind(this), 1000)};
    this.handleInfiniteLoad = this.handleInfiniteLoad.bind(this);
  }

  componentDidMount() {
    this.props.getGamesByLibrary(this.props.params.libraryId, this.state.page);
    window.addEventListener('scroll', this.state.fn);
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
    this.props.getGamesByLibrary(this.props.params.libraryId, this.state.page);
  }

  render(){
    let games = this.props.games;
    if (!games) {
      games = {};
    }
    let libraries = this.props.libraries;
    let name = "";
    if (Object.keys(libraries)[0] && libraries[this.props.params.libraryId]) {
      name = libraries[this.props.params.libraryId].name;
    }
    let gameDex = Object.keys(games).map((key) => {
      return(<li key={`{li-${key}}`}>
        <GamesIndexItem
        game={games[key]}
        gameId={key}
        cover={games[key].cover}
        getGame={this.props.getGame}
        libId={this.props.params.libraryId}
        linkId={games[key].link_id}
        deleteLink={this.props.deleteLink}/>
      </li>);
    });
    if (gameDex.length === 0) {
      gameDex = <h1>You Have No Games In This Library!</h1>;
    }
    return(
      <div className="down">
        <h1>Viewing: {name}</h1>
        <ul className="index">
          {gameDex}
        </ul>
      </div>
    );
  }
}

export default LibraryDetail;
