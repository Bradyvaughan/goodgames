import { applyMiddleware } from 'redux';
import { SessionMiddleware } from './session_middleware';
import { GameMiddleware } from './game_middleware';

export const MasterMiddleware =
  applyMiddleware(SessionMiddleware, GameMiddleware);
