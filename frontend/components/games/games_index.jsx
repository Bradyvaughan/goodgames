import React from 'react';
import GamesIndexItem from './games_index_item';

class GamesIndex extends React.Component {

  componentDidMount(){
    this.props.getAllGames();
  }

  render(){
    let games = this.props.games;
    let gameDex = Object.keys(games).map((key) => {
      return(<GamesIndexItem
        game={games[key]}
        gameId={key}
        key={`game-${key}`}
        getGame = {this.props.getGame}
        cover={games[key].cover}/>);
    });
    return(
      <ul className="index">
        {gameDex}
      </ul>
    );
  }
}

export default GamesIndex;
