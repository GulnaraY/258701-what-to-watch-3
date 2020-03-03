import {extend} from './utils.js';
import films from './mocks/films.js';
import {GenresMap} from './const.js';

const ONE_RENDER_QUANTUTY = 8;

export const initialState = {
  activeGenre: GenresMap.ALL_GENRES,
  movies: films,
  moviesToShow: ONE_RENDER_QUANTUTY,
};

const ActionType = {
  CHANGE_GENRE: `CHANGE_GENRE`,
  SHOW_MORE: `SHOW_MORE`,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_GENRE:
      return extend(state, {
        activeGenre: action.payload,
        moviesToShow: ONE_RENDER_QUANTUTY,
      });
    case ActionType.SHOW_MORE:
      return extend(state, {
        moviesToShow: state.moviesToShow + ONE_RENDER_QUANTUTY,
      });
  }

  return state;
};

export {reducer, ActionType};
