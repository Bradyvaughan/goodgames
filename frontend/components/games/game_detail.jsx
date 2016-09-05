import React from 'react';
import {hashHistory} from 'react-router';
import ReviewIndex from '../reviews/review_index';
import NewReviewForm from '../forms/new_review';
import { findKey } from 'lodash';
import EditReviewForm from '../forms/edit_review';

class GameDetail extends React.Component {

  constructor(props) {
    super(props);
    this.handleAdd = this.handleAdd.bind(this);
    this.addToLib = this.addToLib.bind(this);
    this.handleNewReview = this.handleNewReview.bind(this);
    this.handleEditReview = this.handleEditReview.bind(this);
  }

  handleIndex(){
    hashHistory.push("/games");
  }

  handleAdd(key) {
    return(() => (this.props.createLink(this.props.currentUser.id,
      key, this.props.params.id)));
  }

  addToLib(libName) {
    return () => this.props.specCreate(this.props.currentUser.id,
    libName, this.props.params.id);
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
    let game = this.props.games;

    if (game[this.props.params.id]) {
      game = game[this.props.params.id];
    }
    let ownReviewKey = null;
    if (this.props.currentUser) {
      ownReviewKey = _.findKey(this.props.reviews, {username: this.props.currentUser.username});
    }
    if (ownReviewKey) {
      editClass = "button vert-center";
    } else {
      newClass = "button vert-center";
    }

    if (!game) {
      game = {img: "", title: "", description: "", avg_rating: "", release_date: "", libraries: []};
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

    if (this.props.currentUser) {
    return(
      <div className="game-detail">
        <section className="game-sidebar">
          <img src={game.cover}/>
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
                <li>Released On: {game.release_date}</li>
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
                {game.description}
              </p>
              <div className="bottom-bar">
                <ul>
                  {libz}
                </ul>

                <p className={newClass} id="add-review" onClick={this.handleNewReview}>
                  Write Review
                </p>

                <p className={editClass} id="edit-review" onClick={this.handleEditReview}>
                  Edit Review
                </p>

                <NewReviewForm
                  gameId={this.props.params.id}
                  createReview={this.props.createReview}
                  errors={this.props.newErrors}
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
            <ReviewIndex
              reviews={this.props.reviews}
              />
          </section>
        </section>
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
