import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import FilmCard from '../film-card/film-card.jsx';
import {connect} from 'react-redux';

class FilmsList extends PureComponent {
  constructor(props) {
    super(props);

    this._hoverTimeOut = null;
  }

  render() {
    const {movies, onTitleClick, quantity, activeMovie, onFilmCardMouseEnter, onFilmCardMouseLeave} = this.props;
    const slicedMovies = movies.slice(0, quantity);

    return (
      <div className="catalog__movies-list"
        style={{width: 100 + `%`}}
      >
        {slicedMovies.map((movie, index) =>
          <FilmCard
            key = {index + movie}
            filmInfo={movie}
            onTitleClick={onTitleClick}
            isPlaying={movie.id === activeMovie ? true : false}
            onFilmCardMouseEnter={onFilmCardMouseEnter}
            onFilmCardMouseLeave={onFilmCardMouseLeave}
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
  quantity: PropTypes.number.isRequired,
  onFilmCardMouseEnter: PropTypes.func.isRequired,
  onFilmCardMouseLeave: PropTypes.func.isRequired,
  activeMovie: PropTypes.number,
};

const mapStateToProps = (state) => {
  const {activeMovie} = state;
  return {activeMovie};
};

const mapDispatchToProps = (dispatch) => ({
  onFilmCardMouseEnter(id) {
    dispatch({type: `SET_ACTIVE_FILM`, payload: id});
  },

  onFilmCardMouseLeave() {
    dispatch({type: `SET_ACTIVE_FILM`, payload: 0});

  },
});

const connectedComponent = connect(
    mapStateToProps,
    mapDispatchToProps
)(FilmsList);

export {connectedComponent as FilmsList};
