import React from 'react';
import {hashHistory} from 'react-router';

class GameDetail extends React.Component {

  handleClick(){
    hashHistory.push("/games");
  }

  componentDidMount() {
    this.props.getGame(this.props.params.id);
  }

  render() {
    let game = this.props.games;

    if (!game) {
      game = {img: "", title: "", description: "", avg_rating: "", published_on: ""};
    }

    return(
      <div className="game-detail">
        <section className="game-sidebar">
          <img src="http://vignette3.wikia.nocookie.net/wowwiki/images/7/75/Captain_Placeholder.jpg/revision/latest?cb=20070324064719"/>
          <span className="button" onClick={this.handleClick}>
            Back To Index
          </span>
          <section className = "drop-down">
            <span className="button">Played Status Placeholder</span>
            <ul className = "menu">
              <li>Played</li>
              <li>Currently Playing</li>
              <li>Wanting to Play</li>
            </ul>

          </section>
        </section>
        <section className="game-body">
          <div className='game-info'>
            <ul>
              <li><h3>{game.title}</h3></li>
              <li>Released On: {game.published_on}</li>
              <li>Average Rating:  {game.avg_rating}</li>
            </ul>

            <section className="large-block">
              <h4>Description:</h4>
              <p>
                "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
              </p>
              <div className="bottom-bar">
                <ul>
                  <li>Libraries:</li>
                  <li><a>example 1</a></li>
                  <li><a>example 2</a></li>
                  <li><a>example 3</a></li>
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
