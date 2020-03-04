import React from 'react';
import PropTypes from 'prop-types';
import {GenresMap} from '../../const.js';

const GenresList = (props) => {
  const {films, onGenreClick, activeGenre} = props;

  const genres = Array.from(new Set(films.map((film) => film.genre))).slice(0, 9);
  genres.unshift(GenresMap.ALL_GENRES);
  return (
    <ul className="catalog__genres-list">
      {genres.map((genre, i) => (
        <li
          key ={i + genre}
          className={`catalog__genres-item ${activeGenre === genre ? `catalog__genres-item--active` : ``}`}>
          <a href="#" className="catalog__genres-link"
            onClick={((evt) =>{
              evt.preventDefault();
              onGenreClick(evt.target.text);
            })}>
            {genre}
          </a>
        </li>
      ))}
    </ul>
  );
};

GenresList.propTypes = {
  films: PropTypes.array.isRequired,
  onGenreClick: PropTypes.func.isRequired,
  activeGenre: PropTypes.string.isRequired,
};
export default GenresList;
