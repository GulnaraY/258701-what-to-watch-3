import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import FilmCard from '../film-card/film-card.jsx';

class FilmsList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeIndex: null,
      hoverTimeOut: null,
    };
  }

  render() {
    const {movies, onTitleClick} = this.props;
    return (
      <div className="catalog__movies-list">
        {movies.map((movie, index) =>
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
};

export default FilmsList;
