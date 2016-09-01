import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, hashHistory} from 'react-router';
import AppContainer from './app_container';
import { Home } from './home';
import HomeLite from './home_lite';
import GamesIndexContainer from './games/games_index_container';
import GameDetailContainer from './games/game_detail_container';


export const Root = ({store}) => (
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={ AppContainer }>
        <Route path="/games" component={ GamesIndexContainer } />
        <Route path="/games/:id" component={ GameDetailContainer }/>
        <Route path="/home" component={ Home }/>
      </Route>
    </Router>
  </Provider>
);
