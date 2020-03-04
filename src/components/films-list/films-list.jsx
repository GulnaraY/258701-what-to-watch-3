import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import FilmCard from '../film-card/film-card.jsx';
import {GenresMap} from '../../const.js';

class FilmsList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeIndex: null,
      hoverTimeOut: null,
    };
  }

  render() {
    const {movies, onTitleClick, activeGenre} = this.props;

    let filtredMovies = movies;

    if (activeGenre !== GenresMap.ALL_GENRES) {
      filtredMovies = movies.filter((movie) => movie.genre === activeGenre);
    }

    return (
      <div className="catalog__movies-list"
        style={{width: 100 + `%`}}
      >
        {filtredMovies.map((movie, index) =>
          <FilmCard
            key = {index + movie}
            filmInfo={movie}
            onTitleClick={onTitleClick}
          />
        )}
      </div>
    );
  }
}

FilmsList.propTypes = {
  movies: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        picture: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
      })),
  onTitleClick: PropTypes.func.isRequired,
  activeGenre: PropTypes.string.isRequired,
};

export default FilmsList;
