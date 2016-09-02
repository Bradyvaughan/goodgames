import React from 'react';
import ReactDOM from 'react-dom';
import { configureStore } from './store/store';
import { Root } from './components/root';
import { signUp, login, logout } from './actions/session_actions';
// import { getAllGames, getGame, deleteGame, createGame, updateGame }
//   from './actions/game_actions';
import { getAllLibraries, getLibrary, createLibrary, deleteLibrary }
  from './actions/library_actions';
import { createLink, deleteLink } from './actions/link_actions';



document.addEventListener("DOMContentLoaded", () =>{
  let preloadedState = {session: {currentUser: null, errors: []},
    games: {games: {img: "", title: "", description: "", avg_rating: "", published_on: "", libraries: []}, errors: []}};
  if (window.currentUser) {
    preloadedState.session.currentUser = window.currentUser;
  }
  const store = configureStore(preloadedState);
  window.store = store;
  window.login = login;
  window.getAllLibraries = getAllLibraries;
  window.getLibrary = getLibrary;
  window.createLibrary = createLibrary;
  window.createLink = createLink;
  window.deleteLink = deleteLink;


  ReactDOM.render(<Root store={store}/>,document.getElementById("root"));
});
