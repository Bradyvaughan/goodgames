import React from 'react';
import {hashHistory} from 'react-router';

class GamesIndexItem extends React.Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    hashHistory.push(`/games/${this.props.gameId}`);
    this.props.getGame(this.props.gameId);
  }

  render() {
    return(
      <div className="game-item" onClick={this.handleClick}>
        <div className="flex">
          <img src={this.props.cover}/>
          <div>
            <p>{this.props.game.title}</p>
            <p>{this.props.game.release_date}</p>
            <p>{this.props.game.avg_rating}</p>
          </div>
        </div>

          <p className="vert-center">{this.props.game.description}</p>
        <span className="vert-center">played placeholder</span>
      </div>
    );
  }
}

export default GamesIndexItem;
