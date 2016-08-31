import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, hashHistory} from 'react-router';
import { App } from './app';
import { Home } from './home';
import HomeLite from './home_lite';
import GamesIndexContainer from './games/games_index_container';
import { GameDetail } from './games/game_detail';


export const Root = ({store}) => (
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={ App }>
        <Route path="/games" component={ GamesIndexContainer } />
        <Route path="/games/:id" component={ GameDetail }/>
        <Route path="/home" component={ Home }/>
      </Route>
    </Router>
  </Provider>
);
