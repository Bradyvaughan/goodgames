import React from 'react';
import {hashHistory} from 'react-router';
import PlayedStatusContainer from '../played_status_container';

class GamesIndexItem extends React.Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleClick(){
    hashHistory.push(`/games/${this.props.gameId}`);
  }

  handleDelete() {
    this.props.deleteLink(this.props.gameId, this.props.libId);
  }

  render() {
    let x = "";
    if (this.props.libId) {
      x = "x";
    }
    return(
      <div className="game-item">
        <div className="game-item-interior">
          <div className="top-bar">
          <p className="x-but" onClick={this.handleDelete}>{x}</p>
          </div>
          <figure>
            <img src={this.props.cover}  onClick={this.handleClick}/>
          </figure>
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
