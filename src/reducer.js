import {extend} from './utils.js';
import films from './mocks/films.js';
import {GenresMap} from  './const.js';

export const initialState = {
  activeGenre: GenresMap.ALL_GENRES,
  movies: films,
};

const ActionType = {
  CHANGE_GENRE: `CHANGE_GENRE`,
  GET_FILMS_BY_GENRE: `GET_FILMS_BY_GENRE`,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_GENRE:
      return extend(state, {
        activeGenre: action.payload,
      });
  }

  return state;
};

export {reducer, ActionType};
