import React from 'react';
import PropTypes from 'prop-types';
import FilmCard from '../film-card/film-card.jsx';

const FilmsList = ({movies, onTitleClick, onCardHover}) => {

  return (
    <div className="catalog__movies-list">
      {movies.map((movie, index) =>
        <FilmCard
          key = {index + movie}
          filmInfo={movie}
          onTitleClick={onTitleClick}
          onCardHover={onCardHover}
        />
      )}
    </div>
  );
};

FilmsList.propTypes = {
  movies: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        picture: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
      })),
  onTitleClick: PropTypes.func.isRequired,
  onCardHover: PropTypes.func.isRequired,
};

export default FilmsList;
