import NameSpace from '../name-space.js';
import {createSelector} from 'reselect';
import {GenresMap} from '../../const.js';

export const getMovies = (state) => {
  return state[NameSpace.DATA].movies;
};

const getGenre = (state) => {
  return state[NameSpace.APPLICATION].activeGenre;
};

export const getPromoMovie = (state) => {
  return state[NameSpace.DATA].promoMovie;
};

export const getMoviesByGenre = createSelector(
    getMovies,
    getGenre,
    (movies, genre) => {
      if (genre !== GenresMap.ALL_GENRES) {
        return movies.filter((it) => genre === it.genre);
      }
      return movies;
    }
);
