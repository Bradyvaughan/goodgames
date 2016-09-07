import React from 'react';
import {hashHistory} from 'react-router';
import ReviewIndex from '../reviews/review_index';
import NewReviewForm from '../forms/new_review';
import { findKey } from 'lodash';
import EditReviewForm from '../forms/edit_review';
import PlayedStatusContainer from '../played_status_container';

class GameDetail extends React.Component {

  constructor(props) {
    super(props);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleNewReview = this.handleNewReview.bind(this);
    this.handleEditReview = this.handleEditReview.bind(this);
  }

  componentWillUnmount() {
    this.props.clearGames();
  }

  handleIndex(){
    hashHistory.push("/games");
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

  componentDidMount() {
    this.props.getGame(this.props.params.id);
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
      game = {img: "", title: "", description: "", avg_rating: "", release_date: "", libraries: []};
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
      <li key={`lib-${library.name}`}>{library.name}</li>
    ));

    if (this.props.currentUser) {
    return(
    <div className="det-body">
      <div className="game-detail">
        <section className="game-sidebar">
          <img src={game.cover}/>
          <PlayedStatusContainer
            game={game}
            gameId={this.props.params.id}
            />
        </section>
        <section className="game-body">
          <div className='game-info'>
            <div className='summary'>
              <ul>
                <li><h3>{game.title}</h3></li>
                <li>Released On: {game.release_date}</li>
                <li>Average Rating:  {game.avg_rating}</li>
                <li>Platform: {game.platform}</li>
              </ul>
              <div className="vert-center but-list">
                <span className="button" onClick={this.handleIndex}>
                  Back To Index
                </span>

                <section className="lib-list">
                  <div className="button">Add to Library
                  </div>
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
              <div className="bottom-bar">
                <ul>
                  {libz}
                </ul>

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

            </section>

          </div>
          <section className="review-list">
            <p className="announcer">Community Reviews</p>
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
          <span className="button" onClick={this.handleIndex}>
            Back To Index
          </span>
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
