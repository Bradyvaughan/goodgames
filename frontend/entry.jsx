import React from 'react';
import ReactDOM from 'react-dom';
import { configureStore } from './store/store';
import Root from './components/root';
import { signUp, login, logout } from './actions/session_actions';
import { getSearch, submitRating }
  from './actions/game_actions';
import { getAllLibraries, getLibrary, createLibrary, deleteLibrary }
  from './actions/library_actions';
import { createLink, deleteLink } from './actions/link_actions';
import { getAllReviews, getReview, createReview, deleteReview, updateReview } from './actions/review_actions';
import { specCreateLink } from './util/api_util/library_link_util';
import Modal from 'react-modal';



document.addEventListener("DOMContentLoaded", () =>{
  let preloadedState = {session: {currentUser: null, logInErrors: [], signUpErrors: []},
    games: {games: {}, errors: []},
    libraries: {libraries: {}, errors: []}};
  if (window.currentUser) {
    preloadedState.session.currentUser = window.currentUser;
  }
  const store = configureStore(preloadedState);
  window.store = store;
  window.login = login;
  window.getSearch = getSearch;
  window.submitRating = submitRating;

  Modal.setAppElement(document.body);


  ReactDOM.render(<Root store={store}/>,document.getElementById("root"));
});
