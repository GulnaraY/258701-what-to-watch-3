import React, {PureComponent} from 'react';
import Main from '../main/main.jsx';
import PropTypes from 'prop-types';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import FilmDetails from '../film-details/film-details.jsx';

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      step: -1,
    };

    this._handleTitlePictureClick = this._handleTitlePictureClick.bind(this);
  }

  _handleCardHover() {

  }

  _handleTitlePictureClick(filmId) {
    const {movies} = this.props;

    const activeIndex = movies.findIndex((elem) => elem.id === filmId);
    if (activeIndex + 1) {
      this.setState({step: activeIndex});
    }
  }

  _renderHomePage() {
    const {step} = this.state;
    const {movies} = this.props;
    const {promoTitle, promoGenre, promoRelease} = this.props;

    if (step === -1) {
      return (
        <Main
          title = {promoTitle}
          genre = {promoGenre}
          release = {promoRelease}
          movies = {movies}
          onTitleClick = {this._handleTitlePictureClick}
          onCardHover = {this._handleCardHover}
        />
      );
    }

    if (movies[step]) {
      const movie = movies[step];
      const {title, genre, release, poster, picture} = movie;
      const {rating, ratingAmount, description, director, actors} = movie;
      return (
        <FilmDetails
          title={title}
          genre={genre}
          release={release}
          poster={poster}
          picture={picture}
          rating={rating}
          ratingAmount={ratingAmount}
          description={description}
          director={director}
          actors={actors}
        />
      );
    }

    return null;
  }

  _renderDetailsPage() {
    const {movies} = this.props;
    const {title, genre, release, poster, picture} = movies[0];
    const {rating, ratingAmount, description, director, actors} = movies[0];
    return (
      <FilmDetails
        title={title}
        genre={genre}
        release={release}
        poster={poster}
        picture={picture}
        rating={rating}
        ratingAmount={ratingAmount}
        description={description}
        director={director}
        actors={actors}
      />
    );
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderHomePage()}
          </Route>
          <Route exact path="/dev-film">
            {this._renderDetailsPage()}
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  promoTitle: PropTypes.string.isRequired,
  promoGenre: PropTypes.string.isRequired,
  promoRelease: PropTypes.number.isRequired,
  movies: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        picture: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
        genre: PropTypes.string.isRequired,
        release: PropTypes.number.isRequired,
        poster: PropTypes.string.isRequired,
        rating: PropTypes.number.isRequired,
        ratingAmount: PropTypes.number.isRequired,
        description: PropTypes.string.isRequired,
        director: PropTypes.string.isRequired,
        actors: PropTypes.arrayOf(PropTypes.string.isRequired),
      })),
};

export default App;
