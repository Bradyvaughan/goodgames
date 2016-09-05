import React from 'react';
import GamesIndexItem from './games/games_index_item';

class Home extends React.Component {

  componentDidMount() {
    if (this.props.currentUser) {
      this.props.getGamesByUser(this.props.currentUser.id);
    }
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
