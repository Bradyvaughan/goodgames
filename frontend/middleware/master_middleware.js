import { applyMiddleware } from 'redux';
import { SessionMiddleware } from './session_middleware';
import { GameMiddleware } from './game_middleware';
import { LibraryMiddleware } from './library_middleware';
import { LinkMiddleware } from './link_middleware';
import { LibrariesMiddleware } from './libraries_middleware';

export const MasterMiddleware =
  applyMiddleware(SessionMiddleware, GameMiddleware, LibraryMiddleware,
    LibrariesMiddleware, LinkMiddleware);
