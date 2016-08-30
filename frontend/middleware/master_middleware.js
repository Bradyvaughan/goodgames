import { applyMiddleware } from 'redux';
import { SessionMiddleware } from './session_middleware';

export const MasterMiddleware = applyMiddleware(SessionMiddleware);
