import React from 'react';
import GamesIndexItem from '../games/games_index_item';

class LibraryDetail extends React.Component {

  constructor(props) {
    super(props);
    // this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    this.props.getLibrary(this.props.params.libraryId);
  }

  render(){
    let games = this.props.library.games;
    if (!games) {
      games = {};
    }
    let gameDex = Object.keys(games).map((key) => {
      let linkId = games[key].link_id;
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
    return(
      <ul className="index">
        {gameDex}
      </ul>
    );
  }
}

export default LibraryDetail;
