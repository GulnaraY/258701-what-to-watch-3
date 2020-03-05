import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {FilmsList} from '../films-list/films-list.jsx';
import GenresList from '../genres-list/genres-list.jsx';
import ShowMoreButton from '../show-more-button/show-more-button.jsx';
import {connect} from 'react-redux';
import {GenresMap} from '../../const.js';

class Main extends PureComponent {
  constructor(props) {
    super(props);
  }

  _filterMovies(movies, activeGenre) {
    let filtredMovies = movies;

    if (activeGenre !== GenresMap.ALL_GENRES) {
      filtredMovies = movies.filter((movie) => movie.genre === activeGenre);
    }

    return filtredMovies;
  }

  render() {
    const {title, genre, release, movies, onTitleClick} = this.props;
    const {onGenreClick, activeGenre, moviesToShow, onShowMoreButtonClick} = this.props;
    const filtredMovies = this._filterMovies(movies, activeGenre);

    return (
      <React.Fragment>
        <section className="movie-card">
          <div className="movie-card__bg">
            <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel"/>
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header movie-card__head">
            <div className="logo">
              <a className="logo__link">
                <span className="logo__letter logo__letter--1">W</span>
                <span className="logo__letter logo__letter--2">T</span>
                <span className="logo__letter logo__letter--3">W</span>
              </a>
            </div>

            <div className="user-block">
              <div className="user-block__avatar">
                <img src="img/avatar.jpg" alt="User avatar" width="63" height="63"/>
              </div>
            </div>
          </header>

          <div className="movie-card__wrap">
            <div className="movie-card__info">
              <div className="movie-card__poster">
                <img
                  src="img/the-grand-budapest-hotel-poster.jpg"
                  alt="The Grand Budapest Hotel poster"
                  width="218"
                  height="327"/>
              </div>

              <div className="movie-card__desc">
                <h2 className="movie-card__title">{title}</h2>
                <p className="movie-card__meta">
                  <span className="movie-card__genre">{genre}</span>
                  <span className="movie-card__year">{release}</span>
                </p>

                <div className="movie-card__buttons">
                  <button className="btn btn--play movie-card__button" type="button">
                    <svg viewBox="0 0 19 19" width="19" height="19">
                      <use xlinkHref="#play-s"></use>
                    </svg>
                    <span>Play</span>
                  </button>
                  <button className="btn btn--list movie-card__button" type="button">
                    <svg viewBox="0 0 19 20" width="19" height="20">
                      <use xlinkHref="#add"></use>
                    </svg>
                    <span>My list</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="page-content">
          <section className="catalog">
            <h2 className="catalog__title visually-hidden">Catalog</h2>
            <GenresList
              films={movies}
              onGenreClick={onGenreClick}
              activeGenre={activeGenre}
            />

            <FilmsList
              movies={filtredMovies}
              onTitleClick={onTitleClick}
              quantity={moviesToShow}
            />
            {filtredMovies.length > moviesToShow
              ? <ShowMoreButton
                onShowMoreButtonClick={onShowMoreButtonClick}
              />
              : null
            }

          </section>

          <footer className="page-footer">
            <div className="logo">
              <a className="logo__link logo__link--light">
                <span className="logo__letter logo__letter--1">W</span>
                <span className="logo__letter logo__letter--2">T</span>
                <span className="logo__letter logo__letter--3">W</span>
              </a>
            </div>

            <div className="copyright">
              <p>© 2019 What to watch Ltd.</p>
            </div>
          </footer>
        </div>
      </React.Fragment>
    );
  }
}


Main.propTypes = {
  title: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  release: PropTypes.number.isRequired,
  movies: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        picture: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
      })),
  onTitleClick: PropTypes.func.isRequired,
  onGenreClick: PropTypes.func.isRequired,
  activeGenre: PropTypes.string.isRequired,
  moviesToShow: PropTypes.number.isRequired,
  onShowMoreButtonClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  const {activeGenre, moviesToShow} = state;
  return {activeGenre, moviesToShow};
};

const mapDispatchToProps = (dispatch) =>({
  onGenreClick(genre) {
    dispatch({type: `CHANGE_GENRE`, payload: genre});
  },
  onShowMoreButtonClick() {
    dispatch({type: `SHOW_MORE`});
  }
});

const connectedComponent = connect(
    mapStateToProps,
    mapDispatchToProps
)(Main);

export {connectedComponent as Main};
