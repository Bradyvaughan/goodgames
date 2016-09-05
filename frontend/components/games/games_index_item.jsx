import React from 'react';
import {hashHistory} from 'react-router';

class GamesIndexItem extends React.Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    hashHistory.push(`/games/${this.props.gameId}`);
    document.scrollTop = 0;
    this.props.getGame(this.props.gameId);
  }

  render() {
     let desc = "";
    if (this.props.game.description) {
      desc = this.props.game.description.substring(0,200) + "...";
    }
    return(
      <div className="game-item">
        <div className="game-item-interior">
          <span></span>
          <img src={this.props.cover}  onClick={this.handleClick}/>
          <div className="game-sum">
            <p className="title"  onClick={this.handleClick}>{this.props.game.title}</p>
            <div className="plat-rate"  onClick={this.handleClick}>
              <p>
                Platform: {this.props.game.platform}
              </p>
              <p>
                Rating: {this.props.game.avg_rating}/10
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}





export default GamesIndexItem;
