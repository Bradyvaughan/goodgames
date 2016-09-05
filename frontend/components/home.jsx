import React from 'react';
import LibraryIndexContainer from './libraries/library_index_container';
import LibraryFormContainer from './forms/library_form_container';
import GamesIndexContainer from './games/games_index_container';

class Home extends React.Component {

  componentDidMount() {
    if (this.props.currentUser) {
      this.props.getGamesByUser(this.props.currentUser.id);
    }
  }

  render() {
    return(
      <div className="home" >
        <GamesIndexContainer />
      </div>
    );
  }
}


export default Home;
