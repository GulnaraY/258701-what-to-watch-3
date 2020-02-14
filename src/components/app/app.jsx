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

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderHomePage()}
          </Route>
          <Route exact path="/dev-film">
            <FilmDetails/>
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
};

export default App;
