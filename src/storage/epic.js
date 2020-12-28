import { combineEpics } from 'redux-observable';
import { fetchCharactersEpic } from './epics/character';

const epic = combineEpics(
  fetchCharactersEpic
);

export default epic
