import React from 'react';
import {hashHistory} from 'react-router';
import ReviewIndex from '../reviews/review_index';
import NewReviewForm from '../forms/new_review';
import { findKey } from 'lodash';
import EditReviewForm from '../forms/edit_review';
import PlayedStatusContainer from '../played_status_container';
import StarRating from '../star_rating';

class GameDetail extends React.Component {

  constructor(props) {
    super(props);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleNewReview = this.handleNewReview.bind(this);
    this.handleEditReview = this.handleEditReview.bind(this);
    this.handleRate = this.handleRate.bind(this);
    this.handleLib = this.handleLib.bind(this);
    this.handleUnLib = this.handleUnLib.bind(this);
  }

  componentWillUnmount() {
    this.props.clearGames();
  }

  handleLib(key) {
    return(() => (hashHistory.push(`/home/${key}`)));
  }

  handleUnLib(gameId, libId) {
    return(() => this.props.deleteLink(gameId, libId, true))
  }

  handleAdd(key) {
    return(() => (this.props.createLink(this.props.currentUser.id,
      key, this.props.params.id)));
  }

  handleNewReview(e) {
    e.preventDefault();
    document.querySelector('#add-review').classList.toggle('hidden');
    $('#new-review').removeClass('hidden');
  }

  handleEditReview(e) {
    e.preventDefault();
    document.querySelector('#change-review').classList.toggle('hidden');
    document.querySelector('#edit-review').classList.toggle('hidden');
  }

  handleRate(e, stuff) {
    e.preventDefault();
    this.props.submitRating(this.props.currentUser.id, this.props.params.id, stuff.rating);
  }

  componentDidMount() {
    if (this.props.currentUser) {
      this.props.getAllLibraries(this.props.currentUser.id);
    }
    this.props.getAllReviews(this.props.params.id);
  }

  render() {
    let newClass = "button hidden vert-center";
    let editClass = "button hidden vert-center";
    let game = this.props.games[this.props.params.id];
    let ownReviewKey = null;
    if (this.props.currentUser) {
      ownReviewKey = _.findKey(this.props.reviews, {username: this.props.currentUser.username});
    }

    if (!game) {
      game = {img: "", title: "", description: "", avg_rating: 0, release_date: "", libraries: []};
    }

    let libList = Object.keys(this.props.libraries).map((key) => {
      let name = this.props.libraries[key].name;
      if (["Played", "To Play", "Currently Playing"].indexOf(name) === -1) {
        return(
          <li key={`library-${key}`} onClick={this.handleAdd(key)}>
            {name}
          </li>
        );
      }

    });
    let libz = game.libraries.map((library) => (
      <li key={`lib-${library.name}`}>
        <span className="cat-x"onClick={this.handleUnLib(game.id, library.id)}>x</span>
        <span className="cat-name" onClick={this.handleLib(library.id)}>{library.name}</span>
      </li>
    ));
    if (this.props.currentUser) {
    return(
    <div className="det-body">
      <div className="game-detail">
        <section className="game-sidebar">
          <img src={game.cover}/>

          <p>Your Rating:</p>
          <StarRating
            submitRating={this.props.submitRating}
            userId={this.props.currentUser.id}
            gameId={game.id}
            rating={game.user_rating}
            />
          <PlayedStatusContainer
            game={game}
            gameId={this.props.params.id}
            />
        </section>
        <section className="game-body">
          <div className='game-info'>
            <div className='summary'>
              <ul className='sum-list'>
                <li><h3>{game.title}</h3></li>
                <li>Released On: {game.release_date}</li>
                <li>Average Rating:  {game.avg_rating}</li>
                <li>Platform: {game.platform}</li>
              </ul>
              <div className="vert-center but-list">
                <section className="lib-list">
                  <p className="button" id="no-right">Add to Library</p>
                  <ul className = "menu">
                    {libList}
                  </ul>
              </section>
              </div>
            </div>
            <section className="large-block">
              <h4>Description:</h4>
              <p>
                {game.description}
              </p>
            </section>
              <div className="bottom-bar">
                <span>Categories:</span>
                <ul>
                  {libz}
                </ul>

              </div>


          </div>
          <section className="review-list">
            <div className="review-top">
              <p className="announcer">Community Reviews</p>

                <NewReviewForm
                  gameId={this.props.params.id}
                  createReview={this.props.createReview}
                  errors={this.props.newErrors}
                  reviewId={ownReviewKey}
                />

              <EditReviewForm
                  gameId={this.props.params.id}
                  updateReview={this.props.updateReview}
                  reviewId={ownReviewKey}
                  review={this.props.reviews[ownReviewKey]}
                  errors={this.props.editErrors}
                />
            </div>
            <ReviewIndex
              reviews={this.props.reviews}
              />
          </section>
        </section>
      </div>
    </div>
    );
  } else {
    return(
      <div className="game-detail">
        <section className="game-sidebar">
          <img src={game.cover}/>
        </section>
        <section className="game-body">
          <div className='game-info'>
            <div className='summary'>
              <ul>
                <li><h3>{game.title}</h3></li>
                <li>Released On: {game.release_date}</li>
                <li>Average Rating:  {game.avg_rating}</li>
              </ul>
            </div>
            <section className="large-block">
              <h4>Description:</h4>
              <p>
                {game.description}
              </p>
            </section>
          </div>
          <section className="review-list">
            <ReviewIndex
              reviews={this.props.reviews}
              />
          </section>
        </section>
      </div>
    );
  }
  }
}

export default GameDetail;
