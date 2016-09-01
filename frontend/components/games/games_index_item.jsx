import React from 'react';
import {hashHistory} from 'react-router';

class GamesIndexItem extends React.Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    hashHistory.push(`/games/${this.props.gameId}`);
  }

  render() {
    return(
      <div className="game-item" onClick={this.handleClick}>
        <div className="flex">
          <img src="http://vignette3.wikia.nocookie.net/wowwiki/images/7/75/Captain_Placeholder.jpg/revision/latest?cb=20070324064719"/>
          <div>
            <p>{this.props.game.title}</p>
            <p>{this.props.game.published_on}</p>
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
