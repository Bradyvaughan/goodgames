import React from 'react';
import {hashHistory} from 'react-router';

class GameDetail extends React.Component {

  constructor(props) {
    super(props);
    this.handleAdd = this.handleAdd.bind(this);
    this.addToLib = this.addToLib.bind(this);
  }

  handleIndex(){
    hashHistory.push("/games");
  }

  handleAdd(key) {
    return(() => (this.props.createLink(this.props.currentId,
      key, this.props.params.id)));
  }

  addToLib(libName) {
    return () => this.props.specCreate(this.props.currentId,
    libName, this.props.params.id);
  }

  componentDidMount() {
    this.props.getGame(this.props.params.id);
    this.props.getAllLibraries(this.props.currentId);
  }

  render() {
    let game = this.props.games;

    if (!game) {
      game = {img: "", title: "", description: "", avg_rating: "", published_on: "", libraries: []};
    }

    let libList = Object.keys(this.props.libraries).map((key) => (
      <li key={`library-${key}`} onClick={this.handleAdd(key)}>
        {this.props.libraries[key].name}
      </li>
    ));
    let libz = game.libraries.map((library) => (
      <li key={`lib-${library.name}`}>{library.name}</li>
    ));

    let played = "Played?";

    const libs = ["Currently Playing", "Played", "Wanting to Play"];
    game.libraries.forEach((library) => {
      if (libs.indexOf(library.name) > -1) {
        played = library.name;
      }
    });

    return(
      <div className="game-detail">
        <section className="game-sidebar">
          <img src="http://vignette3.wikia.nocookie.net/wowwiki/images/7/75/Captain_Placeholder.jpg/revision/latest?cb=20070324064719"/>
          <span className="button" onClick={this.handleIndex}>
            Back To Index
          </span>
          <section className = "drop-down">
            <span className="button">{played}</span>
            <ul className = "menu">
              <li onClick={this.addToLib("Played")}>Played</li>
              <li onClick={this.addToLib("Currently Playing")}>Currently Playing</li>
              <li onClick={this.addToLib("Wanting to Play")}>Wanting to Play</li>
            </ul>

          </section>
        </section>
        <section className="game-body">
          <div className='game-info'>
            <div className='summary'>
              <ul>
                <li><h3>{game.title}</h3></li>
                <li>Released On: {game.published_on}</li>
                <li>Average Rating:  {game.avg_rating}</li>
              </ul>

              <section className="lib-list">
                <div className="button">Add to Library
                </div>
                <ul className = "menu">
                  {libList}
                </ul>
              </section>
            </div>
            <section className="large-block">
              <h4>Description:</h4>
              <p>
                "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
              </p>
              <div className="bottom-bar">
                <ul>
                  {libz}
                </ul>

                <p className="button vert-center">
                  Write Review
                </p>
              </div>

            </section>

          </div>
          <section className="review-list">
            LIST OF ALL REVIEWS
          </section>
        </section>
      </div>
    );
  }
}

export default GameDetail;
