import React, {PureComponent} from 'react';
import {Main} from '../main/main.jsx';
import PropTypes from 'prop-types';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import FilmDetails from '../film-details/film-details.jsx';
import {connect} from 'react-redux';

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      step: -1,
    };

    this._handleTitlePictureClick = this._handleTitlePictureClick.bind(this);
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
    const {promoTitle, promoGenre, promoRelease, promoVideo, promoPoster} = this.props;

    if (step === -1) {
      return (
        <Main
          title = {promoTitle}
          genre = {promoGenre}
          release = {promoRelease}
          movies = {movies}
          onTitleClick = {this._handleTitlePictureClick}
          video = {promoVideo}
          poster = {promoPoster}
        />
      );
    }

    if (movies[step]) {
      const movie = movies[step];
      const {title, genre, release, poster, picture, video} = movie;
      const {rating, ratingAmount, description, director, actors, runTime} = movie;
      const {reviews} = movie;
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
          runTime={runTime}
          reviews={reviews}
          movies={movies}
          currentIndex={step}
          onTitleClick={this._handleTitlePictureClick}
          video={video}
        />
      );
    }

    return null;
  }

  _renderDetailsPage() {
    const {movies} = this.props;
    const {title, genre, release, poster, picture, video} = movies[0];
    const {rating, ratingAmount, description, director, actors, runTime} = movies[0];
    const {reviews} = movies[0];
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
        runTime={runTime}
        reviews={reviews}
        movies={movies}
        currentIndex={0}
        onTitleClick={this._handleTitlePictureClick}
        video={video}
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
  promoVideo: PropTypes.string.isRequired,
  promoPoster: PropTypes.string.isRequired,
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
        runTime: PropTypes.string.isRequired,
        reviews: PropTypes.arrayOf(
            PropTypes.shape({
              text: PropTypes.string.isRequired,
              author: PropTypes.string.isRequired,
              dateTime: PropTypes.string.isRequired,
              rating: PropTypes.number.isRequired,
            })
        ),
      })),
};

const mapStateToProps = (state) => {
  const {movies} = state;
  return {movies};
};


const connectedComponent = connect(
    mapStateToProps,
    null
)(App);

export {connectedComponent as App};
