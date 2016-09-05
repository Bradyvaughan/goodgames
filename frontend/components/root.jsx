import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, hashHistory, IndexRoute} from 'react-router';
import AppContainer from './app_container';
import HomeContainer from './home_container';
import HomeLite from './home_lite';
import GamesIndexContainer from './games/games_index_container';
import GameDetailContainer from './games/game_detail_container';
import LibraryDetailContainer from './libraries/library_detail_container';


export const Root = ({store}) => (
  <Provider store={store}>
    <Router onUpdate={() => window.scrollTo(0, 0)} history={hashHistory}>
      <Route path="/" component={ AppContainer }>
        <IndexRoute component={HomeContainer} />
        <Route path="/games" component={ GamesIndexContainer } />
        <Route path="/games/:id" component={ GameDetailContainer }/>
        <Route path="/home/:libraryId" component={ LibraryDetailContainer } />
      </Route>
    </Router>
  </Provider>
);
