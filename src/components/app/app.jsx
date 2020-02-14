import React, {PureComponent} from 'react';
import Main from '../main/main.jsx';
import PropTypes from 'prop-types';

const titleClickHandler = () => {};
const handleCardHover = (filmId) => {
  return filmId;
};

class App extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
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
