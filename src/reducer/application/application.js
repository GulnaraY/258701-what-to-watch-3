import {extend} from '../../utils.js';
import {GenresMap} from '../../const.js';

const ONE_RENDER_QUANTITY = 8;

export const initialState = {
  activeGenre: GenresMap.ALL_GENRES,
  moviesToShow: ONE_RENDER_QUANTITY,
  activeMovie: 0,
};

const ActionType = {
  CHANGE_GENRE: `CHANGE_GENRE`,
  SHOW_MORE: `SHOW_MORE`,
  SET_ACTIVE_FILM: `SET_ACTIVE_FILM`,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_GENRE:
      return extend(state, {
        activeGenre: action.payload,
        moviesToShow: ONE_RENDER_QUANTITY,
      });
    case ActionType.SHOW_MORE:
      return extend(state, {
        moviesToShow: state.moviesToShow + ONE_RENDER_QUANTITY,
      });
    case ActionType.SET_ACTIVE_FILM:
      return extend(state, {
        activeMovie: action.payload,
      });
  }

  return state;
};

export {reducer, ActionType};
