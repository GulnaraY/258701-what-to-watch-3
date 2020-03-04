import {reducer, ActionType, initialState} from './reducer.js';

export const GenresMap = {
  ALL_GENRES: `All genres`,
  COMEDY: `Comedy`,
  DRAMA: `Drama`,
  CARTOON: `Cartoon`,
};

it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(void 0, {})).toEqual({
    activeGenre: GenresMap.ALL_GENRES,
    movies: initialState.movies
  });
});

it(`Reducer should change activeGenre by choosing a genre`, () => {
  expect(reducer({
    activeGenre: GenresMap.ALL_GENRES,
    movies: initialState.movies
  }, {
    type: ActionType.CHANGE_GENRE,
    payload: GenresMap.COMEDY,
  })).toEqual({
    activeGenre: GenresMap.COMEDY,
    movies: initialState.movies
  });
});
