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
      slicePosition: 8,
    };
  }

  _filterMovies(movies, activeGenre, quantity) {
    let filtredMovies = movies.slice(0, quantity);

    if (activeGenre !== GenresMap.ALL_GENRES) {
      filtredMovies = movies.filter((movie) => movie.genre === activeGenre).slice(0, quantity);
    }

    return filtredMovies;
  }

  render() {
    const {movies, onTitleClick, activeGenre, quantity} = this.props;
    const filtredMovies = this._filterMovies(movies, activeGenre, quantity);

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
  quantity: PropTypes.number.isRequired,
};

export default FilmsList;
