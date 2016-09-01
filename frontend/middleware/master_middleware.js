import { applyMiddleware } from 'redux';
import { SessionMiddleware } from './session_middleware';
import { GameMiddleware } from './game_middleware';
import { LibraryMiddleware } from './library_middleware';

export const MasterMiddleware =
  applyMiddleware(SessionMiddleware, GameMiddleware, LibraryMiddleware);
