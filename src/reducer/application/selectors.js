import NameSpace from '../name-space.js';

export const getActiveGenre = (state) => {
  return state[NameSpace.APPLICATION].activeGenre;
};

export const getMoviesToShow = (state) => {
  return state[NameSpace.APPLICATION].moviesToShow;
};
