import React, {PureComponent} from 'react';
import Main from '../main/main.jsx';
import PropTypes from 'prop-types';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import FilmDetails from '../film-details/film-details.jsx';

const titleClickHandler = () => {};
const handleCardHover = (filmId) => {
  return filmId;
};

class App extends PureComponent {
  constructor(props) {
    super(props);
  }

  _renderHomePage() {
    const {title, genre, release, movies} = this.props;

    return (
      <Main
        title = {title}
        genre = {genre}
        release = {release}
        movies = {movies}
        onTitleClick = {titleClickHandler}
        onCardHover = {handleCardHover}
      />
    );
  }

  _renderDetailsPage() {
    const {filmDetails} = this.props;
    const {title, genre, release, poster, picture} = filmDetails;
    const {rating, ratingAmount, description, director, actors} = filmDetails;
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
  title: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  release: PropTypes.number.isRequired,
  movies: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        picture: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
      })),
  filmDetails: PropTypes.shape({
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    release: PropTypes.number.isRequired,
    poster: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    ratingAmount: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    director: PropTypes.string.isRequired,
    actors: PropTypes.arrayOf(PropTypes.string.isRequired),
  }),
};

export default App;
