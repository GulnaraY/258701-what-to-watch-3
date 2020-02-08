import React from 'react';
import Main from '../main/main.jsx';
import PropTypes from 'prop-types';

const titleClickHandler = () => {};

const App = (props) => {

  const {title, genre, release, movies} = props;

  return (
    <Main
      title = {title}
      genre = {genre}
      release = {release}
      movies = {movies}
      onTitleClick = {titleClickHandler}
    />
  );
};

App.propTypes = {
  title: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  release: PropTypes.number.isRequired,
  movies: PropTypes.arrayOf(
      PropTypes.string.isRequired
  ),
};

export default App;
